import 'common'

//parent Modes
import 'enable_mode'

//child Modes
import 'interface_mode'

//Exit Command
Exit_configure infers Exit:
    Exit lines+=Enable_cmds+
    ;


//Start-------------------------------
Configure_cmds:
    commands=(
        NL
        | Hostname_cmd
        | Interface_cmd
        | Username_cmd
        | Exit_configure
    )
    ;


Username_cmd :
    'username' name=INPUT options+= Username_cmd_option* NL;


    
Username_cmd_option:
    PrivilegeOption | PasswordOption | SecretOption | AlgorithmTypeOption;

PrivilegeOption:
    'privilege' value=INT;

PasswordOption:
    'password' value=INPUT;

SecretOption:
    'secret' value=INPUT;

AlgorithmTypeOption:
    'algorithm-type' value=('md5' | 'scrypt' | 'sha256');



Hostname_cmd:
    'hostname' Hostname_Input NL
    ;

Interface_cmd:
    'interface' types=Interface_types
    ;

Interface_types:

    Interface_type_gigabitethernet
    | Interface_type_vlan
    ;

Interface_type_gigabitethernet:
    
    type= 'gigabitethernet' number=Interface_number NL lines+=Interface_cmds+
    ;

Interface_type_vlan:
    type ='vlan' INT 
    ;


Interface_number:
     number= INT '/' INT sub =Sub_Interface_number?
    ;

Sub_Interface_number returns string:
    ('.' INT)
    ;
