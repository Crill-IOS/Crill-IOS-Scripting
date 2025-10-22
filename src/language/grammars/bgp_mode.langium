import 'common'

import 'configure_mode'
Bgp_cmd:
    'bgp' asn=INT cr=CR lines+=Bgp_cmds+
    ;

//------Exit--------
Exit_bgp infers Exit:
    Exit lines+= Configure_cmds+
    ;

//------BGP SUBCOMMANDS (minimal)----------------------------
Bgp_cmds:
    (
        COMMON
      | Bgp_router_id_cmd
      | Bgp_neighbor_cmd
      | Bgp_network_cmd
      | Exit_bgp
    )
    ;

Bgp_router_id_cmd:
    'bgp' 'router-id' id=IP cr=CR
    ;


//--------------------------Neighbour------------------

Bgp_neighbor_cmd:
    'neighbor' neighbour=IP option=Bgp_neighbour_options cr=CR
    ;

Bgp_neighbour_options:
    Bgp_neighbour_Remote_as_option
    | Bgp_neighbour_update_source_option
    | Bgp_neigbour_ebgp_multihop_option
    | Bgp_neighbour_next_hop_self_option
    | Bgp_neighbour_route_reflector_option
    ;

//--------Remote-as---------
Bgp_neighbour_Remote_as_option:
    'remote-as' remoteASnumber=INT
    ;


//-------Update-source----------
Bgp_neighbour_update_source_option:
    'update-source' Bgp_update_source_interface_types
    ;

Bgp_update_source_interface_types:
    Bgp_update_source_interface_type_gigabitethernet
    | Bgp_update_source_interface_type_fastethernet
    ;

Bgp_update_source_interface_type_gigabitethernet:
    type='gigabitethernet' number=Bgp_update_source_interface_number cr=CR
    ;

Bgp_update_source_interface_type_fastethernet:
    type='fastethernet' number=Bgp_update_source_interface_number cr=CR
    ;

Bgp_update_source_interface_number:
     number= INT '/' INT Bgp_update_source_Sub_Interface_number?
    ;

Bgp_update_source_Sub_Interface_number :
    sub = '.'INT
    ;

//-------ebgp-multihop------
Bgp_neigbour_ebgp_multihop_option:
    'ebgp-multihop' multihop=INT
    ;


//-------next-hop-self--------
Bgp_neighbour_next_hop_self_option returns string:
    'next-hop-self'
    ;

//------route-reflector-client--------
Bgp_neighbour_route_reflector_option returns string:
    'route-reflector-client'
    ;



Bgp_network_cmd:
    'network' ip=IP 'mask' mask=IP cr=CR
    ;
