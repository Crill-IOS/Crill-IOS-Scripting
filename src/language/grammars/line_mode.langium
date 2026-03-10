import 'common'
import 'configure_mode'

// ---- Gemeinsame Subcommands (Console & VTY) ----

Exit_interface_line:
    command='exit' CR continuation+=Configure_cmds
    ;

// login
Login_cmd:
    'login' Line_LoginOption
    ;

Line_LoginOption:
    option='local' CR
    ;

// logging
Logging_cmd:
    'logging' Line_LoggingOption
    ;

Line_LoggingOption:
    option='synchronous' CR
    ;

// exec-timeout
ExecTimeout_cmd:
    'exec-timeout' exectimeoutvalue=Line_ExecTimeoutValue
    ;

Line_ExecTimeoutValue:
    minutes=INT seconds=INT CR
    ;