// interface_mode

import 'common'
import 'configure_mode'

// Exit zurück in Configure-Mode
Exit_interface infers Exit:
    Exit lines+=Configure_cmds+
    ;

// ---- Gemeinsame Subcommands für alle Interfaces ----

IP_cmd_interface:
    'ip' option=Ip_cmd_options;

Ip_cmd_options:
      Ip_cmd_option_address
    | Ip_cmd_option_ospf
    ;

Ip_cmd_option_address:
    'address' ip=IP mask=SUBNETMASK ('secondary')? cr=CR;

Ip_cmd_option_ospf:
    'ospf' option=('cost' | 'priority') cr=CR;

Shutdown_cmd:
    'shutdown' cr=CR;

No_cmd_interface:
    'no' option=No_cmd_interface_option cr=CR;

No_cmd_interface_option:
    'shutdown' cr=CR;

Description_cmd:
    'description' value=INPUT cr=CR;
