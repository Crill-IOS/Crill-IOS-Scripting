// Generated from ./src/antlr/CiscoIOS.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CiscoIOSListener } from "./CiscoIOSListener";

export class CiscoIOSParser extends Parser {
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
	public static readonly RULE_config = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_interface_stmt = 2;
	public static readonly RULE_ip_stmt = 3;
	public static readonly RULE_no_stmt = 4;
	public static readonly RULE_router_stmt = 5;
	public static readonly RULE_network_stmt = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"config", "statement", "interface_stmt", "ip_stmt", "no_stmt", "router_stmt", 
		"network_stmt",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'interface'", "'ip'", "'address'", "'no'", "'shutdown'", "'router'", 
		"'ospf'", "'network'", "'area'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ID", "IPADDR", "INT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CiscoIOSParser._LITERAL_NAMES, CiscoIOSParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CiscoIOSParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CiscoIOS.g4"; }

	// @Override
	public get ruleNames(): string[] { return CiscoIOSParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CiscoIOSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CiscoIOSParser._ATN, this);
	}
	// @RuleVersion(0)
	public config(): ConfigContext {
		let _localctx: ConfigContext = new ConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CiscoIOSParser.RULE_config);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
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
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CiscoIOSParser.T__0) | (1 << CiscoIOSParser.T__1) | (1 << CiscoIOSParser.T__3) | (1 << CiscoIOSParser.T__5) | (1 << CiscoIOSParser.T__7))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CiscoIOSParser.RULE_statement);
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CiscoIOSParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 19;
				this.interface_stmt();
				}
				break;
			case CiscoIOSParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 20;
				this.ip_stmt();
				}
				break;
			case CiscoIOSParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 21;
				this.no_stmt();
				}
				break;
			case CiscoIOSParser.T__5:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 22;
				this.router_stmt();
				}
				break;
			case CiscoIOSParser.T__7:
				this.enterOuterAlt(_localctx, 5);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interface_stmt(): Interface_stmtContext {
		let _localctx: Interface_stmtContext = new Interface_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CiscoIOSParser.RULE_interface_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(CiscoIOSParser.T__0);
			this.state = 27;
			this.match(CiscoIOSParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ip_stmt(): Ip_stmtContext {
		let _localctx: Ip_stmtContext = new Ip_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CiscoIOSParser.RULE_ip_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public no_stmt(): No_stmtContext {
		let _localctx: No_stmtContext = new No_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CiscoIOSParser.RULE_no_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(CiscoIOSParser.T__3);
			this.state = 35;
			this.match(CiscoIOSParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public router_stmt(): Router_stmtContext {
		let _localctx: Router_stmtContext = new Router_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CiscoIOSParser.RULE_router_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public network_stmt(): Network_stmtContext {
		let _localctx: Network_stmtContext = new Network_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CiscoIOSParser.RULE_network_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0F2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x06\x02\x12\n\x02\r\x02\x0E\x02\x13\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x02" +
		"\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x02\x02" +
		"/\x02\x11\x03\x02\x02\x02\x04\x1A\x03\x02\x02\x02\x06\x1C\x03\x02\x02" +
		"\x02\b\x1F\x03\x02\x02\x02\n$\x03\x02\x02\x02\f\'\x03\x02\x02\x02\x0E" +
		"+\x03\x02\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10\x03\x02\x02\x02\x12" +
		"\x13\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14" +
		"\x03\x03\x02\x02\x02\x15\x1B\x05\x06\x04\x02\x16\x1B\x05\b\x05\x02\x17" +
		"\x1B\x05\n\x06\x02\x18\x1B\x05\f\x07\x02\x19\x1B\x05\x0E\b\x02\x1A\x15" +
		"\x03\x02\x02\x02\x1A\x16\x03\x02\x02\x02\x1A\x17\x03\x02\x02\x02\x1A\x18" +
		"\x03\x02\x02\x02\x1A\x19\x03\x02\x02\x02\x1B\x05\x03\x02\x02\x02\x1C\x1D" +
		"\x07\x03\x02\x02\x1D\x1E\x07\f\x02\x02\x1E\x07\x03\x02\x02\x02\x1F \x07" +
		"\x04\x02\x02 !\x07\x05\x02\x02!\"\x07\r\x02\x02\"#\x07\r\x02\x02#\t\x03" +
		"\x02\x02\x02$%\x07\x06\x02\x02%&\x07\x07\x02\x02&\v\x03\x02\x02\x02\'" +
		"(\x07\b\x02\x02()\x07\t\x02\x02)*\x07\x0E\x02\x02*\r\x03\x02\x02\x02+" +
		",\x07\n\x02\x02,-\x07\r\x02\x02-.\x07\r\x02\x02./\x07\v\x02\x02/0\x07" +
		"\x0E\x02\x020\x0F\x03\x02\x02\x02\x04\x13\x1A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CiscoIOSParser.__ATN) {
			CiscoIOSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CiscoIOSParser._serializedATN));
		}

		return CiscoIOSParser.__ATN;
	}

}

export class ConfigContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CiscoIOSParser.RULE_config; }
	// @Override
	public enterRule(listener: CiscoIOSListener): void {
		if (listener.enterConfig) {
			listener.enterConfig(this);
		}
	}
	// @Override
	public exitRule(listener: CiscoIOSListener): void {
		if (listener.exitConfig) {
			listener.exitConfig(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public interface_stmt(): Interface_stmtContext | undefined {
		return this.tryGetRuleContext(0, Interface_stmtContext);
	}
	public ip_stmt(): Ip_stmtContext | undefined {
		return this.tryGetRuleContext(0, Ip_stmtContext);
	}
	public no_stmt(): No_stmtContext | undefined {
		return this.tryGetRuleContext(0, No_stmtContext);
	}
	public router_stmt(): Router_stmtContext | undefined {
		return this.tryGetRuleContext(0, Router_stmtContext);
	}
	public network_stmt(): Network_stmtContext | undefined {
		return this.tryGetRuleContext(0, Network_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CiscoIOSParser.RULE_statement; }
	// @Override
	public enterRule(listener: CiscoIOSListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CiscoIOSListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class Interface_stmtContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CiscoIOSParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CiscoIOSParser.RULE_interface_stmt; }
	// @Override
	public enterRule(listener: CiscoIOSListener): void {
		if (listener.enterInterface_stmt) {
			listener.enterInterface_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: CiscoIOSListener): void {
		if (listener.exitInterface_stmt) {
			listener.exitInterface_stmt(this);
		}
	}
}


export class Ip_stmtContext extends ParserRuleContext {
	public IPADDR(): TerminalNode[];
	public IPADDR(i: number): TerminalNode;
	public IPADDR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CiscoIOSParser.IPADDR);
		} else {
			return this.getToken(CiscoIOSParser.IPADDR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CiscoIOSParser.RULE_ip_stmt; }
	// @Override
	public enterRule(listener: CiscoIOSListener): void {
		if (listener.enterIp_stmt) {
			listener.enterIp_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: CiscoIOSListener): void {
		if (listener.exitIp_stmt) {
			listener.exitIp_stmt(this);
		}
	}
}


export class No_stmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CiscoIOSParser.RULE_no_stmt; }
	// @Override
	public enterRule(listener: CiscoIOSListener): void {
		if (listener.enterNo_stmt) {
			listener.enterNo_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: CiscoIOSListener): void {
		if (listener.exitNo_stmt) {
			listener.exitNo_stmt(this);
		}
	}
}


export class Router_stmtContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(CiscoIOSParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CiscoIOSParser.RULE_router_stmt; }
	// @Override
	public enterRule(listener: CiscoIOSListener): void {
		if (listener.enterRouter_stmt) {
			listener.enterRouter_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: CiscoIOSListener): void {
		if (listener.exitRouter_stmt) {
			listener.exitRouter_stmt(this);
		}
	}
}


export class Network_stmtContext extends ParserRuleContext {
	public IPADDR(): TerminalNode[];
	public IPADDR(i: number): TerminalNode;
	public IPADDR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CiscoIOSParser.IPADDR);
		} else {
			return this.getToken(CiscoIOSParser.IPADDR, i);
		}
	}
	public INT(): TerminalNode { return this.getToken(CiscoIOSParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CiscoIOSParser.RULE_network_stmt; }
	// @Override
	public enterRule(listener: CiscoIOSListener): void {
		if (listener.enterNetwork_stmt) {
			listener.enterNetwork_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: CiscoIOSListener): void {
		if (listener.exitNetwork_stmt) {
			listener.exitNetwork_stmt(this);
		}
	}
}


