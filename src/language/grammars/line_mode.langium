import 'common'
import 'configure_mode'

// Exit zurück in Configure-Mode
Exit_line infers Exit:
    Exit lines+=Configure_cmds+
    ;

// ---- Gemeinsame Subcommands (Console & VTY) ----

// login
Login_cmd:
    'login' Line_LoginOption
    ;

Line_LoginOption:
    option='local' cr=CR
    ;

// logging
Logging_cmd:
    'logging' Line_LoggingOption
    ;

Line_LoggingOption:
    option='synchronous' cr=CR
    ;

// exec-timeout
ExecTimeout_cmd:
    'exec-timeout' Line_ExecTimeoutValue
    ;

Line_ExecTimeoutValue:
    minutes=INT seconds=INT cr=CR
    ;
