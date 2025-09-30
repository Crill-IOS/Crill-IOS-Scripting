//Only Parser Rules can be checked with the validator:
IP: value = IPv4_DDC;
WILDCARDMASK: value = IPv4_DDC;
SUBNETMASK: value = IPv4_DDC;
Hostname_Input: name= INPUT; 
Exit:
    command='exit' NL
    ;

COMMENT:
    delim=ANY text+=INPUT+
    ;

COMMON :
    NL|
    COMMENT
    ;

CR:
    COMMENT? NL
    ;


USERNAME_INPUT: value=INPUT;
USERNAME_PASSWORD_INPUT: value=INPUT;
MODULUS_INPUT: value=INT;
VERSION_INPUT: value=INT;
BANNER_MESSAGE: delim1=(ANY| INPUT | INT) message+=INPUT+  delim2=(ANY|INT)?;
DOMAINNAME_INPUT: value= INPUT;
OSPF_PROCESS_NUMBER: value= INT;



hidden terminal WS: /[ \t]+/;
terminal NL: '\r'? '\n';
terminal IPv4_DDC: (INT'.'INT'.'INT'.'INT);
terminal INPUT: /[A-Za-z0-9\-_.]*[A-Za-z][A-Za-z0-9\-_.]*/;
terminal INT: /[0-9]+/;
terminal ANY: /./;
