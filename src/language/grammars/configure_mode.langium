//------IMPORTS-------
import 'common'

//parent Modes
import 'enable_mode'

//child Modes
import 'interface_mode'
import 'line_mode'
import 'console_mode'
import 'vty_mode'
import 'interface_fastethernet_mode'
import 'interface_gigabitethernet_mode'
import 'interface_vlan_mode'
import 'ospf_mode'
import 'rip_mode'
import 'bgp_mode'
import 'acl_mode'

//------EXIT: CONFIGURE → ENABLE-------
Exit_configure:
    command='exit' CR continuation+=Enable_cmds
    ;

//------CONFIGURE MODE: ENTRY-------
Configure_cmds:
    lines+=(
        COMMON
        | Hostname_cmd
        | Interface_cmd
        | Username_cmd
        | Banner_cmd
        | Ip_nat_cmd
        | IP_cmd
        | Crypto_cmd
        | Line_cmd
        | Router_cmd
        | No_cmd
    )* Exit_configure
    ;

//------USERNAME-------
Username_cmd :
    'username' name=USERNAME_INPUT options+= Username_cmd_option* CR;

Username_cmd_option:
    PrivilegeOption | PasswordOption | SecretOption | AlgorithmTypeOption;

PrivilegeOption:
    'privilege' value=PRIVILEGE_INPUT;

PasswordOption:
    'password' value=USERNAME_PASSWORD_INPUT;

SecretOption:
    'secret' value=USERNAME_PASSWORD_INPUT;

AlgorithmTypeOption:
    'algorithm-type' option=AlgorithmType_Options;

AlgorithmType_Options: MD5Option | ScryptOption | Sha256Option;

MD5Option:
    'md5' option=MD5Option_cmd;

MD5Option_cmd: 'secret' value=USERNAME_PASSWORD_INPUT;

ScryptOption:
    'scrypt' option=ScryptOption_cmd;

ScryptOption_cmd: 'secret' value=USERNAME_PASSWORD_INPUT;

Sha256Option:
    'sha256' option=Sha256Option_cmd;

Sha256Option_cmd: 'secret' value=USERNAME_PASSWORD_INPUT;

//------BANNER-------
Banner_cmd:
    'banner' option= Banner_cmd_option message=BANNER_MESSAGE CR;

Banner_cmd_option:
    option = (ConfigSaveOption | ExecOption | IncomingOption | LoginOption | MOTDOption | PromptTimeoutOption | SlipPPPOption);

ConfigSaveOption returns string:
    'config-save'
;
ExecOption returns string:
    'exec'
;

IncomingOption returns string:
    'incoming';

LoginOption returns string:
    'login';

MOTDOption returns string:
    'motd';

PromptTimeoutOption returns string:
    'prompt-timeout';

SlipPPPOption returns string:
    'slip-ppp';

//------IP (DOMAIN-NAME / SSH)-------
IP_cmd:
    'ip' option=IP_cmd_option
    ;

IP_cmd_option:
    Domainname_cmd
    | SSH_cmd
    | Ip_access_list_cmd_option
    ;

Domainname_cmd:
    'domain-name' value=DOMAINNAME_INPUT CR
    ;

SSH_cmd:
    'ssh' option=SSHOptions 
    ;

SSHOptions:
    'version' value=VERSION_INPUT CR
    ;

//------HOSTNAME-------
Hostname_cmd:
    'hostname' value=HOSTNAME_INPUT CR
    ;

//------CRYPTO-------
Crypto_cmd:
    'crypto' option=Crypto_cmd_option CR
    ;

Crypto_cmd_option:
    Key_cmd
    ;

Key_cmd:
    'key' option=Key_cmd_option
    ;

Key_cmd_option:
    Generate_cmd
    ;

Generate_cmd:
    'generate' option=Generate_cmd_option
    ;

Generate_cmd_option:
    Rsa_cmd
    ;

