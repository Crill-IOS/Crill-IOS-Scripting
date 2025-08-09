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
    command='ip' Ip_cmd_options
    ;


Ip_cmd_options:
    'address' ip = IP_ADDRESS NL
    ;


