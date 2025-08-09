grammar CiscoIOS

//child Modes
import './enable_mode'

entry Script:
    script=Stat
    ;

Stat:
   lines+=(
    Enable_cmds
    | Comment
    | NL)+ 
   ;

Comment: 
    text=COMMENT NL;


