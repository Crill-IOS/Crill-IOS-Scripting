import 'common'
import 'configure_mode'
import 'interface_mode'

// ---- GigabitEthernet-cmds ----
Interface_gigabitethernet_cmds:
      COMMON
    | IP_cmd_interface
    | Shutdown_cmd
    | No_cmd_interface
    | Description_cmd
    | Duplex_cmd
    | Speed_cmd
    | Exit_interface
    ;

Duplex_cmd:
    'duplex' option=Duplex_option CR;

Duplex_option:
      option=Duplex_auto
    | option=Duplex_full
    | option=Duplex_half
    ;

Duplex_auto returns string:
    'auto';

Duplex_full returns string:
    'full';

Duplex_half returns string:
    'half';


Speed_cmd:
    'speed' value=INT CR;
