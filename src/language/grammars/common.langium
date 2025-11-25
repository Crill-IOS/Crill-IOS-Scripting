import 'keywords'

//Only Parser Rules can be checked with the validator:
IP: value = IPv4_DDC;
WILDCARDMASK: value = IPv4_DDC;
SUBNETMASK: value = IPv4_DDC;

Exit:
    command='exit' CR
    ;

//end of line comments
COMMENT:
    delim=('#'|'!') text+=INPUT+
    ;

COMMON :
    NL|
    COMMENTLINE
    ;

// start of line comments
COMMENTLINE:
    delim=('#'|'!') text+=INPUT+
    ;

fragment CR :
    comment=COMMENT? NL
    ;

INPUT returns string:
    (INPUT_lexer)
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


// DAS HIER IST KEINE LANGZEIT LÖSUNG
Star returns string:
    '*'
    ;

hidden terminal WS: /[ \t]+/;
terminal NL: '\r'? '\n';
terminal IPv4_DDC: (INT'.'INT'.'INT'.'INT);
terminal INPUT_lexer: /[A-Za-z0-9\-_.,]*[A-Za-z][A-Za-z0-9\-_.,]*/;
terminal INT: /[0-9]+/;

