
import 'common'
import 'interface_mode'

// ---- VLAN-cmds ----
Interface_vlan_cmds:
    lines+=(
        COMMON
        | IP_cmd_interface
        | Description_cmd
        | Ip_Helper_cmd
    )* Exit_interface
    ;

Ip_Helper_cmd:
    'ip' 'helper-address' value=IP CR;