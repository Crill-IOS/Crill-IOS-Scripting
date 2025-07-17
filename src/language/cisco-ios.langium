grammar CiscoIOS

entry Script:
    script=Stat
    ;

Stat:
   lines+=(Command | Comment | NL)+ 
   ;

Command:
    blocks = (
        Enable_cmds
        | Configure_cmds
        | Interface_cmds
    )
    ;

Enable_cmds infers Command:
    commands=(
        Configure_cmd
        |Show_cmd
        |Ping_cmd
    )
    ;

Ping_cmd:
    command = 'ping' target=[Hostname_cmd:INPUT] NL
    ;

Show_cmd:
    'show' options=Show_cmd_options 
    ;

Configure_cmd: 
    'configure' options=Configure_cmd_options
    ;

Configure_cmd_options:
    option=
        'terminal' NL
        |'memory' NL
    ;

Show_cmd_options:
    option=
        'run' NL
        | 'interface' NL
    ;

Configure_cmds infers Command:
        Hostname_cmd
        | Interface_cmd
    ;

Hostname_cmd:
    'hostname' name=INPUT NL
    ;

Interface_cmd:
    'interface' Interface_types 
    ;

Interface_types:
    'gigabitethernet' Interface_number NL
    |'vlan' INT NL
    ;
Interface_number:
    number = INT '/' INT
    ;

Interface_cmds infers Command:
    IP_cmd
    |Shutdown_cmd
    |Interface_cmd
    |'exit' NL 
    ;

Shutdown_cmd:
    command= 'shutdown'
    ;


IP_cmd:
    command='ip' Ip_cmd_options
    ;

Ip_cmd_options:
    option= 'address' ip = IP NL
    | 'test' NL
    ;
Comment: 
    text=COMMENT NL;

IP: ip = IP_ADDRESS;

terminal IP_ADDRESS:(INT'.'INT'.'INT'.'INT);
terminal COMMENT: /[!#].+/;
terminal INPUT: /[a-zA-Z_][a-zA-Z0-9\-_\/]*/;
terminal INT: /[0-9]+/;
hidden terminal WS: /[ \t]+/;
terminal NL: '\r'? '\n';