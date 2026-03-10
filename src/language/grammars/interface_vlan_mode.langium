
import 'common'
import 'interface_mode'

// Exit zurück in Configure-Mode
Exit_interface_vlan:
    command='exit' CR continuation+=Configure_cmds
    ;

// ---- VLAN-cmds ----
Interface_vlan_cmds:
    lines+=(
        COMMON
        | IP_cmd_interface
        | Description_cmd
        | Ip_Helper_cmd
    )* Exit_interface_vlan
    ;

Ip_Helper_cmd:
    'ip' 'helper-address' value=IP CR;