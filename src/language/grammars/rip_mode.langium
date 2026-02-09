import 'configure_mode'
import 'common'

//Exit zurück in den Configure terminal Mode
Exit_rip:
    command='exit' CR continuation+=Configure_cmds
    ;

//Optionen für den RIP Modus
Rip_cmds:
    lines+=(
        COMMON
        | Rip_no_cmds
        | Rip_network_cmd
        | Rip_version_cmd
        | Rip_passive_interface_cmd
        | Rip_default_information_cmd
        | Rip_redistribute_cmd
    )* Exit_rip
    ;

//-------no auto-sum--------
Rip_no_cmds:
    'no' options=Rip_no_cmd_options CR
    ;

Rip_no_cmd_options:
    options='auto-summary'
    ;

//-------Network--------
Rip_network_cmd:
    'network' ip=IP CR
    ;

//------Version---------
Rip_version_cmd:
    'version' RipVersion=RIP_VERSION_NUMBER;

//-----------passive-interface---------
Rip_passive_interface_cmd:
    'passive-interface' types=Rip_interface_types
    ;

Rip_interface_types:
      Rip_passive_interface_type_gigabitethernet
    | Rip_passive_interface_type_fastethernet
    ;

Rip_passive_interface_type_gigabitethernet:
    type='gigabitethernet' number=RIP_PASSIVE_INTERFACE_NUMBER CR 
    ;

Rip_passive_interface_type_fastethernet:
    type='fastethernet' number=RIP_PASSIVE_INTERFACE_NUMBER CR
    ;

//------default-information----------
Rip_default_information_cmd:
    'default-information' option=Rip_default_information_cmd_options CR
    ;

Rip_default_information_cmd_options:
    option='originate'
    ;

//-------Redistribute--------
Rip_redistribute_cmd:
    'redistribute' option=Rip_redistribute_cmd_options CR
    ;

Rip_redistribute_cmd_options:
    option='static'
    ;