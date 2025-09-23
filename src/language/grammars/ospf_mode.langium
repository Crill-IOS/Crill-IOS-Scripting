import 'configure_mode'
import 'common'

Ospf_cmd:
    'ospf' process=INT NL lines+=Ospf_cmds+
    ;

Exit_ospf infers Exit:
    Exit lines+=Ospf_cmds+
    ;

Ospf_cmds:
    (
        NL
      | Ospf_router_id_cmd
      | Ospf_network_cmd
      | Ospf_passive_interface_cmd
    )
    ;

Ospf_router_id_cmd:
    'router-id' id=IPv4_DDC NL
    ;

Ospf_network_cmd:
    'network' ip=IPv4_DDC mask=IPv4_DDC 'area' area=INT NL
    ;

//Passive-interface

Ospf_passive_interface_cmd:
    'passive-interface' types=Ospf_interface_types
    ;

Ospf_interface_types:
      Ospf_passive_interface_type_gigabitethernet
    | Ospf_passive_interface_type_fastethernet
    ;

Ospf_passive_interface_type_gigabitethernet:
    type='gigabitethernet' number=Ospf_passive_interface_number NL 
    ;

Ospf_passive_interface_type_fastethernet:
    type='fastethernet' number=Ospf_passive_interface_number NL
    ;

Ospf_passive_interface_number:
     number= INT '/' INT Sub_Interface_number?
    ;

Ospf_passive_Sub_Interface_number :
    sub = '.'INT
    ;
