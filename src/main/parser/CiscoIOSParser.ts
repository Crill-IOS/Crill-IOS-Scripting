
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { CiscoIOSListener } from "./CiscoIOSListener.js";
import { CiscoIOSVisitor } from "./CiscoIOSVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class CiscoIOSParser extends antlr.Parser {
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
    public static readonly RULE_stat = 0;
    public static readonly RULE_commands = 1;
    public static readonly RULE_enable_cmds = 2;
    public static readonly RULE_configure_cmd = 3;
    public static readonly RULE_configure_cmd_options = 4;
    public static readonly RULE_configure_cmds = 5;
    public static readonly RULE_hostname_cmd = 6;
    public static readonly RULE_interface_cmd = 7;
    public static readonly RULE_interface_cmd_options = 8;
    public static readonly RULE_interface_types = 9;
    public static readonly RULE_interface_id = 10;
    public static readonly RULE_interface_cmds = 11;

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
    public static readonly ruleNames = [
        "stat", "commands", "enable_cmds", "configure_cmd", "configure_cmd_options", 
        "configure_cmds", "hostname_cmd", "interface_cmd", "interface_cmd_options", 
        "interface_types", "interface_id", "interface_cmds",
    ];

    public get grammarFileName(): string { return "CiscoIOS.g4"; }
    public get literalNames(): (string | null)[] { return CiscoIOSParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return CiscoIOSParser.symbolicNames; }
    public get ruleNames(): string[] { return CiscoIOSParser.ruleNames; }
    public get serializedATN(): number[] { return CiscoIOSParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }


    	current_mode:string = "enable"

    	currentMode(mode:string): boolean {
    		return this.current_mode == mode
    	}



    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, CiscoIOSParser._ATN, CiscoIOSParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public stat(): StatContext {
        let localContext = new StatContext(this.context, this.state);
        this.enterRule(localContext, 0, CiscoIOSParser.RULE_stat);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 38;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 27;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
                    while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                        if (alternative === 1) {
                            {
                            {
                            this.state = 24;
                            this.match(CiscoIOSParser.NL);
                            }
                            }
                        }
                        this.state = 29;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
                    }
                    this.state = 30;
                    this.commands();
                    this.state = 32;
                    this.errorHandler.sync(this);
                    alternative = 1;
                    do {
                        switch (alternative) {
                        case 1:
                            {
                            {
                            this.state = 31;
                            this.match(CiscoIOSParser.NL);
                            }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 34;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 1, this.context);
                    } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                    }
                    }
                }
                this.state = 40;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            }
            this.state = 41;
            this.match(CiscoIOSParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commands(): CommandsContext {
        let localContext = new CommandsContext(this.context, this.state);
        this.enterRule(localContext, 2, CiscoIOSParser.RULE_commands);
        try {
            this.state = 49;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 43;
                if (!(this.currentMode("enable"))) {
                    throw this.createFailedPredicateException("this.currentMode(\"enable\")");
                }
                this.state = 44;
                this.enable_cmds();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 45;
                if (!(this.currentMode("configure"))) {
                    throw this.createFailedPredicateException("this.currentMode(\"configure\")");
                }
                this.state = 46;
                this.configure_cmds();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 47;
                if (!(this.currentMode("interface"))) {
                    throw this.createFailedPredicateException("this.currentMode(\"interface\")");
                }
                this.state = 48;
                this.interface_cmds();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enable_cmds(): Enable_cmdsContext {
        let localContext = new Enable_cmdsContext(this.context, this.state);
        this.enterRule(localContext, 4, CiscoIOSParser.RULE_enable_cmds);
        try {
            this.state = 53;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CiscoIOSParser.ENABLE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 51;
                this.match(CiscoIOSParser.ENABLE);
                }
                break;
            case CiscoIOSParser.CONFIGURE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 52;
                this.configure_cmd();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public configure_cmd(): Configure_cmdContext {
        let localContext = new Configure_cmdContext(this.context, this.state);
        this.enterRule(localContext, 6, CiscoIOSParser.RULE_configure_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 55;
            this.match(CiscoIOSParser.CONFIGURE);
            this.state = 56;
            this.configure_cmd_options();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public configure_cmd_options(): Configure_cmd_optionsContext {
        let localContext = new Configure_cmd_optionsContext(this.context, this.state);
        this.enterRule(localContext, 8, CiscoIOSParser.RULE_configure_cmd_options);
        try {
            this.state = 61;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CiscoIOSParser.TERMINAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 58;
                this.match(CiscoIOSParser.TERMINAL);
                this.current_mode = "configure"
                }
                break;
            case CiscoIOSParser.MEMORY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 60;
                this.match(CiscoIOSParser.MEMORY);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public configure_cmds(): Configure_cmdsContext {
        let localContext = new Configure_cmdsContext(this.context, this.state);
        this.enterRule(localContext, 10, CiscoIOSParser.RULE_configure_cmds);
        try {
            this.state = 67;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CiscoIOSParser.HOSTNAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 63;
                this.hostname_cmd();
                }
                break;
            case CiscoIOSParser.INTERFACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 64;
                this.interface_cmd();
                this.current_mode = "interface"
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hostname_cmd(): Hostname_cmdContext {
        let localContext = new Hostname_cmdContext(this.context, this.state);
        this.enterRule(localContext, 12, CiscoIOSParser.RULE_hostname_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.match(CiscoIOSParser.HOSTNAME);
            this.state = 70;
            this.match(CiscoIOSParser.WORD);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interface_cmd(): Interface_cmdContext {
        let localContext = new Interface_cmdContext(this.context, this.state);
        this.enterRule(localContext, 14, CiscoIOSParser.RULE_interface_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
            this.match(CiscoIOSParser.INTERFACE);
            this.state = 73;
            this.interface_cmd_options();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interface_cmd_options(): Interface_cmd_optionsContext {
        let localContext = new Interface_cmd_optionsContext(this.context, this.state);
        this.enterRule(localContext, 16, CiscoIOSParser.RULE_interface_cmd_options);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 75;
            this.interface_types();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interface_types(): Interface_typesContext {
        let localContext = new Interface_typesContext(this.context, this.state);
        this.enterRule(localContext, 18, CiscoIOSParser.RULE_interface_types);
        try {
            this.state = 81;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CiscoIOSParser.GIGABITETHERNET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 77;
                this.match(CiscoIOSParser.GIGABITETHERNET);
                this.state = 78;
                this.interface_id();
                }
                break;
            case CiscoIOSParser.VLAN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 79;
                this.match(CiscoIOSParser.VLAN);
                this.state = 80;
                this.match(CiscoIOSParser.NUMBER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interface_id(): Interface_idContext {
        let localContext = new Interface_idContext(this.context, this.state);
        this.enterRule(localContext, 20, CiscoIOSParser.RULE_interface_id);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
            this.match(CiscoIOSParser.NUMBER);
            this.state = 84;
            this.match(CiscoIOSParser.T__0);
            this.state = 85;
            this.match(CiscoIOSParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interface_cmds(): Interface_cmdsContext {
        let localContext = new Interface_cmdsContext(this.context, this.state);
        this.enterRule(localContext, 22, CiscoIOSParser.RULE_interface_cmds);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 87;
            this.match(CiscoIOSParser.IP_ADDRESS_TEST);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 1:
            return this.commands_sempred(localContext as CommandsContext, predIndex);
        }
        return true;
    }
    private commands_sempred(localContext: CommandsContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.currentMode("enable");
        case 1:
            return this.currentMode("configure");
        case 2:
            return this.currentMode("interface");
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,18,90,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,0,10,
        0,12,0,29,9,0,1,0,1,0,4,0,33,8,0,11,0,12,0,34,5,0,37,8,0,10,0,12,
        0,40,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,50,8,1,1,2,1,2,3,2,
        54,8,2,1,3,1,3,1,3,1,4,1,4,1,4,3,4,62,8,4,1,5,1,5,1,5,1,5,3,5,68,
        8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,82,8,9,1,
        10,1,10,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,
        20,22,0,0,86,0,38,1,0,0,0,2,49,1,0,0,0,4,53,1,0,0,0,6,55,1,0,0,0,
        8,61,1,0,0,0,10,67,1,0,0,0,12,69,1,0,0,0,14,72,1,0,0,0,16,75,1,0,
        0,0,18,81,1,0,0,0,20,83,1,0,0,0,22,87,1,0,0,0,24,26,5,17,0,0,25,
        24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,
        0,29,27,1,0,0,0,30,32,3,2,1,0,31,33,5,17,0,0,32,31,1,0,0,0,33,34,
        1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,27,1,0,0,0,
        37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,
        0,0,0,41,42,5,0,0,1,42,1,1,0,0,0,43,44,4,1,0,0,44,50,3,4,2,0,45,
        46,4,1,1,0,46,50,3,10,5,0,47,48,4,1,2,0,48,50,3,22,11,0,49,43,1,
        0,0,0,49,45,1,0,0,0,49,47,1,0,0,0,50,3,1,0,0,0,51,54,5,2,0,0,52,
        54,3,6,3,0,53,51,1,0,0,0,53,52,1,0,0,0,54,5,1,0,0,0,55,56,5,7,0,
        0,56,57,3,8,4,0,57,7,1,0,0,0,58,59,5,9,0,0,59,62,6,4,-1,0,60,62,
        5,6,0,0,61,58,1,0,0,0,61,60,1,0,0,0,62,9,1,0,0,0,63,68,3,12,6,0,
        64,65,3,14,7,0,65,66,6,5,-1,0,66,68,1,0,0,0,67,63,1,0,0,0,67,64,
        1,0,0,0,68,11,1,0,0,0,69,70,5,8,0,0,70,71,5,15,0,0,71,13,1,0,0,0,
        72,73,5,10,0,0,73,74,3,16,8,0,74,15,1,0,0,0,75,76,3,18,9,0,76,17,
        1,0,0,0,77,78,5,11,0,0,78,82,3,20,10,0,79,80,5,12,0,0,80,82,5,16,
        0,0,81,77,1,0,0,0,81,79,1,0,0,0,82,19,1,0,0,0,83,84,5,16,0,0,84,
        85,5,1,0,0,85,86,5,16,0,0,86,21,1,0,0,0,87,88,5,14,0,0,88,23,1,0,
        0,0,8,27,34,38,49,53,61,67,81
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CiscoIOSParser.__ATN) {
            CiscoIOSParser.__ATN = new antlr.ATNDeserializer().deserialize(CiscoIOSParser._serializedATN);
        }

        return CiscoIOSParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CiscoIOSParser.literalNames, CiscoIOSParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return CiscoIOSParser.vocabulary;
    }

    private static readonly decisionsToDFA = CiscoIOSParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class StatContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.EOF, 0)!;
    }
    public commands(): CommandsContext[];
    public commands(i: number): CommandsContext | null;
    public commands(i?: number): CommandsContext[] | CommandsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandsContext);
        }

        return this.getRuleContext(i, CommandsContext);
    }
    public NL(): antlr.TerminalNode[];
    public NL(i: number): antlr.TerminalNode | null;
    public NL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CiscoIOSParser.NL);
    	} else {
    		return this.getToken(CiscoIOSParser.NL, i);
    	}
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_stat;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterStat) {
             listener.enterStat(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitStat) {
             listener.exitStat(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitStat) {
            return visitor.visitStat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enable_cmds(): Enable_cmdsContext | null {
        return this.getRuleContext(0, Enable_cmdsContext);
    }
    public configure_cmds(): Configure_cmdsContext | null {
        return this.getRuleContext(0, Configure_cmdsContext);
    }
    public interface_cmds(): Interface_cmdsContext | null {
        return this.getRuleContext(0, Interface_cmdsContext);
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_commands;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterCommands) {
             listener.enterCommands(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitCommands) {
             listener.exitCommands(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitCommands) {
            return visitor.visitCommands(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Enable_cmdsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENABLE(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.ENABLE, 0);
    }
    public configure_cmd(): Configure_cmdContext | null {
        return this.getRuleContext(0, Configure_cmdContext);
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_enable_cmds;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterEnable_cmds) {
             listener.enterEnable_cmds(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitEnable_cmds) {
             listener.exitEnable_cmds(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitEnable_cmds) {
            return visitor.visitEnable_cmds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Configure_cmdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONFIGURE(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.CONFIGURE, 0)!;
    }
    public configure_cmd_options(): Configure_cmd_optionsContext {
        return this.getRuleContext(0, Configure_cmd_optionsContext)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_configure_cmd;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterConfigure_cmd) {
             listener.enterConfigure_cmd(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitConfigure_cmd) {
             listener.exitConfigure_cmd(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitConfigure_cmd) {
            return visitor.visitConfigure_cmd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Configure_cmd_optionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TERMINAL(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.TERMINAL, 0);
    }
    public MEMORY(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.MEMORY, 0);
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_configure_cmd_options;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterConfigure_cmd_options) {
             listener.enterConfigure_cmd_options(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitConfigure_cmd_options) {
             listener.exitConfigure_cmd_options(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitConfigure_cmd_options) {
            return visitor.visitConfigure_cmd_options(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Configure_cmdsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public hostname_cmd(): Hostname_cmdContext | null {
        return this.getRuleContext(0, Hostname_cmdContext);
    }
    public interface_cmd(): Interface_cmdContext | null {
        return this.getRuleContext(0, Interface_cmdContext);
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_configure_cmds;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterConfigure_cmds) {
             listener.enterConfigure_cmds(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitConfigure_cmds) {
             listener.exitConfigure_cmds(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitConfigure_cmds) {
            return visitor.visitConfigure_cmds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Hostname_cmdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HOSTNAME(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.HOSTNAME, 0)!;
    }
    public WORD(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.WORD, 0)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_hostname_cmd;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterHostname_cmd) {
             listener.enterHostname_cmd(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitHostname_cmd) {
             listener.exitHostname_cmd(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitHostname_cmd) {
            return visitor.visitHostname_cmd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Interface_cmdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERFACE(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.INTERFACE, 0)!;
    }
    public interface_cmd_options(): Interface_cmd_optionsContext {
        return this.getRuleContext(0, Interface_cmd_optionsContext)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_interface_cmd;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterInterface_cmd) {
             listener.enterInterface_cmd(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitInterface_cmd) {
             listener.exitInterface_cmd(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitInterface_cmd) {
            return visitor.visitInterface_cmd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Interface_cmd_optionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public interface_types(): Interface_typesContext {
        return this.getRuleContext(0, Interface_typesContext)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_interface_cmd_options;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterInterface_cmd_options) {
             listener.enterInterface_cmd_options(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitInterface_cmd_options) {
             listener.exitInterface_cmd_options(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitInterface_cmd_options) {
            return visitor.visitInterface_cmd_options(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Interface_typesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GIGABITETHERNET(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.GIGABITETHERNET, 0);
    }
    public interface_id(): Interface_idContext | null {
        return this.getRuleContext(0, Interface_idContext);
    }
    public VLAN(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.VLAN, 0);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.NUMBER, 0);
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_interface_types;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterInterface_types) {
             listener.enterInterface_types(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitInterface_types) {
             listener.exitInterface_types(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitInterface_types) {
            return visitor.visitInterface_types(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Interface_idContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode[];
    public NUMBER(i: number): antlr.TerminalNode | null;
    public NUMBER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CiscoIOSParser.NUMBER);
    	} else {
    		return this.getToken(CiscoIOSParser.NUMBER, i);
    	}
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_interface_id;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterInterface_id) {
             listener.enterInterface_id(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitInterface_id) {
             listener.exitInterface_id(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitInterface_id) {
            return visitor.visitInterface_id(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Interface_cmdsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IP_ADDRESS_TEST(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.IP_ADDRESS_TEST, 0)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_interface_cmds;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterInterface_cmds) {
             listener.enterInterface_cmds(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitInterface_cmds) {
             listener.exitInterface_cmds(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitInterface_cmds) {
            return visitor.visitInterface_cmds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
