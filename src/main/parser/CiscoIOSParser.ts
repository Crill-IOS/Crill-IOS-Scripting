
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { CiscoIOSListener } from "./CiscoIOSListener.js";
import { CiscoIOSVisitor } from "./CiscoIOSVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class CiscoIOSParser extends antlr.Parser {
    public static readonly ENABLE = 1;
    public static readonly MEMORY = 2;
    public static readonly CONFIGURE = 3;
    public static readonly HOSTNAME = 4;
    public static readonly TERMINAL = 5;
    public static readonly EXIT = 6;
    public static readonly WORD = 7;
    public static readonly NL = 8;
    public static readonly WS = 9;
    public static readonly RULE_stat = 0;
    public static readonly RULE_enable_cmds = 1;
    public static readonly RULE_enable_cmd = 2;
    public static readonly RULE_configure_cmd = 3;
    public static readonly RULE_configure_cmd_options = 4;
    public static readonly RULE_configure_terminal_cmds = 5;
    public static readonly RULE_hostname_cmd = 6;
    public static readonly RULE_hostname_cmd_options = 7;

    public static readonly literalNames = [
        null, "'enable'", "'memory'", "'configure'", "'hostname'", "'terminal'", 
        "'exit'"
    ];

    public static readonly symbolicNames = [
        null, "ENABLE", "MEMORY", "CONFIGURE", "HOSTNAME", "TERMINAL", "EXIT", 
        "WORD", "NL", "WS"
    ];
    public static readonly ruleNames = [
        "stat", "enable_cmds", "enable_cmd", "configure_cmd", "configure_cmd_options", 
        "configure_terminal_cmds", "hostname_cmd", "hostname_cmd_options",
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
            this.state = 21;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 16;
                    this.enable_cmds();
                    this.state = 17;
                    this.match(CiscoIOSParser.NL);
                    }
                    }
                }
                this.state = 23;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            }
            this.state = 27;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || _la === 3) {
                {
                this.state = 24;
                this.enable_cmds();
                this.state = 25;
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
            this.state = 31;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CiscoIOSParser.ENABLE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 29;
                this.enable_cmd();
                }
                break;
            case CiscoIOSParser.CONFIGURE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 30;
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
    public enable_cmd(): Enable_cmdContext {
        let localContext = new Enable_cmdContext(this.context, this.state);
        this.enterRule(localContext, 4, CiscoIOSParser.RULE_enable_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 33;
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
    public configure_cmd(): Configure_cmdContext {
        let localContext = new Configure_cmdContext(this.context, this.state);
        this.enterRule(localContext, 6, CiscoIOSParser.RULE_configure_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 35;
            this.match(CiscoIOSParser.CONFIGURE);
            this.state = 36;
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
        let _la: number;
        try {
            this.state = 50;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CiscoIOSParser.TERMINAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 38;
                this.match(CiscoIOSParser.TERMINAL);
                this.state = 39;
                this.match(CiscoIOSParser.NL);
                this.state = 41;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 40;
                    this.configure_terminal_cmds();
                    }
                    }
                    this.state = 43;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 4);
                this.state = 45;
                this.match(CiscoIOSParser.NL);
                this.state = 47;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6) {
                    {
                    this.state = 46;
                    this.match(CiscoIOSParser.EXIT);
                    }
                }

                }
                break;
            case CiscoIOSParser.MEMORY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 49;
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
        this.enterRule(localContext, 10, CiscoIOSParser.RULE_configure_terminal_cmds);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 52;
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
        this.enterRule(localContext, 12, CiscoIOSParser.RULE_hostname_cmd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 54;
            this.match(CiscoIOSParser.HOSTNAME);
            this.state = 55;
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
        this.enterRule(localContext, 14, CiscoIOSParser.RULE_hostname_cmd_options);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 57;
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
        4,1,9,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,
        2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,1,0,3,0,
        28,8,0,1,1,1,1,3,1,32,8,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,4,4,42,
        8,4,11,4,12,4,43,1,4,1,4,3,4,48,8,4,1,4,3,4,51,8,4,1,5,1,5,1,6,1,
        6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,57,0,21,1,0,0,0,2,
        31,1,0,0,0,4,33,1,0,0,0,6,35,1,0,0,0,8,50,1,0,0,0,10,52,1,0,0,0,
        12,54,1,0,0,0,14,57,1,0,0,0,16,17,3,2,1,0,17,18,5,8,0,0,18,20,1,
        0,0,0,19,16,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,
        27,1,0,0,0,23,21,1,0,0,0,24,25,3,2,1,0,25,26,5,0,0,1,26,28,1,0,0,
        0,27,24,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,29,32,3,4,2,0,30,32,3,
        6,3,0,31,29,1,0,0,0,31,30,1,0,0,0,32,3,1,0,0,0,33,34,5,1,0,0,34,
        5,1,0,0,0,35,36,5,3,0,0,36,37,3,8,4,0,37,7,1,0,0,0,38,39,5,5,0,0,
        39,41,5,8,0,0,40,42,3,10,5,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,
        0,0,0,43,44,1,0,0,0,44,45,1,0,0,0,45,47,5,8,0,0,46,48,5,6,0,0,47,
        46,1,0,0,0,47,48,1,0,0,0,48,51,1,0,0,0,49,51,5,2,0,0,50,38,1,0,0,
        0,50,49,1,0,0,0,51,9,1,0,0,0,52,53,3,12,6,0,53,11,1,0,0,0,54,55,
        5,4,0,0,55,56,3,14,7,0,56,13,1,0,0,0,57,58,5,7,0,0,58,15,1,0,0,0,
        6,21,27,31,43,47,50
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
