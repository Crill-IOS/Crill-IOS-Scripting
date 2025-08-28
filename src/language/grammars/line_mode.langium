import 'common'
import 'configure_mode'

// Exit zurück in den Configure-Mode
Exit_line infers Exit:
    Exit lines+=Configure_cmds+
    ;

// ===== Console-Subcommands =====
Line_console_cmds:
      NL
    | Login_cmd
    | Logging_cmd
    | ExecTimeout_cmd
    | Exit_line
    ;

// login local
Login_cmd:
    'login' Line_LoginOption
    ;

Line_LoginOption:
    option='local' NL
    ;


// logging synchronous
Logging_cmd:
    command='logging' option=LoggingOption
    ;

LoggingOption:
    option=SynchronousKeyword NL
    ;

SynchronousKeyword:
    keyword='synchronous'
    ;

// exec-timeout <MIN> <SEC>
ExecTimeout_cmd:
    command='exec-timeout' option=ExecTimeoutValue
    ;

ExecTimeoutValue:
    minutes=INT seconds=INT NL
    ;

// ===== VTY-Subcommands =====
Line_vty_cmds:
      NL
    | Login_cmd
    | Logging_cmd
    | ExecTimeout_cmd
    | Transport_cmd
    | Exit_line
    ;


Transport_cmd:
    'transport' option=Transport_cmd_option NL
    ;

Transport_cmd_option:
    TransportInput_cmd
    ;

TransportInput_cmd:
    'input' option=TransportInputList
    ;

TransportInputList:
    TransportProto
    ;

TransportProto:
    options+=(
      SshKeyword
    | TelnetKeyword)
    ;

SshKeyword returns string:
    'ssh'
    ;

TelnetKeyword returns string:
    'telnet'
    ;

