
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { CiscoIOSListener } from "./CiscoIOSListener.js";
import { CiscoIOSVisitor } from "./CiscoIOSVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class CiscoIOSParser extends antlr.Parser {
    public static readonly ENABLE = 1;
    public static readonly SHOW = 2;
    public static readonly RUN = 3;
    public static readonly SHOW_IP_INT_BRIEF_TEST = 4;
    public static readonly MEMORY = 5;
    public static readonly CONFIGURE = 6;
    public static readonly HOSTNAME = 7;
    public static readonly TERMINAL = 8;
    public static readonly EXIT = 9;
    public static readonly WORD = 10;
    public static readonly NL = 11;
    public static readonly WS = 12;
    public static readonly RULE_stat = 0;
    public static readonly RULE_enable_cmds = 1;
    public static readonly RULE_enable_cmd = 2;
    public static readonly RULE_show_cmd = 3;
    public static readonly RULE_show_cmd_options = 4;
    public static readonly RULE_configure_cmd = 5;
    public static readonly RULE_configure_cmd_options = 6;
    public static readonly RULE_configure_terminal_cmds = 7;
    public static readonly RULE_hostname_cmd = 8;
    public static readonly RULE_hostname_cmd_options = 9;

    public static readonly literalNames = [
        null, "'enable'", "'show'", "'run'", "'show ip int brief'", "'memory'", 
        "'configure'", "'hostname'", "'terminal'", "'exit'"
    ];

    public static readonly symbolicNames = [
        null, "ENABLE", "SHOW", "RUN", "SHOW_IP_INT_BRIEF_TEST", "MEMORY", 
        "CONFIGURE", "HOSTNAME", "TERMINAL", "EXIT", "WORD", "NL", "WS"
    ];
    public static readonly ruleNames = [
        "stat", "enable_cmds", "enable_cmd", "show_cmd", "show_cmd_options", 
        "configure_cmd", "configure_cmd_options", "configure_terminal_cmds", 
        "hostname_cmd", "hostname_cmd_options",
    ];

    public get grammarFileName(): string { return "CiscoIOS.g4"; }
    public get literalNames(): (string | null)[] { return CiscoIOSParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return CiscoIOSParser.symbolicNames; }
    public get ruleNames(): string[] { return CiscoIOSParser.ruleNames; }
    public get serializedATN(): number[] { return CiscoIOSParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, CiscoIOSParser._ATN, CiscoIOSParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public stat(): StatContext {
        let localContext = new StatContext(this.context, this.state);
        this.enterRule(localContext, 0, CiscoIOSParser.RULE_stat);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 25;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 20;
                    this.enable_cmds();
                    this.state = 21;
                    this.match(CiscoIOSParser.NL);
                    }
                    }
                }
                this.state = 27;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            }
            this.state = 31;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 70) !== 0)) {
                {
                this.state = 28;
                this.enable_cmds();
                this.state = 29;
                this.match(CiscoIOSParser.EOF);
                }
            }

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
        this.enterRule(localContext, 2, CiscoIOSParser.RULE_enable_cmds);
        try {
            this.state = 36;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CiscoIOSParser.ENABLE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 33;
                this.enable_cmd();
                }
                break;
            case CiscoIOSParser.CONFIGURE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 34;
                this.configure_cmd();
                }
                break;
            case CiscoIOSParser.SHOW:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 35;
                this.show_cmd();
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
    public enable_cmd(): Enable_cmdContext {
        let localContext = new Enable_cmdContext(this.context, this.state);
        this.enterRule(localContext, 4, CiscoIOSParser.RULE_enable_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 38;
            this.match(CiscoIOSParser.ENABLE);
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
    public show_cmd(): Show_cmdContext {
        let localContext = new Show_cmdContext(this.context, this.state);
        this.enterRule(localContext, 6, CiscoIOSParser.RULE_show_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 40;
            this.match(CiscoIOSParser.SHOW);
            this.state = 41;
            this.show_cmd_options();
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
    public show_cmd_options(): Show_cmd_optionsContext {
        let localContext = new Show_cmd_optionsContext(this.context, this.state);
        this.enterRule(localContext, 8, CiscoIOSParser.RULE_show_cmd_options);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 43;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 4)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
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
        this.enterRule(localContext, 10, CiscoIOSParser.RULE_configure_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 45;
            this.match(CiscoIOSParser.CONFIGURE);
            this.state = 46;
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
        this.enterRule(localContext, 12, CiscoIOSParser.RULE_configure_cmd_options);
        let _la: number;
        try {
            this.state = 60;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CiscoIOSParser.TERMINAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 48;
                this.match(CiscoIOSParser.TERMINAL);
                this.state = 49;
                this.match(CiscoIOSParser.NL);
                this.state = 51;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 50;
                    this.configure_terminal_cmds();
                    }
                    }
                    this.state = 53;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 7);
                this.state = 55;
                this.match(CiscoIOSParser.NL);
                this.state = 57;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 56;
                    this.match(CiscoIOSParser.EXIT);
                    }
                }

                }
                break;
            case CiscoIOSParser.MEMORY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 59;
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
    public configure_terminal_cmds(): Configure_terminal_cmdsContext {
        let localContext = new Configure_terminal_cmdsContext(this.context, this.state);
        this.enterRule(localContext, 14, CiscoIOSParser.RULE_configure_terminal_cmds);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 62;
            this.hostname_cmd();
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
        this.enterRule(localContext, 16, CiscoIOSParser.RULE_hostname_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 64;
            this.match(CiscoIOSParser.HOSTNAME);
            this.state = 65;
            this.hostname_cmd_options();
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
    public hostname_cmd_options(): Hostname_cmd_optionsContext {
        let localContext = new Hostname_cmd_optionsContext(this.context, this.state);
        this.enterRule(localContext, 18, CiscoIOSParser.RULE_hostname_cmd_options);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 67;
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

    public static readonly _serializedATN: number[] = [
        4,1,12,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,5,0,24,8,0,10,0,12,0,27,9,
        0,1,0,1,0,1,0,3,0,32,8,0,1,1,1,1,1,1,3,1,37,8,1,1,2,1,2,1,3,1,3,
        1,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,4,6,52,8,6,11,6,12,6,53,1,6,
        1,6,3,6,58,8,6,1,6,3,6,61,8,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,0,
        0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,3,4,66,0,25,1,0,0,0,2,36,1,
        0,0,0,4,38,1,0,0,0,6,40,1,0,0,0,8,43,1,0,0,0,10,45,1,0,0,0,12,60,
        1,0,0,0,14,62,1,0,0,0,16,64,1,0,0,0,18,67,1,0,0,0,20,21,3,2,1,0,
        21,22,5,11,0,0,22,24,1,0,0,0,23,20,1,0,0,0,24,27,1,0,0,0,25,23,1,
        0,0,0,25,26,1,0,0,0,26,31,1,0,0,0,27,25,1,0,0,0,28,29,3,2,1,0,29,
        30,5,0,0,1,30,32,1,0,0,0,31,28,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,
        0,33,37,3,4,2,0,34,37,3,10,5,0,35,37,3,6,3,0,36,33,1,0,0,0,36,34,
        1,0,0,0,36,35,1,0,0,0,37,3,1,0,0,0,38,39,5,1,0,0,39,5,1,0,0,0,40,
        41,5,2,0,0,41,42,3,8,4,0,42,7,1,0,0,0,43,44,7,0,0,0,44,9,1,0,0,0,
        45,46,5,6,0,0,46,47,3,12,6,0,47,11,1,0,0,0,48,49,5,8,0,0,49,51,5,
        11,0,0,50,52,3,14,7,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,
        53,54,1,0,0,0,54,55,1,0,0,0,55,57,5,11,0,0,56,58,5,9,0,0,57,56,1,
        0,0,0,57,58,1,0,0,0,58,61,1,0,0,0,59,61,5,5,0,0,60,48,1,0,0,0,60,
        59,1,0,0,0,61,13,1,0,0,0,62,63,3,16,8,0,63,15,1,0,0,0,64,65,5,7,
        0,0,65,66,3,18,9,0,66,17,1,0,0,0,67,68,5,10,0,0,68,19,1,0,0,0,6,
        25,31,36,53,57,60
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
    public enable_cmds(): Enable_cmdsContext[];
    public enable_cmds(i: number): Enable_cmdsContext | null;
    public enable_cmds(i?: number): Enable_cmdsContext[] | Enable_cmdsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Enable_cmdsContext);
        }

        return this.getRuleContext(i, Enable_cmdsContext);
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
    public EOF(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.EOF, 0);
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


export class Enable_cmdsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enable_cmd(): Enable_cmdContext | null {
        return this.getRuleContext(0, Enable_cmdContext);
    }
    public configure_cmd(): Configure_cmdContext | null {
        return this.getRuleContext(0, Configure_cmdContext);
    }
    public show_cmd(): Show_cmdContext | null {
        return this.getRuleContext(0, Show_cmdContext);
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


export class Enable_cmdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENABLE(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.ENABLE, 0)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_enable_cmd;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterEnable_cmd) {
             listener.enterEnable_cmd(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitEnable_cmd) {
             listener.exitEnable_cmd(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitEnable_cmd) {
            return visitor.visitEnable_cmd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Show_cmdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.SHOW, 0)!;
    }
    public show_cmd_options(): Show_cmd_optionsContext {
        return this.getRuleContext(0, Show_cmd_optionsContext)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_show_cmd;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterShow_cmd) {
             listener.enterShow_cmd(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitShow_cmd) {
             listener.exitShow_cmd(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitShow_cmd) {
            return visitor.visitShow_cmd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Show_cmd_optionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RUN(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.RUN, 0);
    }
    public SHOW_IP_INT_BRIEF_TEST(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.SHOW_IP_INT_BRIEF_TEST, 0);
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_show_cmd_options;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterShow_cmd_options) {
             listener.enterShow_cmd_options(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitShow_cmd_options) {
             listener.exitShow_cmd_options(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitShow_cmd_options) {
            return visitor.visitShow_cmd_options(this);
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
    public NL(): antlr.TerminalNode[];
    public NL(i: number): antlr.TerminalNode | null;
    public NL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CiscoIOSParser.NL);
    	} else {
    		return this.getToken(CiscoIOSParser.NL, i);
    	}
    }
    public configure_terminal_cmds(): Configure_terminal_cmdsContext[];
    public configure_terminal_cmds(i: number): Configure_terminal_cmdsContext | null;
    public configure_terminal_cmds(i?: number): Configure_terminal_cmdsContext[] | Configure_terminal_cmdsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Configure_terminal_cmdsContext);
        }

        return this.getRuleContext(i, Configure_terminal_cmdsContext);
    }
    public EXIT(): antlr.TerminalNode | null {
        return this.getToken(CiscoIOSParser.EXIT, 0);
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


export class Configure_terminal_cmdsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public hostname_cmd(): Hostname_cmdContext {
        return this.getRuleContext(0, Hostname_cmdContext)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_configure_terminal_cmds;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterConfigure_terminal_cmds) {
             listener.enterConfigure_terminal_cmds(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitConfigure_terminal_cmds) {
             listener.exitConfigure_terminal_cmds(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitConfigure_terminal_cmds) {
            return visitor.visitConfigure_terminal_cmds(this);
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
    public hostname_cmd_options(): Hostname_cmd_optionsContext {
        return this.getRuleContext(0, Hostname_cmd_optionsContext)!;
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


export class Hostname_cmd_optionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WORD(): antlr.TerminalNode {
        return this.getToken(CiscoIOSParser.WORD, 0)!;
    }
    public override get ruleIndex(): number {
        return CiscoIOSParser.RULE_hostname_cmd_options;
    }
    public override enterRule(listener: CiscoIOSListener): void {
        if(listener.enterHostname_cmd_options) {
             listener.enterHostname_cmd_options(this);
        }
    }
    public override exitRule(listener: CiscoIOSListener): void {
        if(listener.exitHostname_cmd_options) {
             listener.exitHostname_cmd_options(this);
        }
    }
    public override accept<Result>(visitor: CiscoIOSVisitor<Result>): Result | null {
        if (visitor.visitHostname_cmd_options) {
            return visitor.visitHostname_cmd_options(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
