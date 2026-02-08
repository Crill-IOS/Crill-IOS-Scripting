import 'common'
import 'configure_mode'

// ---- ACL Mode Entry (Standard Numbered 0-99) ----
Acl_standard_cmd:
    value=INT CR lines+=Acl_standard_cmds+
    ;

// ---- ACL Mode Entry (Extended Named) ----
Acl_extended_cmd:
    'extended' name=ACL_NAME CR lines+=Acl_extended_cmds+
    ;

// ---- Exit zurück in Configure Mode ----
Exit_acl:
    command='exit' CR continuation+=Configure_cmds
    ;

// ---- Standard ACL Subcommands ----
Acl_standard_cmds:
    lines+=(
        COMMON
      | Acl_standard_permit_cmd
      | Acl_standard_deny_cmd
    )* Exit_acl
    ;

Acl_standard_permit_cmd:
    'permit' option=Acl_standard_match CR
    ;

Acl_standard_deny_cmd:
    'deny' option=Acl_standard_match CR
    ;

Acl_standard_match:
      Acl_any_match
    | Acl_host_match
    | Acl_network_match
    ;

Acl_any_match:
    option='any'
    ;

Acl_host_match:
    'host' ip=IP
    ;

Acl_network_match:
    ip=IP mask=WILDCARDMASK
    ;

// ---- Extended ACL Subcommands ----
Acl_extended_cmds:
    (
        COMMON
      | Acl_extended_permit_cmd
      | Acl_extended_deny_cmd
      | Exit_acl
    )
    ;

Acl_extended_permit_cmd:
    (sequence=INT)? 'permit' protocol=Acl_protocol source=Acl_extended_match destination=Acl_extended_match_dest CR
    ;

Acl_extended_deny_cmd:
    (sequence=INT)? 'deny' protocol=Acl_protocol source=Acl_extended_match destination=Acl_extended_match_dest CR
    ;

// ---- Protocols ----
Acl_protocol:
      Acl_protocol_ip
    | Acl_protocol_icmp
    | Acl_protocol_tcp
    | Acl_protocol_udp
    | Acl_protocol_gre
    ;

Acl_protocol_ip:
    protocol='ip'
    ;

Acl_protocol_icmp:
    protocol='icmp'
    ;

Acl_protocol_tcp:
    protocol='tcp'
    ;

Acl_protocol_udp:
    protocol='udp'
    ;

Acl_protocol_gre:
    protocol='gre'
    ;

// ---- Extended Match (Source) ----
Acl_extended_match:
      Acl_any_match
    | Acl_host_match
    | Acl_network_match
    ;

// ---- Extended Match Destination (with optional port) ----
Acl_extended_match_dest:
      Acl_dest_any_match
    | Acl_dest_host_match
    | Acl_dest_network_match
    ;

Acl_dest_any_match:
    option='any' port=Acl_port_match?
    ;

Acl_dest_host_match:
    'host' ip=IP port=Acl_port_match?
    ;

Acl_dest_network_match:
    ip=IP mask=WILDCARDMASK port=Acl_port_match?
    ;

// ---- Port Matching ----
Acl_port_match:
    'eq' port=Acl_port_value
    ;

Acl_port_value:
      Acl_port_number
    | Acl_port_name
    ;

Acl_port_number:
    value=INT
    ;

Acl_port_name:
      Acl_port_isakmp
    | Acl_port_https
    | Acl_port_http
    | Acl_port_ftp
    | Acl_port_ssh
    | Acl_port_telnet
    | Acl_port_domain
    | Acl_port_tftp
    | Acl_port_snmp
    | Acl_port_ntp
    | Acl_port_bgp
    ;

Acl_port_isakmp:
    value='isakmp'
    ;

Acl_port_https:
    value='https'
    ;

Acl_port_http:
    value='http'
    ;

Acl_port_ftp:
    value='ftp'
    ;

Acl_port_ssh:
    value='ssh'
    ;

Acl_port_telnet:
    value='telnet'
    ;

Acl_port_domain:
    value='domain'
    ;

Acl_port_tftp:
    value='tftp'
    ;

Acl_port_snmp:
    value='snmp'
    ;

Acl_port_ntp:
    value='ntp'
    ;

Acl_port_bgp:
    value='bgp'
    ;

// ---- ACL Name Terminal ----
ACL_NAME: value=(INPUT_lexer | KEYWORDS);