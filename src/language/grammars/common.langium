

IP: ip = IP_ADDRESS;

Exit:
    command='exit' NL
    ;

terminal IP_ADDRESS:(INT'.'INT'.'INT'.'INT);
terminal COMMENT: /[!#].+/;
terminal INPUT: /[a-zA-Z_][a-zA-Z0-9\-_\/]*/;
terminal INT: /[0-9]+/;
hidden terminal WS: /[ \t]+/;
terminal NL: '\r'? '\n';