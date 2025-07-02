grammar CiscoIOS;

config: line+ EOF;

line
    : NEWLINE
    | statement
    ;

statement
    : exec_stmt
    | priv_stmt
    | global_stmt
    | EXIT
    ;

//---------- EXEC USER MODE -----------
exec_stmt
    : enable_stmt
    ;

enable_stmt: ENABLE;

//---------- PRIV EXEC MODE -----------
priv_stmt
    : conft_stmt
    ;

conft_stmt: CONFT;

//---------- GLOBAL CONF MODE -----------
global_stmt
    : ospf_stmt
    | int_stmt
    | rip_stmt
    | grundkonfig_stmt
    | linecon_stmt
    | linevty_stmt
    | dhcp_stmt
    ;

grundkonfig_stmt
    : HOSTNAME STR
    | BANNER MOTD BANNER_TEXT
    | USERNAME STR 
    | IP DOMAIN NAME DOMAIN_NAME
    | NO IP DOMAIN NAME
    | IP SSH VERSION INT;

linecon_stmt: LINE CON INT linecon_body* EXIT?;

linecon_body
    : NEWLINE
    | LOGIN LOCAL
    | LOGGING SYNCHRONUS
    | EXEC_TIMEOUT INT INT;
    
linevty_stmt: LINE VTY INT INT linevty_body* EXIT?;

linevty_body
    : NEWLINE
    | LOGIN LOCAL
    | LOGGING SYNCHRONUS
    | EXEC_TIMEOUT INT INT
    | TRANSPORT INPUT SSH TELNET;

ospf_stmt: ROUTER OSPF INT ospf_body* EXIT?;

ospf_body
    : NEWLINE
    | NETWORK IP_ADDR IP_ADDR
    | PASSIVE_INTERFACE INT_NAME INT_NUM
    | ROUTER_ID IP_ADDR;
    

int_stmt: INTERFACE INT_NAME INT_NUM int_body* EXIT?;

int_body
    : NEWLINE
    | NO SHUT
    | SHUT
    | IP ADDR IP_ADDR IP_ADDR
    | DESCRIPTION STR+;

rip_stmt: ROUTER RIP rip_body* EXIT?;
    
rip_body
    : NEWLINE
    | ROUTER RIP
    | VERSION INT
    | NO AUTO_SUMMARY
    | NETWORK IP_ADDR;
    
dhcp_stmt: IP DHCP POOL STR dhcp_body* EXIT?;

dhcp_body
    : NEWLINE
    | NETWORK IP_ADDR IP_ADDR
    ;

//---------- EXEC USER MODE -----------
ENABLE: 'enable';

//---------- PRIV EXEC MODE -----------
CONFT: 'configure terminal';

//---------- GLOBAL CONFIG MODE KEYWORDS ----------
ROUTER: 'router';
OSPF: 'ospf';
EXIT: 'exit';
NO: 'no';
INTERFACE: 'interface';
INT_NAME: 'gigabitethernet' | 'fastethernet' | 'serial';
INT_NUM: [0-9]+ '/' [0-9]+;


//---------- GRUNDKONFIG -----------
HOSTNAME: 'hostname';
BANNER: 'banner';
MOTD: 'motd';
DOMAIN: 'domain';
NAME: 'name';
SSH: 'ssh';
USERNAME: 'username';


//---------- LINE VTY / CON ---------
LINE: 'line';
VTY: 'vty';
CON: 'con';
//LINE_NUM: [0-9]+;
//VTY_NUM1: [0-9]+;
//VTY_NUM2: [0-9]+;
LOGIN: 'login';
LOCAL: 'local';
LOGGING: 'logging';
SYNCHRONUS: 'synchronous';
EXEC_TIMEOUT: 'exec-timeout';
//ET_NUM1: [0-9]+;
//ET_NUM2: [0-9]+;
TRANSPORT: 'transport';
INPUT: 'input';
TELNET: 'telnet';

//---------- OSPF KEYWORDS ----------
PASSIVE_INTERFACE: 'passive-interface';
ROUTER_ID: 'router-id';

//--------- INT KEYWORDS -----------

DESCRIPTION: 'description';
SHUT: 'shutdown';
ADDR: 'address';

//--------- RIP KEYWORDS -----------
RIP: 'rip';
VERSION: 'version';
AUTO_SUMMARY: 'auto-summary';

//--------- DHCP KEYWORDS ---------

DHCP: 'dhcp';
POOL: 'pool';


//---------- COMMON TOKENS ----------


INT: DIGIT+;
fragment DIGIT: [0-9];

IP_ADDR: INT '.' INT '.' INT '.' INT;
SUB_ADDR: INT '.' INT '.' INT '.' INT;

DOMAIN_NAME: [a-zA-Z0-9]+ ('.' [a-zA-Z0-9-]+)+ ;

NETWORK: 'network';
IP: 'ip';


STR: [a-zA-Z_][a-zA-Z0-9_-]* ;     
BANNER_TEXT: '#' ~[#\r\n]* '#';


//HOSTNAME_NAME: [a-zA-Z_][a-zA-Z0-9_-]* ;
//USERNAME_NAME: [a-zA-Z_][a-zA-Z0-9_-]* ;
//POOL_NAME: [a-zA-Z_][a-zA-Z0-9_-]* ;
//BANNER_MESSAGE: ~[\r\n#]+ ;

//---------- WHITESPACE & OTHER ----------
NEWLINE: [\r\n]+;
WS: [ \t]+ -> skip;
ANY: . ;