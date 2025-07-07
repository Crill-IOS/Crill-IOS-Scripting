
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class CiscoIOSLexer extends antlr.Lexer {
    public static readonly ENABLE = 1;
    public static readonly MEMORY = 2;
    public static readonly CONFIGURE = 3;
    public static readonly HOSTNAME = 4;
    public static readonly TERMINAL = 5;
    public static readonly EXIT = 6;
    public static readonly WORD = 7;
    public static readonly NL = 8;
    public static readonly WS = 9;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'enable'", "'memory'", "'configure'", "'hostname'", "'terminal'", 
        "'exit'"
    ];

    public static readonly symbolicNames = [
        null, "ENABLE", "MEMORY", "CONFIGURE", "HOSTNAME", "TERMINAL", "EXIT", 
        "WORD", "NL", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "ENABLE", "MEMORY", "CONFIGURE", "HOSTNAME", "TERMINAL", "EXIT", 
        "WORD", "NL", "WS",
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
        4,0,9,85,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        5,1,5,1,5,1,5,1,5,1,6,1,6,5,6,69,8,6,10,6,12,6,72,9,6,1,7,4,7,75,
        8,7,11,7,12,7,76,1,8,4,8,80,8,8,11,8,12,8,81,1,8,1,8,0,0,9,1,1,3,
        2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,4,3,0,65,90,95,95,97,122,5,
        0,45,45,48,57,65,90,95,95,97,122,2,0,10,10,13,13,2,0,9,9,32,32,87,
        0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
        1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,26,
        1,0,0,0,5,33,1,0,0,0,7,43,1,0,0,0,9,52,1,0,0,0,11,61,1,0,0,0,13,
        66,1,0,0,0,15,74,1,0,0,0,17,79,1,0,0,0,19,20,5,101,0,0,20,21,5,110,
        0,0,21,22,5,97,0,0,22,23,5,98,0,0,23,24,5,108,0,0,24,25,5,101,0,
        0,25,2,1,0,0,0,26,27,5,109,0,0,27,28,5,101,0,0,28,29,5,109,0,0,29,
        30,5,111,0,0,30,31,5,114,0,0,31,32,5,121,0,0,32,4,1,0,0,0,33,34,
        5,99,0,0,34,35,5,111,0,0,35,36,5,110,0,0,36,37,5,102,0,0,37,38,5,
        105,0,0,38,39,5,103,0,0,39,40,5,117,0,0,40,41,5,114,0,0,41,42,5,
        101,0,0,42,6,1,0,0,0,43,44,5,104,0,0,44,45,5,111,0,0,45,46,5,115,
        0,0,46,47,5,116,0,0,47,48,5,110,0,0,48,49,5,97,0,0,49,50,5,109,0,
        0,50,51,5,101,0,0,51,8,1,0,0,0,52,53,5,116,0,0,53,54,5,101,0,0,54,
        55,5,114,0,0,55,56,5,109,0,0,56,57,5,105,0,0,57,58,5,110,0,0,58,
        59,5,97,0,0,59,60,5,108,0,0,60,10,1,0,0,0,61,62,5,101,0,0,62,63,
        5,120,0,0,63,64,5,105,0,0,64,65,5,116,0,0,65,12,1,0,0,0,66,70,7,
        0,0,0,67,69,7,1,0,0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,
        71,1,0,0,0,71,14,1,0,0,0,72,70,1,0,0,0,73,75,7,2,0,0,74,73,1,0,0,
        0,75,76,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,16,1,0,0,0,78,80,
        7,3,0,0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,
        82,83,1,0,0,0,83,84,6,8,0,0,84,18,1,0,0,0,4,0,70,76,81,1,6,0,0
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