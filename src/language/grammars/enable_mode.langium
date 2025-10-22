import 'common'

//child Modes
import 'configure_mode'


//Start--------------------------------
Enable_cmds :
    (
        COMMON
        |Configure_cmd
        |Show_cmd
        |Ping_cmd
    );



Ping_cmd:
    'ping' (hostname=[Hostname_Input] | ip=IP) CR
    ;

Show_cmd:
    'show' options=Show_cmd_options 
    ;

Show_cmd_options:
    option=
        'run' CR
        | 'interface' CR
    ;

Configure_cmd: 
    'configure' Configure_cmd_options
    ;

Configure_cmd_options:
        'terminal' CR lines+=Configure_cmds+ 
        |'memory' CR
    ;
