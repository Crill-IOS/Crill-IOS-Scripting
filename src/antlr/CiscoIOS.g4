grammar CiscoIOS;

@parser::members {
	current_mode:string = "enable"

	currentMode(mode:string): boolean {
		return this.current_mode == mode
	}


}

stat: ((NL)* commands (NL)+)* EOF;

commands: 
	{this.currentMode("enable")}? enable_cmds
	| {this.currentMode("configure")}? configure_cmds
	| {this.currentMode("interface")}? interface_cmds
	;

enable_cmds:
	ENABLE
	| configure_cmd
	;


configure_cmd: 
	CONFIGURE configure_cmd_options
	;

configure_cmd_options:
	TERMINAL {
		this.current_mode = "configure";
		console.log("switch to configure mode!")
	}
	| MEMORY
	;

configure_cmds:
	hostname_cmd
	| interface_cmd {this.current_mode = "interface"}
	;

hostname_cmd:
	HOSTNAME WORD
	;

interface_cmd:
	INTERFACE interface_cmd_options
	;

interface_cmd_options:
	interface_types
	;

interface_types:
	GIGABITETHERNET interface_id
	| VLAN NUMBER
	;

interface_id:
	NUMBER '/' NUMBER
	;

interface_cmds:
	IP_ADDRESS_TEST
	;

ENABLE: 'enable';
SHOW: 'show';
RUN: 'run';
SHOW_IP_INT_BRIEF_TEST: 'show ip int brief';
MEMORY: 'memory';
CONFIGURE: 'configure';
HOSTNAME: 'hostname';
TERMINAL: 'terminal';
INTERFACE: 'interface';
GIGABITETHERNET: 'gigabitethernet';
VLAN: 'vlan';
EXIT: 'exit';
IP_ADDRESS_TEST: 'ip address';


WORD: [a-zA-Z_][a-zA-Z0-9_-]*;
NUMBER :[0-9];
NL: [\r\n]+;
WS: [ \t]+ -> skip;