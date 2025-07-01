// Generated from ./src/antlr/CiscoIOS.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CiscoIOSListener from "./CiscoIOSListener.js";
import CiscoIOSVisitor from "./CiscoIOSVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CiscoIOSParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly ID = 10;
	public static readonly IPADDR = 11;
	public static readonly INT = 12;
	public static readonly WS = 13;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_config = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_interface_stmt = 2;
	public static readonly RULE_ip_stmt = 3;
	public static readonly RULE_no_stmt = 4;
	public static readonly RULE_router_stmt = 5;
	public static readonly RULE_network_stmt = 6;
	public static readonly literalNames: (string | null)[] = [ null, "'interface'", 
                                                            "'ip'", "'address'", 
                                                            "'no'", "'shutdown'", 
                                                            "'router'", 
                                                            "'ospf'", "'network'", 
                                                            "'area'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "IPADDR", 
                                                             "INT", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"config", "statement", "interface_stmt", "ip_stmt", "no_stmt", "router_stmt", 
		"network_stmt",
	];
	public get grammarFileName(): string { return "CiscoIOS.g4"; }
	public get literalNames(): (string | null)[] { return CiscoIOSParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CiscoIOSParser.symbolicNames; }
	public get ruleNames(): string[] { return CiscoIOSParser.ruleNames; }
	public get serializedATN(): number[] { return CiscoIOSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CiscoIOSParser._ATN, CiscoIOSParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public config(): ConfigContext {
		let localctx: ConfigContext = new ConfigContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CiscoIOSParser.RULE_config);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 14;
				this.statement();
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 342) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CiscoIOSParser.RULE_statement);
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 19;
				this.interface_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 20;
				this.ip_stmt();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 21;
				this.no_stmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 22;
				this.router_stmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 23;
				this.network_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interface_stmt(): Interface_stmtContext {
		let localctx: Interface_stmtContext = new Interface_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CiscoIOSParser.RULE_interface_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this.match(CiscoIOSParser.T__0);
			this.state = 27;
			this.match(CiscoIOSParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ip_stmt(): Ip_stmtContext {
		let localctx: Ip_stmtContext = new Ip_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CiscoIOSParser.RULE_ip_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			this.match(CiscoIOSParser.T__1);
			this.state = 30;
			this.match(CiscoIOSParser.T__2);
			this.state = 31;
			this.match(CiscoIOSParser.IPADDR);
			this.state = 32;
			this.match(CiscoIOSParser.IPADDR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public no_stmt(): No_stmtContext {
		let localctx: No_stmtContext = new No_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CiscoIOSParser.RULE_no_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 34;
			this.match(CiscoIOSParser.T__3);
			this.state = 35;
			this.match(CiscoIOSParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public router_stmt(): Router_stmtContext {
		let localctx: Router_stmtContext = new Router_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CiscoIOSParser.RULE_router_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this.match(CiscoIOSParser.T__5);
			this.state = 38;
			this.match(CiscoIOSParser.T__6);
			this.state = 39;
			this.match(CiscoIOSParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public network_stmt(): Network_stmtContext {
		let localctx: Network_stmtContext = new Network_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, CiscoIOSParser.RULE_network_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 41;
			this.match(CiscoIOSParser.T__7);
			this.state = 42;
			this.match(CiscoIOSParser.IPADDR);
			this.state = 43;
			this.match(CiscoIOSParser.IPADDR);
			this.state = 44;
			this.match(CiscoIOSParser.T__8);
			this.state = 45;
			this.match(CiscoIOSParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,13,48,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,
	17,1,1,1,1,1,1,1,1,1,1,3,1,25,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,
	4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,
	0,0,45,0,15,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,29,1,0,0,0,8,34,1,0,0,0,
	10,37,1,0,0,0,12,41,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,
	15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,25,3,4,2,0,20,25,3,6,3,0,21,25,
	3,8,4,0,22,25,3,10,5,0,23,25,3,12,6,0,24,19,1,0,0,0,24,20,1,0,0,0,24,21,
	1,0,0,0,24,22,1,0,0,0,24,23,1,0,0,0,25,3,1,0,0,0,26,27,5,1,0,0,27,28,5,
	10,0,0,28,5,1,0,0,0,29,30,5,2,0,0,30,31,5,3,0,0,31,32,5,11,0,0,32,33,5,
	11,0,0,33,7,1,0,0,0,34,35,5,4,0,0,35,36,5,5,0,0,36,9,1,0,0,0,37,38,5,6,
	0,0,38,39,5,7,0,0,39,40,5,12,0,0,40,11,1,0,0,0,41,42,5,8,0,0,42,43,5,11,
	0,0,43,44,5,11,0,0,44,45,5,9,0,0,45,46,5,12,0,0,46,13,1,0,0,0,2,17,24];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CiscoIOSParser.__ATN) {
			CiscoIOSParser.__ATN = new ATNDeserializer().deserialize(CiscoIOSParser._serializedATN);
		}

		return CiscoIOSParser.__ATN;
	}


	static DecisionsToDFA = CiscoIOSParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ConfigContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_config;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterConfig) {
	 		listener.enterConfig(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitConfig) {
	 		listener.exitConfig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitConfig) {
			return visitor.visitConfig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interface_stmt(): Interface_stmtContext {
		return this.getTypedRuleContext(Interface_stmtContext, 0) as Interface_stmtContext;
	}
	public ip_stmt(): Ip_stmtContext {
		return this.getTypedRuleContext(Ip_stmtContext, 0) as Ip_stmtContext;
	}
	public no_stmt(): No_stmtContext {
		return this.getTypedRuleContext(No_stmtContext, 0) as No_stmtContext;
	}
	public router_stmt(): Router_stmtContext {
		return this.getTypedRuleContext(Router_stmtContext, 0) as Router_stmtContext;
	}
	public network_stmt(): Network_stmtContext {
		return this.getTypedRuleContext(Network_stmtContext, 0) as Network_stmtContext;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_statement;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(CiscoIOSParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_interface_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterInterface_stmt) {
	 		listener.enterInterface_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitInterface_stmt) {
	 		listener.exitInterface_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitInterface_stmt) {
			return visitor.visitInterface_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ip_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IPADDR_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.IPADDR);
	}
	public IPADDR(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.IPADDR, i);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_ip_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterIp_stmt) {
	 		listener.enterIp_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitIp_stmt) {
	 		listener.exitIp_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitIp_stmt) {
			return visitor.visitIp_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class No_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_no_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterNo_stmt) {
	 		listener.enterNo_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitNo_stmt) {
	 		listener.exitNo_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitNo_stmt) {
			return visitor.visitNo_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Router_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_router_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterRouter_stmt) {
	 		listener.enterRouter_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitRouter_stmt) {
	 		listener.exitRouter_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitRouter_stmt) {
			return visitor.visitRouter_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Network_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IPADDR_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.IPADDR);
	}
	public IPADDR(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.IPADDR, i);
	}
	public INT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_network_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterNetwork_stmt) {
	 		listener.enterNetwork_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitNetwork_stmt) {
	 		listener.exitNetwork_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitNetwork_stmt) {
			return visitor.visitNetwork_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
