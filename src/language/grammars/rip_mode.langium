import 'configure_mode'
import 'common'

Rip_cmd:
    'rip' NL lines+=Rip_cmds+
    ;


//Exit zurück in den Configure terminal Mode
Exit_rip infers Exit:
    Exit lines+=Configure_cmds+
    ;

//Optionen für den RIP Modus
Rip_cmds:
    (
        NL
      | Rip_no_cmds
      | Rip_network_cmd
      | Rip_version_cmd
      | Rip_passive_interface_cmd
      | Rip_default_information_cmd
      | Rip_redistribute_cmd
      | Exit_rip
    )
    ;


//-------no auto-sum--------

Rip_no_cmds:
    'no' options=Rip_no_cmd_options NL
    ;

Rip_no_cmd_options:
    options='auto-summary'
    ;

//-------Network--------

Rip_network_cmd:
    'network' ip=IP NL
    ;

//------Version---------

Rip_version_cmd:
    'version' RipVersion=INT;

//-----------passive-interface---------
Rip_passive_interface_cmd:
    'passive-interface' types=Rip_interface_types
    ;

Rip_interface_types:
      Rip_passive_interface_type_gigabitethernet
    | Rip_passive_interface_type_fastethernet
    ;

Rip_passive_interface_type_gigabitethernet:
    type='gigabitethernet' number=Rip_passive_interface_number NL 
    ;

Rip_passive_interface_type_fastethernet:
    type='fastethernet' number=Rip_passive_interface_number NL
    ;

Rip_passive_interface_number:
     number= INT '/' INT Sub_Interface_number?
    ;

Rip_passive_Sub_Interface_number :
    sub = '.'INT
    ;

//------default-information----------
Rip_default_information_cmd:
    'default-information' option=Rip_default_information_cmd_options NL
    ;

Rip_default_information_cmd_options:
    option='originate'
    ;

//-------Redistribute--------
Rip_redistribute_cmd:
    'redistribute' option=Rip_redistribute_cmd_options NL
    ;

Rip_redistribute_cmd_options:
    option='static'
    ;