import 'common'
import 'configure_mode'
import 'line_mode'

// ---- VTY-Subcommand-Aggregation ----
Line_vty_cmds:
      cr=CR
    | Login_cmd
    | Logging_cmd
    | ExecTimeout_cmd
    | Transport_cmd
    | Exit_line
    ;

// transport input ssh|telnet(+)
Transport_cmd:
    'transport' Transport_cmd_option
    ;

Transport_cmd_option:
    option=TransportInput_cmd
    ;

TransportInput_cmd:
    'input' TransportInputList
    ;

TransportInputList:
    options+=TransportProto+ cr=CR
    ;

// ohne "item=", pro Regel max. ein Literal
TransportProto:
      option=SshKeyword
    | option=TelnetKeyword
    ;

SshKeyword returns string:
    'ssh'
    ;

TelnetKeyword returns string:
    'telnet'
    ;
