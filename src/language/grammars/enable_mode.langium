import 'common'

//child Modes
import 'configure_mode'


//Start--------------------------------
Enable_cmds :
    commands=(
        NL
        |Configure_cmd
        |Show_cmd
        |Ping_cmd
    );



Ping_cmd:
    'ping' IP SUBNETMASK NL
    ;

Show_cmd:
    'show' options=Show_cmd_options 
    ;

Show_cmd_options:
    option=
        'run' NL
        | 'interface' NL
    ;

Configure_cmd: 
    'configure' options=Configure_cmd_options
    ;

Configure_cmd_options:
    option=
        'terminal' NL lines+=Configure_cmds+ 
        |'memory' NL
    ;
