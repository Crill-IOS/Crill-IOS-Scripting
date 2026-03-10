// interface_mode

import 'common'
import 'configure_mode'
import 'acl_mode'

// ---- Gemeinsame Subcommands für alle Interfaces ----
IP_cmd_interface:
    'ip' option=Ip_cmd_options;

Ip_cmd_options:
      Ip_cmd_option_address
    | Ip_cmd_option_ospf
    | Ip_cmd_option_nat
    | Ip_cmd_option_access_group
    ;

Ip_cmd_option_address:
    'address' ip=IP mask=SUBNETMASK ('secondary')? CR;

Ip_cmd_option_ospf:
    'ospf' option=Ip_cmd_option_ospf_options CR;

Ip_cmd_option_ospf_options:
    Ip_cmd_option_ospf_option_cost
    | Ip_cmd_option_ospf_option_priority
    ;

Ip_cmd_option_ospf_option_cost:
    'cost' cost=OSPF_COST_NUMBER;

Ip_cmd_option_ospf_option_priority:
    'priority' priority=OSPF_PRIORITY_NUMBER;

//------IP NAT INSIDE/OUTSIDE-------
Ip_cmd_option_nat:
    'nat' direction=Nat_direction CR
    ;

Nat_direction:
      Nat_inside
    | Nat_outside
    ;

Nat_inside:
    direction='inside'
    ;

Nat_outside:
    direction='outside'
    ;

//------IP ACCESS-GROUP-------
Ip_cmd_option_access_group:
    'access-group' name=ACL_NAME direction=Access_group_direction CR
    ;

Access_group_direction:
      Access_group_in
    | Access_group_out
    ;

Access_group_in:
    direction='in'
    ;

Access_group_out:
    direction='out'
    ;

Shutdown_cmd:
    'shutdown' CR;

No_cmd_interface:
    'no' option=No_cmd_interface_option;

No_cmd_interface_option:
    'shutdown' CR;

Description_cmd:
    'description' value=DESCRIPTION_INPUT CR;