Rsa_cmd:
    'rsa' option=Rsa_cmd_option
    ;

Rsa_cmd_option:
      UsageKeys_cmd
    ;

UsageKeys_cmd:
    'usage-keys' option=UsageKeys_Option
    ;

UsageKeys_Option:
    Modulus_cmd
    ;

Modulus_cmd:
    'modulus' value=MODULUS_INPUT
    ;



//------NO CMDS---------
No_cmd:
    'no' option=No_options CR
    ;

No_options:
      No_banner_cmd
    | No_ip_cmd
    ;

No_banner_cmd:
    'banner' option=Banner_type
    ;

Banner_type returns string:
      'motd'
    | 'login'
    | 'exec'
    | 'incoming'
    | 'prompt-timeout'
    | 'slip-ppp'
    | 'config-save'
    ;

No_ip_cmd:
    'ip' option= No_ip_cmd_options
    ;

No_ip_cmd_options:
        No_ip_cmd_option_domain_lookup
    ;
No_ip_cmd_option_domain_lookup:
    type='domain-lookup'
    ;

//------OSPF MODE-------
Router_cmd:
    'router' option=Router_cmd_option
    ;

Router_cmd_option:
    'ospf' process=OSPF_PROCESS_NUMBER CR Ospf_cmds
    | 'rip' CR Rip_cmds
    | 'bgp' asn=BGP_AS_NUMBER CR Bgp_cmds
    ;


//------LINE MODE-------
Line_cmd:
    command='line' types=Line_types
    ;

Line_types:
      Line_type_console
    | Line_type_vty
    ;

Line_type_console:
    type='console' number=CONSOLE_NUMBER CR Line_console_cmds
    ;

Line_type_vty:
    type='vty' start=VTY_NUMBER end=VTY_NUMBER CR Line_vty_cmds
    ;

//------INTERFACE MODE-------
Interface_cmd:
    'interface' types=Interface_types;

Interface_types:
      Interface_type_gigabitethernet
    | Interface_type_fastethernet
    | Interface_type_vlan
    ;

Interface_type_gigabitethernet:
    type='gigabitethernet' number=INTERFACE_NUMBER_INPUT CR Interface_gigabitethernet_cmds;

Interface_type_fastethernet:
    type='fastethernet' number=INTERFACE_NUMBER_INPUT CR Interface_fastethernet_cmds;

Interface_type_vlan:
    type='vlan' number=INTERFACE_VLAN_NUMBER CR Interface_vlan_cmds;

Ip_access_list_cmd_option:
    'access-list' option=Ip_access_list_option
    ;

Ip_access_list_option:
      Acl_standard_cmd
    | Acl_extended_cmd
    ;

//------IP NAT INSIDE SOURCE LIST-------
Ip_nat_cmd:
    'ip' option=Ip_nat_cmd_option
    ;

Ip_nat_cmd_option:
    'nat' option=Ip_nat_inside_cmd
    ;

Ip_nat_inside_cmd:
    'inside' option=Ip_nat_inside_source_cmd
    ;

Ip_nat_inside_source_cmd:
    'source' option=Ip_nat_inside_source_list_cmd
    ;

Ip_nat_inside_source_list_cmd:
    'list' listName=ACL_NAME option=Ip_nat_inside_source_list_interface_cmd
    ;

Ip_nat_inside_source_list_interface_cmd:
    'interface' interface=Nat_interface_types option=Ip_nat_overload_cmd
    ;

Ip_nat_overload_cmd:
    'overload' CR
    ;

Nat_interface_types:
      Nat_interface_gigabitethernet
    | Nat_interface_fastethernet
    ;

Nat_interface_gigabitethernet:
    'gigabitethernet' types=NAT_INTERFACE_NUMBER_INPUT
    ;

Nat_interface_fastethernet:
    'fastethernet' types=NAT_INTERFACE_NUMBER_INPUT
    ;