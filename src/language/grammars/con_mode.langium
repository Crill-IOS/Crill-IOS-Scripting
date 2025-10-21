import 'common'
import 'configure_mode'
import 'line_mode'

// ---- Console-Subcommand-Aggregation ----
Line_console_cmds:
      COMMON
    | Login_cmd
    | Logging_cmd
    | ExecTimeout_cmd
    | Exit_line
    ;
