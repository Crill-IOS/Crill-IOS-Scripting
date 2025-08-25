//Only Parser Rules can be checked with the validator:
IP: value = IPv4_DDC;
SUBNETMASK: value = IPv4_DDC;
Hostname_Input: name= INPUT; 
Exit:
    command='exit' NL
    ;

USERNAME_INPUT: value=INPUT;
MODULUS_INPUT: value=INT;
VERSION_INPUT: value=INT;
BANNER_MESSAGE: value=INPUT;
DOMAINNAME_INPUT: value= INPUT;



terminal IPv4_DDC: (INT'.'INT'.'INT'.'INT);
terminal COMMENT: /[!#].+/;
terminal INPUT: /[A-Za-z0-9\-_.]*[A-Za-z]+[A-Za-z0-9\-_.]*/;
terminal INT: /[0-9]+/;
hidden terminal WS: /[ \t]+/;
terminal NL: '\r'? '\n';