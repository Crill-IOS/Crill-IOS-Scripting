import 'keywords'

//Only Parser Rules can be checked with the validator:
IP: value = IPv4_DDC;
WILDCARDMASK: value = IPv4_DDC;
SUBNETMASK: value = IPv4_DDC;

//end of line comments
COMMENT:
    value=COMMENT_TOKEN
    ;

COMMON :
    NL|
    COMMENTLINE
    ;

// start of line comments
COMMENTLINE:
    value=COMMENT_TOKEN
    ;

fragment CR :
    comment=COMMENT? NL
    ;

HOSTNAME_INPUT :  value=(INPUT_lexer | KEYWORDS); 
USERNAME_INPUT: value=(INPUT_lexer | KEYWORDS);
USERNAME_PASSWORD_INPUT: value=(INPUT_lexer | KEYWORDS);
PRIVILEGE_INPUT: value=INT;
MODULUS_INPUT: value=INT;
VERSION_INPUT : value=INT;
BANNER_MESSAGE: message+=(INPUT_lexer | KEYWORDS)+;
DOMAINNAME_INPUT: value= (INPUT_lexer | KEYWORDS);

OSPF_PROCESS_NUMBER: value= INT;
OSPF_AREA_NUMBER: value= INT;
OSPF_COST_NUMBER: value=INT;
OSPF_PRIORITY_NUMBER: value=INT;
OSPF_PASSIVE_INTERFACE_NUMBER: value=INTERFACE_NUMBER;

INTERFACE_NUMBER_INPUT: value=INTERFACE_NUMBER;
DESCRIPTION_INPUT: value+=(INPUT_lexer | KEYWORDS | INTERFACE_NUMBER | INT)+;
NAT_INTERFACE_NUMBER_INPUT: value=INTERFACE_NUMBER;

ACL_NUMBER: value=INT;
ACL_PORT_NUMBER: value=INT;
ACL_STATEMENT_NUMBER: value=INT;

CONSOLE_NUMBER: value=INT;
VTY_NUMBER: value=INT;

BGP_AS_NUMBER: value=INT;
BGP_EBGP_MULTIHOP_NUMBER: value=INT;
UPDATE_SOURCE_INTERFACE_NUMBER_INPUT: value=INTERFACE_NUMBER;

INTERFACE_SPEED_NUMBER: value=INT;
INTERFACE_CARRIER_DELAY_NUMBER: value=INT;
INTERFACE_VLAN_NUMBER: value=INT;

RIP_VERSION_NUMBER: value=INT;
RIP_PASSIVE_INTERFACE_NUMBER: value=INTERFACE_NUMBER;

// DAS HIER IST KEINE LANGZEIT LÖSUNG
Star returns string:
    '*'
    ;

hidden terminal WS: /[ \t]+/;
terminal COMMENT_TOKEN: /[#!][^\r\n]*/;
terminal INTERFACE_NUMBER: /[0-9]+\/[0-9]+(\.[0-9]+)?/;
terminal NL: '\r'? '\n';
terminal IPv4_DDC: (INT'.'INT'.'INT'.'INT);
terminal INPUT_lexer: /[A-Za-z0-9\-_.,]*[A-Za-z][A-Za-z0-9\-_.,]*/;
terminal INT: /[0-9]+/;