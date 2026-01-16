import 'configure_mode'
import 'common'

Ospf_cmd:
    'ospf' process=INT CR lines+=Ospf_cmds+
    ;


//Exit zurück in den Configure terminal Mode
Exit_ospf infers Exit:
    Exit lines+=Configure_cmds+
    ;

//Optionen für den OSPF Modus
Ospf_cmds:
    (
        COMMON
      | Ospf_router_id_cmd
      | Ospf_network_cmd
      | Ospf_passive_interface_cmd
      | Ospf_priority_cmd
      | Ospf_default_information_cmd
      | Ospf_redistribute_cmd
      | Exit_ospf
    )
    ;


//-------Router-id--------

Ospf_router_id_cmd:
    'router-id' id=IP CR
    ;

//-------Network--------

Ospf_network_cmd:
    'network' ip=IP mask=WILDCARDMASK 'area' area=OSPF_AREA_NUMBER CR
    ;

//--------Passive-interface--------

Ospf_passive_interface_cmd:
    'passive-interface' types=Ospf_interface_types
    ;

Ospf_interface_types:
      Ospf_passive_interface_type_gigabitethernet
    | Ospf_passive_interface_type_fastethernet
    ;

Ospf_passive_interface_type_gigabitethernet:
    type='gigabitethernet' number=Ospf_passive_interface_number CR 
    ;

Ospf_passive_interface_type_fastethernet:
    type='fastethernet' number=Ospf_passive_interface_number CR
    ;

Ospf_passive_interface_number:
     number= INT '/' INT Ospf_passive_Sub_Interface_number?
    ;

Ospf_passive_Sub_Interface_number :
    sub = '.'INT
    ;


//------default-information----------
Ospf_default_information_cmd:
    'default-information' option=Ospf_default_information_cmd_options CR
    ;

Ospf_default_information_cmd_options:
    option='originate'
    ;

//-------Redistribute--------
Ospf_redistribute_cmd:
    'redistribute' option=Ospf_redistribute_cmd_options CR
    ;

Ospf_redistribute_cmd_options:
    option='static'
    ;


//------Priority--------
Ospf_priority_cmd:
    'priority' value=INT CR;

