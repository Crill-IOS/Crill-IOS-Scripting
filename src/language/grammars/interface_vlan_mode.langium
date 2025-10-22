
import 'common'
import 'configure_mode'
import 'interface_mode'

// ---- VLAN-cmds ----
Interface_vlan_cmds:
      COMMON
    | IP_cmd_interface
    | Description_cmd
    | Ip_Helper_cmd
    | Exit_interface
    ;

Ip_Helper_cmd:
    'ip' 'helper-address' value=IP CR;
