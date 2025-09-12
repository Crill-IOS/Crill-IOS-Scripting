import 'common'

//parent Mode
import 'interface_mode'

//Exit Command
Exit_Test infers Exit:
    Exit lines+=Interface_cmd+
    ;

Test_commands:
    commands += (
        'test123'
        |'Morgen'
    )
    ;
