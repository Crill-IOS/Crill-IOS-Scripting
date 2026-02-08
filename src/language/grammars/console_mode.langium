import 'common'
import 'configure_mode'
import 'line_mode'

//Exit zurück in den Configure terminal Mode
Exit_line_console:
    command='exit' CR continuation+=Configure_cmds
    ;

// ---- Console-Subcommand-Aggregation ----
Line_console_cmds:
  lines+=(
    COMMON
    | Login_cmd
    | Logging_cmd
    | ExecTimeout_cmd
  )* Exit_line_console
  ;