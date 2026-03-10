import 'common'

//child Modes
import 'configure_mode'

//Start--------------------------------
Enable_cmds :
    lines+=(
        COMMON
        |Configure_cmd
        |Show_cmd
        |Ping_cmd
        |Template_grundkonfig_cmd
    )+;

Ping_cmd:
    'ping' (ip=IP) CR
    ;

Show_cmd:
    'show' options=Show_cmd_options 
    ;

Show_cmd_options:
      Show_run_option
    | Show_interface_option
    ;

Show_run_option:
    option='run' CR
    ;

Show_interface_option:
    option='interface' CR
    ;

Configure_cmd: 
    'configure' Configure_cmd_options
    ;

Configure_cmd_options:
        'terminal' CR Configure_cmds
        |'memory' CR
    ;

