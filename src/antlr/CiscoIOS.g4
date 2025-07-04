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
    | vpn_stmt
    ;

grundkonfig_stmt
    : HOSTNAME STR
    | BANNER MOTD BANNER_TEXT
    | USERNAME STR
    | IP DOMAIN NAME DOMAIN_NAME
    | NO IP DOMAIN NAME
    | IP DOMAINNAME DOMAIN_NAME
    | NO IP DOMAINNAME
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
    | DESCRIPTION STR+
    | CRYPTO MAP STR;

rip_stmt: ROUTER RIP rip_body* EXIT?;

rip_body
    : NEWLINE
    | ROUTER RIP
    | VERSION INT
    | NO AUTO_SUMMARY
    | NETWORK IP_ADDR;

dhcp_stmt
    : IP DHCP EXCLUDED_ADDRESS IP_ADDR (IP_ADDR)?
    | IP DHCP POOL STR dhcp_body* EXIT;

dhcp_body
    : NEWLINE
    | NETWORK IP_ADDR IP_ADDR
    | DEFAULT_ROUTER IP_ADDR
    | DNS_SERVER IP_ADDR
    | DOMAINNAME DOMAIN_NAME
    | HOST IP_ADDR IP_ADDR
    | CLIENT_IDENTIFIER STR;

vpn_stmt
    : CRYPTO ISAKMP ENABLE
    | CRYPTO ISAKMP POLICY INT vpn_isakmp_body* EXIT
    | CRYPTO ISAKMP KEY STR ADDR IP_ADDR
    | CRYPTO ISAKMP IDENTITY ADDR
    | CRYPTO IPSEC TRANSFORM_SET STR ESP_DES ESP_SHA_HMAC
    | CRYPTO MAP STR INT IPSEC ISAKMP vpn_crypto_map_body* EXIT;

vpn_isakmp_body
    : NEWLINE
    | AUTHENTICATION PRE_SHARE
    | ENCRYPTION DES
    | HASH MD5
    | GROUP INT
    | LIFETIME INT;

vpn_crypto_map_body
    : NEWLINE
    | MATCH ADDR STR
    | SET TRANSFORM_SET STR
    | SET PEER IP_ADDR;


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
DOMAINNAME: 'domain-name';
SSH: 'ssh';
USERNAME: 'username';

//---------- LINE VTY / CON ---------
LINE: 'line';
VTY: 'vty';
CON: 'con';
LOGIN: 'login';
LOCAL: 'local';
LOGGING: 'logging';
SYNCHRONUS: 'synchronous';
EXEC_TIMEOUT: 'exec-timeout';
TRANSPORT: 'transport';
INPUT: 'input';
TELNET: 'telnet';

//---------- OSPF KEYWORDS ----------
PASSIVE_INTERFACE: 'passive-interface';
ROUTER_ID: 'router-id';

//---------- INT KEYWORDS -----------
DESCRIPTION: 'description';
SHUT: 'shutdown';
ADDR: 'address';

//---------- RIP KEYWORDS -----------
RIP: 'rip';
VERSION: 'version';
AUTO_SUMMARY: 'auto-summary';

//---------- DHCP KEYWORDS ----------
DHCP: 'dhcp';
POOL: 'pool';
EXCLUDED_ADDRESS: 'excluded-address';
DEFAULT_ROUTER: 'default-router';
DNS_SERVER: 'dns-server';
CLIENT_IDENTIFIER: 'client-identifier';
HOST: 'host';

//---------- VPN / CRYPTO KEYWORDS ----------
CRYPTO: 'crypto';
ISAKMP: 'isakmp';
IPSEC: 'ipsec';
TRANSFORM_SET: 'transform-set';
ESP_DES: 'esp-des';
ESP_SHA_HMAC: 'esp-sha-hmac';
AUTHENTICATION: 'authentication';
PRE_SHARE: 'pre-share';
ENCRYPTION: 'encryption';
DES: 'des';
HASH: 'hash';
MD5: 'md5';
GROUP: 'group';
LIFETIME: 'lifetime';
IDENTITY: 'identity';
MAP: 'map';
MATCH: 'match';
SET: 'set';
PEER: 'peer';
POLICY: 'policy';
KEY: 'key';

//---------- COMMON TOKENS ----------
INT: DIGIT+;
fragment DIGIT: [0-9];

IP_ADDR: INT '.' INT '.' INT '.' INT;
SUB_ADDR: INT '.' INT '.' INT '.' INT;

DOMAIN_NAME: [a-zA-Z0-9]+ ('.' [a-zA-Z0-9-]+)+;

NETWORK: 'network';
IP: 'ip';

STR: [a-zA-Z_][a-zA-Z0-9_-]*;
BANNER_TEXT: '#' ~[#\r\n]* '#';

//---------- WHITESPACE & OTHER ----------
NEWLINE: [\r\n]+;
WS: [ \t]+ -> skip;
ANY: . ;