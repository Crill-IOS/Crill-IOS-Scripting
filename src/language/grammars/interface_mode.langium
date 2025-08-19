import 'common'

//parent Modes
import 'configure_mode'

//child Modes
import 'test'

//Exit Command
Exit_interface infers Exit:
    Exit lines+=Configure_cmds+
    ;


//Start-----------------------------

Interface_cmds:
    NL
    |IP_cmd
    | Shutdown_cmd
    | Exit_interface
    ;

Shutdown_cmd:
    command= 'shutdown'
    ;


IP_cmd:
    'ip' option=Ip_cmd_options
    ;


Ip_cmd_options:
    Ip_cmd_option_address
    | Ip_cmd_option_ospf
    ;

Ip_cmd_option_address:
    'address' ip = IP mask= SUBNETMASK 'secondary'? NL
    ;
Ip_cmd_option_ospf:
    'ospf' option = ('cost' | 'priority')
    ;

