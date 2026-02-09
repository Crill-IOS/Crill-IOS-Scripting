import 'common'
import 'configure_mode'
import 'interface_mode'

// Exit zurück in Configure-Mode
Exit_interface_fastethernet:
    command='exit' CR continuation+=Configure_cmds
    ;

// ---- FastEthernet-cmds ----
Interface_fastethernet_cmds:
    lines+=(
        COMMON
        | IP_cmd_interface
        | Shutdown_cmd
        | No_cmd_interface
        | Description_cmd
        | Speed_cmd_fe
        | CarrierDelay_cmd
    )* Exit_interface_fastethernet
    ;

Speed_cmd_fe:
    'speed' value=INTERFACE_SPEED_NUMBER CR;

CarrierDelay_cmd:
    'carrier-delay' seconds=INTERFACE_CARRIER_DELAY_NUMBER CR;