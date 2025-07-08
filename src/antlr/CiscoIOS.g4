grammar CiscoIOS;

stat: (enable_cmds NL)* (enable_cmds EOF)?;

enable_cmds: enable_cmd | configure_cmd | show_cmd;

enable_cmd: ENABLE;

show_cmd : SHOW show_cmd_options;

show_cmd_options: RUN | SHOW_IP_INT_BRIEF_TEST;

configure_cmd: CONFIGURE configure_cmd_options;

configure_cmd_options:
	TERMINAL NL configure_terminal_cmds+ NL EXIT?
	| MEMORY;

configure_terminal_cmds: hostname_cmd;

hostname_cmd: HOSTNAME hostname_cmd_options;
hostname_cmd_options: WORD;

ENABLE: 'enable';
SHOW: 'show';
RUN: 'run';
SHOW_IP_INT_BRIEF_TEST: 'show ip int brief';
MEMORY: 'memory';
CONFIGURE: 'configure';
HOSTNAME: 'hostname';
TERMINAL: 'terminal';
EXIT: 'exit';

WORD: [a-zA-Z_][a-zA-Z0-9_-]*;
NL: [\r\n]+;
WS: [ \t]+ -> skip;