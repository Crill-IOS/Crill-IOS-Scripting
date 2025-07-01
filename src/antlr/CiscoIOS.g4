grammar CiscoIOS;

config          : statement+ ;
statement       : interface_stmt
                | ip_stmt
                | no_stmt
                | router_stmt
                | network_stmt
                ;

interface_stmt  : 'interface' ID ;
ip_stmt         : 'ip' 'address' IPADDR IPADDR ;
no_stmt         : 'no' 'shutdown' ;
router_stmt     : 'router' 'ospf' INT ;
network_stmt    : 'network' IPADDR IPADDR 'area' INT ;

ID              : [a-zA-Z0-9/]+ ;
IPADDR          : INT+ '.' INT+ '.' INT+ '.' INT+ ;
INT             : [0-9]+ ;

WS              : [ \t\r\n]+ -> skip ;

