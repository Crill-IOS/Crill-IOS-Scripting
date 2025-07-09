
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class CiscoIOSLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly ENABLE = 2;
    public static readonly SHOW = 3;
    public static readonly RUN = 4;
    public static readonly SHOW_IP_INT_BRIEF_TEST = 5;
    public static readonly MEMORY = 6;
    public static readonly CONFIGURE = 7;
    public static readonly HOSTNAME = 8;
    public static readonly TERMINAL = 9;
    public static readonly INTERFACE = 10;
    public static readonly GIGABITETHERNET = 11;
    public static readonly VLAN = 12;
    public static readonly EXIT = 13;
    public static readonly IP_ADDRESS_TEST = 14;
    public static readonly WORD = 15;
    public static readonly NUMBER = 16;
    public static readonly NL = 17;
    public static readonly WS = 18;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'/'", "'enable'", "'show'", "'run'", "'show ip int brief'", 
        "'memory'", "'configure'", "'hostname'", "'terminal'", "'interface'", 
        "'gigabitethernet'", "'vlan'", "'exit'", "'ip address'"
    ];

    public static readonly symbolicNames = [
        null, null, "ENABLE", "SHOW", "RUN", "SHOW_IP_INT_BRIEF_TEST", "MEMORY", 
        "CONFIGURE", "HOSTNAME", "TERMINAL", "INTERFACE", "GIGABITETHERNET", 
        "VLAN", "EXIT", "IP_ADDRESS_TEST", "WORD", "NUMBER", "NL", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "ENABLE", "SHOW", "RUN", "SHOW_IP_INT_BRIEF_TEST", "MEMORY", 
        "CONFIGURE", "HOSTNAME", "TERMINAL", "INTERFACE", "GIGABITETHERNET", 
        "VLAN", "EXIT", "IP_ADDRESS_TEST", "WORD", "NUMBER", "NL", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, CiscoIOSLexer._ATN, CiscoIOSLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "CiscoIOS.g4"; }

    public get literalNames(): (string | null)[] { return CiscoIOSLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return CiscoIOSLexer.symbolicNames; }
    public get ruleNames(): string[] { return CiscoIOSLexer.ruleNames; }

    public get serializedATN(): number[] { return CiscoIOSLexer._serializedATN; }

    public get channelNames(): string[] { return CiscoIOSLexer.channelNames; }

    public get modeNames(): string[] { return CiscoIOSLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,18,176,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,
        1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
        1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
        1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
        10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,
        13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,5,14,158,8,
        14,10,14,12,14,161,9,14,1,15,1,15,1,16,4,16,166,8,16,11,16,12,16,
        167,1,17,4,17,171,8,17,11,17,12,17,172,1,17,1,17,0,0,18,1,1,3,2,
        5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
        15,31,16,33,17,35,18,1,0,5,3,0,65,90,95,95,97,122,5,0,45,45,48,57,
        65,90,95,95,97,122,1,0,48,57,2,0,10,10,13,13,2,0,9,9,32,32,178,0,
        1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
        0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,
        0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,
        0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,1,37,1,0,0,0,3,39,1,0,0,0,5,46,1,
        0,0,0,7,51,1,0,0,0,9,55,1,0,0,0,11,73,1,0,0,0,13,80,1,0,0,0,15,90,
        1,0,0,0,17,99,1,0,0,0,19,108,1,0,0,0,21,118,1,0,0,0,23,134,1,0,0,
        0,25,139,1,0,0,0,27,144,1,0,0,0,29,155,1,0,0,0,31,162,1,0,0,0,33,
        165,1,0,0,0,35,170,1,0,0,0,37,38,5,47,0,0,38,2,1,0,0,0,39,40,5,101,
        0,0,40,41,5,110,0,0,41,42,5,97,0,0,42,43,5,98,0,0,43,44,5,108,0,
        0,44,45,5,101,0,0,45,4,1,0,0,0,46,47,5,115,0,0,47,48,5,104,0,0,48,
        49,5,111,0,0,49,50,5,119,0,0,50,6,1,0,0,0,51,52,5,114,0,0,52,53,
        5,117,0,0,53,54,5,110,0,0,54,8,1,0,0,0,55,56,5,115,0,0,56,57,5,104,
        0,0,57,58,5,111,0,0,58,59,5,119,0,0,59,60,5,32,0,0,60,61,5,105,0,
        0,61,62,5,112,0,0,62,63,5,32,0,0,63,64,5,105,0,0,64,65,5,110,0,0,
        65,66,5,116,0,0,66,67,5,32,0,0,67,68,5,98,0,0,68,69,5,114,0,0,69,
        70,5,105,0,0,70,71,5,101,0,0,71,72,5,102,0,0,72,10,1,0,0,0,73,74,
        5,109,0,0,74,75,5,101,0,0,75,76,5,109,0,0,76,77,5,111,0,0,77,78,
        5,114,0,0,78,79,5,121,0,0,79,12,1,0,0,0,80,81,5,99,0,0,81,82,5,111,
        0,0,82,83,5,110,0,0,83,84,5,102,0,0,84,85,5,105,0,0,85,86,5,103,
        0,0,86,87,5,117,0,0,87,88,5,114,0,0,88,89,5,101,0,0,89,14,1,0,0,
        0,90,91,5,104,0,0,91,92,5,111,0,0,92,93,5,115,0,0,93,94,5,116,0,
        0,94,95,5,110,0,0,95,96,5,97,0,0,96,97,5,109,0,0,97,98,5,101,0,0,
        98,16,1,0,0,0,99,100,5,116,0,0,100,101,5,101,0,0,101,102,5,114,0,
        0,102,103,5,109,0,0,103,104,5,105,0,0,104,105,5,110,0,0,105,106,
        5,97,0,0,106,107,5,108,0,0,107,18,1,0,0,0,108,109,5,105,0,0,109,
        110,5,110,0,0,110,111,5,116,0,0,111,112,5,101,0,0,112,113,5,114,
        0,0,113,114,5,102,0,0,114,115,5,97,0,0,115,116,5,99,0,0,116,117,
        5,101,0,0,117,20,1,0,0,0,118,119,5,103,0,0,119,120,5,105,0,0,120,
        121,5,103,0,0,121,122,5,97,0,0,122,123,5,98,0,0,123,124,5,105,0,
        0,124,125,5,116,0,0,125,126,5,101,0,0,126,127,5,116,0,0,127,128,
        5,104,0,0,128,129,5,101,0,0,129,130,5,114,0,0,130,131,5,110,0,0,
        131,132,5,101,0,0,132,133,5,116,0,0,133,22,1,0,0,0,134,135,5,118,
        0,0,135,136,5,108,0,0,136,137,5,97,0,0,137,138,5,110,0,0,138,24,
        1,0,0,0,139,140,5,101,0,0,140,141,5,120,0,0,141,142,5,105,0,0,142,
        143,5,116,0,0,143,26,1,0,0,0,144,145,5,105,0,0,145,146,5,112,0,0,
        146,147,5,32,0,0,147,148,5,97,0,0,148,149,5,100,0,0,149,150,5,100,
        0,0,150,151,5,114,0,0,151,152,5,101,0,0,152,153,5,115,0,0,153,154,
        5,115,0,0,154,28,1,0,0,0,155,159,7,0,0,0,156,158,7,1,0,0,157,156,
        1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,30,1,
        0,0,0,161,159,1,0,0,0,162,163,7,2,0,0,163,32,1,0,0,0,164,166,7,3,
        0,0,165,164,1,0,0,0,166,167,1,0,0,0,167,165,1,0,0,0,167,168,1,0,
        0,0,168,34,1,0,0,0,169,171,7,4,0,0,170,169,1,0,0,0,171,172,1,0,0,
        0,172,170,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,6,17,0,
        0,175,36,1,0,0,0,4,0,159,167,172,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CiscoIOSLexer.__ATN) {
            CiscoIOSLexer.__ATN = new antlr.ATNDeserializer().deserialize(CiscoIOSLexer._serializedATN);
        }

        return CiscoIOSLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CiscoIOSLexer.literalNames, CiscoIOSLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return CiscoIOSLexer.vocabulary;
    }

    private static readonly decisionsToDFA = CiscoIOSLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}