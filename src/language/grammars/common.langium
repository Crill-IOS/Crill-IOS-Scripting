//Only Parser Rules can be checked with the validator:
IP: value = IPv4_DDC;
SUBNETMASK: value = IPv4_DDC;
Hostname_Input :value= INPUT; 
Exit:
    command='exit' NL
    ;

terminal IPv4_DDC: (INT'.'INT'.'INT'.'INT);
terminal COMMENT: /[!#].+/;
terminal INPUT: /[a-zA-Z_][a-zA-Z0-9\-_\/]*/;
terminal INT: /[0-9]+/;
hidden terminal WS: /[ \t]+/;
terminal NL: '\r'? '\n';