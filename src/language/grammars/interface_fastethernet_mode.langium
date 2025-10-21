import 'common'
import 'configure_mode'
import 'interface_mode'

// ---- FastEthernet-cmds ----
Interface_fastethernet_cmds:
      cr=CR
    | IP_cmd_interface
    | Shutdown_cmd
    | No_cmd_interface
    | Description_cmd
    | Speed_cmd_fe
    | CarrierDelay_cmd
    | Exit_interface
    ;

Speed_cmd_fe:
    'speed' value=INT cr=CR;

CarrierDelay_cmd:
    'carrier-delay' seconds=INT cr=CR;
