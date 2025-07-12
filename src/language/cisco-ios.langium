grammar CiscoIOS

entry Stat:
   (commands+=Command)+
   ;

Command:
    Enable_Block
    | Comment
    ;

Enable_Block:
    Configure_cmd
    | Show_cmd
    ;

Show_cmd:
    'show' options=Show_cmd_options 
    ;

Configure_cmd:
    'configure' options=Configure_cmd_options
    ;

Configure_cmd_options:
    option=
        'terminal' NL configure_terminal_cmds+=Configure_Terminal_Block+
        |'memory' NL
    ;

Show_cmd_options:
    option=
        'run' NL
        | 'interface' NL
    ;

Configure_Terminal_Block:
        Hostname_cmd
        | Interface_cmd
    ;

Hostname_cmd:
    command='hostname' INPUT NL
    ;

Interface_cmd:
    'interface' Interface_types 
    ;

Interface_types:
    'gigabitethernet' Interface_number NL interface_cmds+= Interface_Block+
    |'vlan' INT
    ;
Interface_number:
    number = INT '/' INT
    ;


Interface_Block:
    IP_cmd
    |Shutdown_cmd
    |Interface_cmd
    |'exit' NL configure_terminal_cmds+= Configure_Terminal_Block+
    ;

Shutdown_cmd:
    command= 'shutdown'
    ;


IP_cmd:
    command='ip' Ip_cmd_options
    ;

Ip_cmd_options:
    option= 'address' NL
    | 'test' NL
    ;
Comment: 
    text=COMMENT;

terminal COMMENT: /[!#].+/;
terminal INPUT: /[a-zA-Z_][a-zA-Z0-9\-_\/]*/;
terminal INT: /[0-9]+/;
hidden terminal WS: /[ \t]+/;
terminal NL: '\r'? '\n';