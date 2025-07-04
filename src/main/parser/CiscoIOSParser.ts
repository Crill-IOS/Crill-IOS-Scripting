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
	public static readonly ENABLE = 1;
	public static readonly CONFT = 2;
	public static readonly ROUTER = 3;
	public static readonly OSPF = 4;
	public static readonly EXIT = 5;
	public static readonly NO = 6;
	public static readonly INTERFACE = 7;
	public static readonly INT_NAME = 8;
	public static readonly INT_NUM = 9;
	public static readonly HOSTNAME = 10;
	public static readonly BANNER = 11;
	public static readonly MOTD = 12;
	public static readonly DOMAIN = 13;
	public static readonly NAME = 14;
	public static readonly DOMAINNAME = 15;
	public static readonly SSH = 16;
	public static readonly USERNAME = 17;
	public static readonly LINE = 18;
	public static readonly VTY = 19;
	public static readonly CON = 20;
	public static readonly LOGIN = 21;
	public static readonly LOCAL = 22;
	public static readonly LOGGING = 23;
	public static readonly SYNCHRONUS = 24;
	public static readonly EXEC_TIMEOUT = 25;
	public static readonly TRANSPORT = 26;
	public static readonly INPUT = 27;
	public static readonly TELNET = 28;
	public static readonly PASSIVE_INTERFACE = 29;
	public static readonly ROUTER_ID = 30;
	public static readonly DESCRIPTION = 31;
	public static readonly SHUT = 32;
	public static readonly ADDR = 33;
	public static readonly RIP = 34;
	public static readonly VERSION = 35;
	public static readonly AUTO_SUMMARY = 36;
	public static readonly DHCP = 37;
	public static readonly POOL = 38;
	public static readonly EXCLUDED_ADDRESS = 39;
	public static readonly DEFAULT_ROUTER = 40;
	public static readonly DNS_SERVER = 41;
	public static readonly CLIENT_IDENTIFIER = 42;
	public static readonly HOST = 43;
	public static readonly CRYPTO = 44;
	public static readonly ISAKMP = 45;
	public static readonly IPSEC = 46;
	public static readonly TRANSFORM_SET = 47;
	public static readonly ESP_DES = 48;
	public static readonly ESP_SHA_HMAC = 49;
	public static readonly AUTHENTICATION = 50;
	public static readonly PRE_SHARE = 51;
	public static readonly ENCRYPTION = 52;
	public static readonly DES = 53;
	public static readonly HASH = 54;
	public static readonly MD5 = 55;
	public static readonly GROUP = 56;
	public static readonly LIFETIME = 57;
	public static readonly IDENTITY = 58;
	public static readonly MAP = 59;
	public static readonly MATCH = 60;
	public static readonly SET = 61;
	public static readonly PEER = 62;
	public static readonly POLICY = 63;
	public static readonly KEY = 64;
	public static readonly INT = 65;
	public static readonly IP_ADDR = 66;
	public static readonly SUB_ADDR = 67;
	public static readonly DOMAIN_NAME = 68;
	public static readonly NETWORK = 69;
	public static readonly IP = 70;
	public static readonly STR = 71;
	public static readonly BANNER_TEXT = 72;
	public static readonly NEWLINE = 73;
	public static readonly WS = 74;
	public static readonly ANY = 75;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_config = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_exec_stmt = 3;
	public static readonly RULE_enable_stmt = 4;
	public static readonly RULE_priv_stmt = 5;
	public static readonly RULE_conft_stmt = 6;
	public static readonly RULE_global_stmt = 7;
	public static readonly RULE_grundkonfig_stmt = 8;
	public static readonly RULE_linecon_stmt = 9;
	public static readonly RULE_linecon_body = 10;
	public static readonly RULE_linevty_stmt = 11;
	public static readonly RULE_linevty_body = 12;
	public static readonly RULE_ospf_stmt = 13;
	public static readonly RULE_ospf_body = 14;
	public static readonly RULE_int_stmt = 15;
	public static readonly RULE_int_body = 16;
	public static readonly RULE_rip_stmt = 17;
	public static readonly RULE_rip_body = 18;
	public static readonly RULE_dhcp_stmt = 19;
	public static readonly RULE_dhcp_body = 20;
	public static readonly RULE_vpn_stmt = 21;
	public static readonly RULE_vpn_isakmp_body = 22;
	public static readonly RULE_vpn_crypto_map_body = 23;
	public static readonly literalNames: (string | null)[] = [ null, "'enable'", 
                                                            "'configure terminal'", 
                                                            "'router'", 
                                                            "'ospf'", "'exit'", 
                                                            "'no'", "'interface'", 
                                                            null, null, 
                                                            "'hostname'", 
                                                            "'banner'", 
                                                            "'motd'", "'domain'", 
                                                            "'name'", "'domain-name'", 
                                                            "'ssh'", "'username'", 
                                                            "'line'", "'vty'", 
                                                            "'con'", "'login'", 
                                                            "'local'", "'logging'", 
                                                            "'synchronous'", 
                                                            "'exec-timeout'", 
                                                            "'transport'", 
                                                            "'input'", "'telnet'", 
                                                            "'passive-interface'", 
                                                            "'router-id'", 
                                                            "'description'", 
                                                            "'shutdown'", 
                                                            "'address'", 
                                                            "'rip'", "'version'", 
                                                            "'auto-summary'", 
                                                            "'dhcp'", "'pool'", 
                                                            "'excluded-address'", 
                                                            "'default-router'", 
                                                            "'dns-server'", 
                                                            "'client-identifier'", 
                                                            "'host'", "'crypto'", 
                                                            "'isakmp'", 
                                                            "'ipsec'", "'transform-set'", 
                                                            "'esp-des'", 
                                                            "'esp-sha-hmac'", 
                                                            "'authentication'", 
                                                            "'pre-share'", 
                                                            "'encryption'", 
                                                            "'des'", "'hash'", 
                                                            "'md5'", "'group'", 
                                                            "'lifetime'", 
                                                            "'identity'", 
                                                            "'map'", "'match'", 
                                                            "'set'", "'peer'", 
                                                            "'policy'", 
                                                            "'key'", null, 
                                                            null, null, 
                                                            null, "'network'", 
                                                            "'ip'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ENABLE", 
                                                             "CONFT", "ROUTER", 
                                                             "OSPF", "EXIT", 
                                                             "NO", "INTERFACE", 
                                                             "INT_NAME", 
                                                             "INT_NUM", 
                                                             "HOSTNAME", 
                                                             "BANNER", "MOTD", 
                                                             "DOMAIN", "NAME", 
                                                             "DOMAINNAME", 
                                                             "SSH", "USERNAME", 
                                                             "LINE", "VTY", 
                                                             "CON", "LOGIN", 
                                                             "LOCAL", "LOGGING", 
                                                             "SYNCHRONUS", 
                                                             "EXEC_TIMEOUT", 
                                                             "TRANSPORT", 
                                                             "INPUT", "TELNET", 
                                                             "PASSIVE_INTERFACE", 
                                                             "ROUTER_ID", 
                                                             "DESCRIPTION", 
                                                             "SHUT", "ADDR", 
                                                             "RIP", "VERSION", 
                                                             "AUTO_SUMMARY", 
                                                             "DHCP", "POOL", 
                                                             "EXCLUDED_ADDRESS", 
                                                             "DEFAULT_ROUTER", 
                                                             "DNS_SERVER", 
                                                             "CLIENT_IDENTIFIER", 
                                                             "HOST", "CRYPTO", 
                                                             "ISAKMP", "IPSEC", 
                                                             "TRANSFORM_SET", 
                                                             "ESP_DES", 
                                                             "ESP_SHA_HMAC", 
                                                             "AUTHENTICATION", 
                                                             "PRE_SHARE", 
                                                             "ENCRYPTION", 
                                                             "DES", "HASH", 
                                                             "MD5", "GROUP", 
                                                             "LIFETIME", 
                                                             "IDENTITY", 
                                                             "MAP", "MATCH", 
                                                             "SET", "PEER", 
                                                             "POLICY", "KEY", 
                                                             "INT", "IP_ADDR", 
                                                             "SUB_ADDR", 
                                                             "DOMAIN_NAME", 
                                                             "NETWORK", 
                                                             "IP", "STR", 
                                                             "BANNER_TEXT", 
                                                             "NEWLINE", 
                                                             "WS", "ANY" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"config", "line", "statement", "exec_stmt", "enable_stmt", "priv_stmt", 
		"conft_stmt", "global_stmt", "grundkonfig_stmt", "linecon_stmt", "linecon_body", 
		"linevty_stmt", "linevty_body", "ospf_stmt", "ospf_body", "int_stmt", 
		"int_body", "rip_stmt", "rip_body", "dhcp_stmt", "dhcp_body", "vpn_stmt", 
		"vpn_isakmp_body", "vpn_crypto_map_body",
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
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 48;
				this.line();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 396526) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 603979777) !== 0));
			this.state = 53;
			this.match(CiscoIOSParser.EOF);
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
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CiscoIOSParser.RULE_line);
		try {
			this.state = 57;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 55;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 10:
			case 11:
			case 17:
			case 18:
			case 44:
			case 70:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 56;
				this.statement();
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CiscoIOSParser.RULE_statement);
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 59;
				this.exec_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 60;
				this.priv_stmt();
				}
				break;
			case 3:
			case 6:
			case 7:
			case 10:
			case 11:
			case 17:
			case 18:
			case 44:
			case 70:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 61;
				this.global_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 62;
				this.match(CiscoIOSParser.EXIT);
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
	public exec_stmt(): Exec_stmtContext {
		let localctx: Exec_stmtContext = new Exec_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CiscoIOSParser.RULE_exec_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 65;
			this.enable_stmt();
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
	public enable_stmt(): Enable_stmtContext {
		let localctx: Enable_stmtContext = new Enable_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CiscoIOSParser.RULE_enable_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(CiscoIOSParser.ENABLE);
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
	public priv_stmt(): Priv_stmtContext {
		let localctx: Priv_stmtContext = new Priv_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CiscoIOSParser.RULE_priv_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.conft_stmt();
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
	public conft_stmt(): Conft_stmtContext {
		let localctx: Conft_stmtContext = new Conft_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, CiscoIOSParser.RULE_conft_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.match(CiscoIOSParser.CONFT);
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
	public global_stmt(): Global_stmtContext {
		let localctx: Global_stmtContext = new Global_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, CiscoIOSParser.RULE_global_stmt);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 73;
				this.ospf_stmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 74;
				this.int_stmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 75;
				this.rip_stmt();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 76;
				this.grundkonfig_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 77;
				this.linecon_stmt();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 78;
				this.linevty_stmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 79;
				this.dhcp_stmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 80;
				this.vpn_stmt();
				}
				break;
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
	public grundkonfig_stmt(): Grundkonfig_stmtContext {
		let localctx: Grundkonfig_stmtContext = new Grundkonfig_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, CiscoIOSParser.RULE_grundkonfig_stmt);
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 83;
				this.match(CiscoIOSParser.HOSTNAME);
				this.state = 84;
				this.match(CiscoIOSParser.STR);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 85;
				this.match(CiscoIOSParser.BANNER);
				this.state = 86;
				this.match(CiscoIOSParser.MOTD);
				this.state = 87;
				this.match(CiscoIOSParser.BANNER_TEXT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 88;
				this.match(CiscoIOSParser.USERNAME);
				this.state = 89;
				this.match(CiscoIOSParser.STR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 90;
				this.match(CiscoIOSParser.IP);
				this.state = 91;
				this.match(CiscoIOSParser.DOMAIN);
				this.state = 92;
				this.match(CiscoIOSParser.NAME);
				this.state = 93;
				this.match(CiscoIOSParser.DOMAIN_NAME);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 94;
				this.match(CiscoIOSParser.NO);
				this.state = 95;
				this.match(CiscoIOSParser.IP);
				this.state = 96;
				this.match(CiscoIOSParser.DOMAIN);
				this.state = 97;
				this.match(CiscoIOSParser.NAME);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 98;
				this.match(CiscoIOSParser.IP);
				this.state = 99;
				this.match(CiscoIOSParser.DOMAINNAME);
				this.state = 100;
				this.match(CiscoIOSParser.DOMAIN_NAME);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 101;
				this.match(CiscoIOSParser.NO);
				this.state = 102;
				this.match(CiscoIOSParser.IP);
				this.state = 103;
				this.match(CiscoIOSParser.DOMAINNAME);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 104;
				this.match(CiscoIOSParser.IP);
				this.state = 105;
				this.match(CiscoIOSParser.SSH);
				this.state = 106;
				this.match(CiscoIOSParser.VERSION);
				this.state = 107;
				this.match(CiscoIOSParser.INT);
				}
				break;
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
	public linecon_stmt(): Linecon_stmtContext {
		let localctx: Linecon_stmtContext = new Linecon_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, CiscoIOSParser.RULE_linecon_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this.match(CiscoIOSParser.LINE);
			this.state = 111;
			this.match(CiscoIOSParser.CON);
			this.state = 112;
			this.match(CiscoIOSParser.INT);
			this.state = 116;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 113;
					this.linecon_body();
					}
					}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 119;
				this.match(CiscoIOSParser.EXIT);
				}
				break;
			}
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
	public linecon_body(): Linecon_bodyContext {
		let localctx: Linecon_bodyContext = new Linecon_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, CiscoIOSParser.RULE_linecon_body);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 122;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 123;
				this.match(CiscoIOSParser.LOGIN);
				this.state = 124;
				this.match(CiscoIOSParser.LOCAL);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 125;
				this.match(CiscoIOSParser.LOGGING);
				this.state = 126;
				this.match(CiscoIOSParser.SYNCHRONUS);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 127;
				this.match(CiscoIOSParser.EXEC_TIMEOUT);
				this.state = 128;
				this.match(CiscoIOSParser.INT);
				this.state = 129;
				this.match(CiscoIOSParser.INT);
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
	public linevty_stmt(): Linevty_stmtContext {
		let localctx: Linevty_stmtContext = new Linevty_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, CiscoIOSParser.RULE_linevty_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this.match(CiscoIOSParser.LINE);
			this.state = 133;
			this.match(CiscoIOSParser.VTY);
			this.state = 134;
			this.match(CiscoIOSParser.INT);
			this.state = 135;
			this.match(CiscoIOSParser.INT);
			this.state = 139;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 136;
					this.linevty_body();
					}
					}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 142;
				this.match(CiscoIOSParser.EXIT);
				}
				break;
			}
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
	public linevty_body(): Linevty_bodyContext {
		let localctx: Linevty_bodyContext = new Linevty_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, CiscoIOSParser.RULE_linevty_body);
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 145;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 146;
				this.match(CiscoIOSParser.LOGIN);
				this.state = 147;
				this.match(CiscoIOSParser.LOCAL);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 148;
				this.match(CiscoIOSParser.LOGGING);
				this.state = 149;
				this.match(CiscoIOSParser.SYNCHRONUS);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 150;
				this.match(CiscoIOSParser.EXEC_TIMEOUT);
				this.state = 151;
				this.match(CiscoIOSParser.INT);
				this.state = 152;
				this.match(CiscoIOSParser.INT);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 153;
				this.match(CiscoIOSParser.TRANSPORT);
				this.state = 154;
				this.match(CiscoIOSParser.INPUT);
				this.state = 155;
				this.match(CiscoIOSParser.SSH);
				this.state = 156;
				this.match(CiscoIOSParser.TELNET);
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
	public ospf_stmt(): Ospf_stmtContext {
		let localctx: Ospf_stmtContext = new Ospf_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, CiscoIOSParser.RULE_ospf_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 159;
			this.match(CiscoIOSParser.ROUTER);
			this.state = 160;
			this.match(CiscoIOSParser.OSPF);
			this.state = 161;
			this.match(CiscoIOSParser.INT);
			this.state = 165;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 162;
					this.ospf_body();
					}
					}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 168;
				this.match(CiscoIOSParser.EXIT);
				}
				break;
			}
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
	public ospf_body(): Ospf_bodyContext {
		let localctx: Ospf_bodyContext = new Ospf_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, CiscoIOSParser.RULE_ospf_body);
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 171;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 172;
				this.match(CiscoIOSParser.NETWORK);
				this.state = 173;
				this.match(CiscoIOSParser.IP_ADDR);
				this.state = 174;
				this.match(CiscoIOSParser.IP_ADDR);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 175;
				this.match(CiscoIOSParser.PASSIVE_INTERFACE);
				this.state = 176;
				this.match(CiscoIOSParser.INT_NAME);
				this.state = 177;
				this.match(CiscoIOSParser.INT_NUM);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 178;
				this.match(CiscoIOSParser.ROUTER_ID);
				this.state = 179;
				this.match(CiscoIOSParser.IP_ADDR);
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
	public int_stmt(): Int_stmtContext {
		let localctx: Int_stmtContext = new Int_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, CiscoIOSParser.RULE_int_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.match(CiscoIOSParser.INTERFACE);
			this.state = 183;
			this.match(CiscoIOSParser.INT_NAME);
			this.state = 184;
			this.match(CiscoIOSParser.INT_NUM);
			this.state = 188;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 185;
					this.int_body();
					}
					}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 192;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 191;
				this.match(CiscoIOSParser.EXIT);
				}
				break;
			}
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
	public int_body(): Int_bodyContext {
		let localctx: Int_bodyContext = new Int_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, CiscoIOSParser.RULE_int_body);
		let _la: number;
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 194;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 195;
				this.match(CiscoIOSParser.NO);
				this.state = 196;
				this.match(CiscoIOSParser.SHUT);
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 197;
				this.match(CiscoIOSParser.SHUT);
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 198;
				this.match(CiscoIOSParser.IP);
				this.state = 199;
				this.match(CiscoIOSParser.ADDR);
				this.state = 200;
				this.match(CiscoIOSParser.IP_ADDR);
				this.state = 201;
				this.match(CiscoIOSParser.IP_ADDR);
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 202;
				this.match(CiscoIOSParser.DESCRIPTION);
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 203;
					this.match(CiscoIOSParser.STR);
					}
					}
					this.state = 206;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===71);
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 208;
				this.match(CiscoIOSParser.CRYPTO);
				this.state = 209;
				this.match(CiscoIOSParser.MAP);
				this.state = 210;
				this.match(CiscoIOSParser.STR);
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
	public rip_stmt(): Rip_stmtContext {
		let localctx: Rip_stmtContext = new Rip_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, CiscoIOSParser.RULE_rip_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 213;
			this.match(CiscoIOSParser.ROUTER);
			this.state = 214;
			this.match(CiscoIOSParser.RIP);
			this.state = 218;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 215;
					this.rip_body();
					}
					}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 221;
				this.match(CiscoIOSParser.EXIT);
				}
				break;
			}
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
	public rip_body(): Rip_bodyContext {
		let localctx: Rip_bodyContext = new Rip_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, CiscoIOSParser.RULE_rip_body);
		try {
			this.state = 233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 224;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 225;
				this.match(CiscoIOSParser.ROUTER);
				this.state = 226;
				this.match(CiscoIOSParser.RIP);
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 227;
				this.match(CiscoIOSParser.VERSION);
				this.state = 228;
				this.match(CiscoIOSParser.INT);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 229;
				this.match(CiscoIOSParser.NO);
				this.state = 230;
				this.match(CiscoIOSParser.AUTO_SUMMARY);
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 231;
				this.match(CiscoIOSParser.NETWORK);
				this.state = 232;
				this.match(CiscoIOSParser.IP_ADDR);
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
	public dhcp_stmt(): Dhcp_stmtContext {
		let localctx: Dhcp_stmtContext = new Dhcp_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, CiscoIOSParser.RULE_dhcp_stmt);
		let _la: number;
		try {
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 235;
				this.match(CiscoIOSParser.IP);
				this.state = 236;
				this.match(CiscoIOSParser.DHCP);
				this.state = 237;
				this.match(CiscoIOSParser.EXCLUDED_ADDRESS);
				this.state = 238;
				this.match(CiscoIOSParser.IP_ADDR);
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===66) {
					{
					this.state = 239;
					this.match(CiscoIOSParser.IP_ADDR);
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 242;
				this.match(CiscoIOSParser.IP);
				this.state = 243;
				this.match(CiscoIOSParser.DHCP);
				this.state = 244;
				this.match(CiscoIOSParser.POOL);
				this.state = 245;
				this.match(CiscoIOSParser.STR);
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & 503316481) !== 0) || _la===69 || _la===73) {
					{
					{
					this.state = 246;
					this.dhcp_body();
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 252;
				this.match(CiscoIOSParser.EXIT);
				}
				break;
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
	public dhcp_body(): Dhcp_bodyContext {
		let localctx: Dhcp_bodyContext = new Dhcp_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, CiscoIOSParser.RULE_dhcp_body);
		try {
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 255;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 256;
				this.match(CiscoIOSParser.NETWORK);
				this.state = 257;
				this.match(CiscoIOSParser.IP_ADDR);
				this.state = 258;
				this.match(CiscoIOSParser.IP_ADDR);
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 259;
				this.match(CiscoIOSParser.DEFAULT_ROUTER);
				this.state = 260;
				this.match(CiscoIOSParser.IP_ADDR);
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 261;
				this.match(CiscoIOSParser.DNS_SERVER);
				this.state = 262;
				this.match(CiscoIOSParser.IP_ADDR);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 263;
				this.match(CiscoIOSParser.DOMAINNAME);
				this.state = 264;
				this.match(CiscoIOSParser.DOMAIN_NAME);
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 265;
				this.match(CiscoIOSParser.HOST);
				this.state = 266;
				this.match(CiscoIOSParser.IP_ADDR);
				this.state = 267;
				this.match(CiscoIOSParser.IP_ADDR);
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 268;
				this.match(CiscoIOSParser.CLIENT_IDENTIFIER);
				this.state = 269;
				this.match(CiscoIOSParser.STR);
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
	public vpn_stmt(): Vpn_stmtContext {
		let localctx: Vpn_stmtContext = new Vpn_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, CiscoIOSParser.RULE_vpn_stmt);
		let _la: number;
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 272;
				this.match(CiscoIOSParser.CRYPTO);
				this.state = 273;
				this.match(CiscoIOSParser.ISAKMP);
				this.state = 274;
				this.match(CiscoIOSParser.ENABLE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 275;
				this.match(CiscoIOSParser.CRYPTO);
				this.state = 276;
				this.match(CiscoIOSParser.ISAKMP);
				this.state = 277;
				this.match(CiscoIOSParser.POLICY);
				this.state = 278;
				this.match(CiscoIOSParser.INT);
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 8388821) !== 0)) {
					{
					{
					this.state = 279;
					this.vpn_isakmp_body();
					}
					}
					this.state = 284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 285;
				this.match(CiscoIOSParser.EXIT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 286;
				this.match(CiscoIOSParser.CRYPTO);
				this.state = 287;
				this.match(CiscoIOSParser.ISAKMP);
				this.state = 288;
				this.match(CiscoIOSParser.KEY);
				this.state = 289;
				this.match(CiscoIOSParser.STR);
				this.state = 290;
				this.match(CiscoIOSParser.ADDR);
				this.state = 291;
				this.match(CiscoIOSParser.IP_ADDR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 292;
				this.match(CiscoIOSParser.CRYPTO);
				this.state = 293;
				this.match(CiscoIOSParser.ISAKMP);
				this.state = 294;
				this.match(CiscoIOSParser.IDENTITY);
				this.state = 295;
				this.match(CiscoIOSParser.ADDR);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 296;
				this.match(CiscoIOSParser.CRYPTO);
				this.state = 297;
				this.match(CiscoIOSParser.IPSEC);
				this.state = 298;
				this.match(CiscoIOSParser.TRANSFORM_SET);
				this.state = 299;
				this.match(CiscoIOSParser.STR);
				this.state = 300;
				this.match(CiscoIOSParser.ESP_DES);
				this.state = 301;
				this.match(CiscoIOSParser.ESP_SHA_HMAC);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 302;
				this.match(CiscoIOSParser.CRYPTO);
				this.state = 303;
				this.match(CiscoIOSParser.MAP);
				this.state = 304;
				this.match(CiscoIOSParser.STR);
				this.state = 305;
				this.match(CiscoIOSParser.INT);
				this.state = 306;
				this.match(CiscoIOSParser.IPSEC);
				this.state = 307;
				this.match(CiscoIOSParser.ISAKMP);
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 8195) !== 0)) {
					{
					{
					this.state = 308;
					this.vpn_crypto_map_body();
					}
					}
					this.state = 313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 314;
				this.match(CiscoIOSParser.EXIT);
				}
				break;
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
	public vpn_isakmp_body(): Vpn_isakmp_bodyContext {
		let localctx: Vpn_isakmp_bodyContext = new Vpn_isakmp_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, CiscoIOSParser.RULE_vpn_isakmp_body);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 317;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 318;
				this.match(CiscoIOSParser.AUTHENTICATION);
				this.state = 319;
				this.match(CiscoIOSParser.PRE_SHARE);
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 320;
				this.match(CiscoIOSParser.ENCRYPTION);
				this.state = 321;
				this.match(CiscoIOSParser.DES);
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 322;
				this.match(CiscoIOSParser.HASH);
				this.state = 323;
				this.match(CiscoIOSParser.MD5);
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 324;
				this.match(CiscoIOSParser.GROUP);
				this.state = 325;
				this.match(CiscoIOSParser.INT);
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 326;
				this.match(CiscoIOSParser.LIFETIME);
				this.state = 327;
				this.match(CiscoIOSParser.INT);
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
	public vpn_crypto_map_body(): Vpn_crypto_map_bodyContext {
		let localctx: Vpn_crypto_map_bodyContext = new Vpn_crypto_map_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, CiscoIOSParser.RULE_vpn_crypto_map_body);
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 330;
				this.match(CiscoIOSParser.NEWLINE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 331;
				this.match(CiscoIOSParser.MATCH);
				this.state = 332;
				this.match(CiscoIOSParser.ADDR);
				this.state = 333;
				this.match(CiscoIOSParser.STR);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 334;
				this.match(CiscoIOSParser.SET);
				this.state = 335;
				this.match(CiscoIOSParser.TRANSFORM_SET);
				this.state = 336;
				this.match(CiscoIOSParser.STR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 337;
				this.match(CiscoIOSParser.SET);
				this.state = 338;
				this.match(CiscoIOSParser.PEER);
				this.state = 339;
				this.match(CiscoIOSParser.IP_ADDR);
				}
				break;
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

	public static readonly _serializedATN: number[] = [4,1,75,343,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,
	0,50,8,0,11,0,12,0,51,1,0,1,0,1,1,1,1,3,1,58,8,1,1,2,1,2,1,2,1,2,3,2,64,
	8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,
	82,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,109,8,8,1,9,1,9,1,9,1,9,5,9,115,
	8,9,10,9,12,9,118,9,9,1,9,3,9,121,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,3,10,131,8,10,1,11,1,11,1,11,1,11,1,11,5,11,138,8,11,10,11,12,11,141,
	9,11,1,11,3,11,144,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
	12,1,12,1,12,3,12,158,8,12,1,13,1,13,1,13,1,13,5,13,164,8,13,10,13,12,13,
	167,9,13,1,13,3,13,170,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
	3,14,181,8,14,1,15,1,15,1,15,1,15,5,15,187,8,15,10,15,12,15,190,9,15,1,
	15,3,15,193,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,4,16,
	205,8,16,11,16,12,16,206,1,16,1,16,1,16,3,16,212,8,16,1,17,1,17,1,17,5,
	17,217,8,17,10,17,12,17,220,9,17,1,17,3,17,223,8,17,1,18,1,18,1,18,1,18,
	1,18,1,18,1,18,1,18,1,18,3,18,234,8,18,1,19,1,19,1,19,1,19,1,19,3,19,241,
	8,19,1,19,1,19,1,19,1,19,1,19,5,19,248,8,19,10,19,12,19,251,9,19,1,19,3,
	19,254,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
	1,20,1,20,1,20,3,20,271,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,
	21,281,8,21,10,21,12,21,284,9,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
	1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
	21,1,21,5,21,310,8,21,10,21,12,21,313,9,21,1,21,3,21,316,8,21,1,22,1,22,
	1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,329,8,22,1,23,1,23,1,
	23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,341,8,23,1,23,0,0,24,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,0,391,0,49,
	1,0,0,0,2,57,1,0,0,0,4,63,1,0,0,0,6,65,1,0,0,0,8,67,1,0,0,0,10,69,1,0,0,
	0,12,71,1,0,0,0,14,81,1,0,0,0,16,108,1,0,0,0,18,110,1,0,0,0,20,130,1,0,
	0,0,22,132,1,0,0,0,24,157,1,0,0,0,26,159,1,0,0,0,28,180,1,0,0,0,30,182,
	1,0,0,0,32,211,1,0,0,0,34,213,1,0,0,0,36,233,1,0,0,0,38,253,1,0,0,0,40,
	270,1,0,0,0,42,315,1,0,0,0,44,328,1,0,0,0,46,340,1,0,0,0,48,50,3,2,1,0,
	49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,
	54,5,0,0,1,54,1,1,0,0,0,55,58,5,73,0,0,56,58,3,4,2,0,57,55,1,0,0,0,57,56,
	1,0,0,0,58,3,1,0,0,0,59,64,3,6,3,0,60,64,3,10,5,0,61,64,3,14,7,0,62,64,
	5,5,0,0,63,59,1,0,0,0,63,60,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,5,1,
	0,0,0,65,66,3,8,4,0,66,7,1,0,0,0,67,68,5,1,0,0,68,9,1,0,0,0,69,70,3,12,
	6,0,70,11,1,0,0,0,71,72,5,2,0,0,72,13,1,0,0,0,73,82,3,26,13,0,74,82,3,30,
	15,0,75,82,3,34,17,0,76,82,3,16,8,0,77,82,3,18,9,0,78,82,3,22,11,0,79,82,
	3,38,19,0,80,82,3,42,21,0,81,73,1,0,0,0,81,74,1,0,0,0,81,75,1,0,0,0,81,
	76,1,0,0,0,81,77,1,0,0,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,0,0,82,15,
	1,0,0,0,83,84,5,10,0,0,84,109,5,71,0,0,85,86,5,11,0,0,86,87,5,12,0,0,87,
	109,5,72,0,0,88,89,5,17,0,0,89,109,5,71,0,0,90,91,5,70,0,0,91,92,5,13,0,
	0,92,93,5,14,0,0,93,109,5,68,0,0,94,95,5,6,0,0,95,96,5,70,0,0,96,97,5,13,
	0,0,97,109,5,14,0,0,98,99,5,70,0,0,99,100,5,15,0,0,100,109,5,68,0,0,101,
	102,5,6,0,0,102,103,5,70,0,0,103,109,5,15,0,0,104,105,5,70,0,0,105,106,
	5,16,0,0,106,107,5,35,0,0,107,109,5,65,0,0,108,83,1,0,0,0,108,85,1,0,0,
	0,108,88,1,0,0,0,108,90,1,0,0,0,108,94,1,0,0,0,108,98,1,0,0,0,108,101,1,
	0,0,0,108,104,1,0,0,0,109,17,1,0,0,0,110,111,5,18,0,0,111,112,5,20,0,0,
	112,116,5,65,0,0,113,115,3,20,10,0,114,113,1,0,0,0,115,118,1,0,0,0,116,
	114,1,0,0,0,116,117,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,119,121,5,5,
	0,0,120,119,1,0,0,0,120,121,1,0,0,0,121,19,1,0,0,0,122,131,5,73,0,0,123,
	124,5,21,0,0,124,131,5,22,0,0,125,126,5,23,0,0,126,131,5,24,0,0,127,128,
	5,25,0,0,128,129,5,65,0,0,129,131,5,65,0,0,130,122,1,0,0,0,130,123,1,0,
	0,0,130,125,1,0,0,0,130,127,1,0,0,0,131,21,1,0,0,0,132,133,5,18,0,0,133,
	134,5,19,0,0,134,135,5,65,0,0,135,139,5,65,0,0,136,138,3,24,12,0,137,136,
	1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,143,1,0,0,0,
	141,139,1,0,0,0,142,144,5,5,0,0,143,142,1,0,0,0,143,144,1,0,0,0,144,23,
	1,0,0,0,145,158,5,73,0,0,146,147,5,21,0,0,147,158,5,22,0,0,148,149,5,23,
	0,0,149,158,5,24,0,0,150,151,5,25,0,0,151,152,5,65,0,0,152,158,5,65,0,0,
	153,154,5,26,0,0,154,155,5,27,0,0,155,156,5,16,0,0,156,158,5,28,0,0,157,
	145,1,0,0,0,157,146,1,0,0,0,157,148,1,0,0,0,157,150,1,0,0,0,157,153,1,0,
	0,0,158,25,1,0,0,0,159,160,5,3,0,0,160,161,5,4,0,0,161,165,5,65,0,0,162,
	164,3,28,14,0,163,162,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,
	0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,168,170,5,5,0,0,169,168,1,0,0,0,169,
	170,1,0,0,0,170,27,1,0,0,0,171,181,5,73,0,0,172,173,5,69,0,0,173,174,5,
	66,0,0,174,181,5,66,0,0,175,176,5,29,0,0,176,177,5,8,0,0,177,181,5,9,0,
	0,178,179,5,30,0,0,179,181,5,66,0,0,180,171,1,0,0,0,180,172,1,0,0,0,180,
	175,1,0,0,0,180,178,1,0,0,0,181,29,1,0,0,0,182,183,5,7,0,0,183,184,5,8,
	0,0,184,188,5,9,0,0,185,187,3,32,16,0,186,185,1,0,0,0,187,190,1,0,0,0,188,
	186,1,0,0,0,188,189,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,191,193,5,5,
	0,0,192,191,1,0,0,0,192,193,1,0,0,0,193,31,1,0,0,0,194,212,5,73,0,0,195,
	196,5,6,0,0,196,212,5,32,0,0,197,212,5,32,0,0,198,199,5,70,0,0,199,200,
	5,33,0,0,200,201,5,66,0,0,201,212,5,66,0,0,202,204,5,31,0,0,203,205,5,71,
	0,0,204,203,1,0,0,0,205,206,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,
	212,1,0,0,0,208,209,5,44,0,0,209,210,5,59,0,0,210,212,5,71,0,0,211,194,
	1,0,0,0,211,195,1,0,0,0,211,197,1,0,0,0,211,198,1,0,0,0,211,202,1,0,0,0,
	211,208,1,0,0,0,212,33,1,0,0,0,213,214,5,3,0,0,214,218,5,34,0,0,215,217,
	3,36,18,0,216,215,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,
	0,219,222,1,0,0,0,220,218,1,0,0,0,221,223,5,5,0,0,222,221,1,0,0,0,222,223,
	1,0,0,0,223,35,1,0,0,0,224,234,5,73,0,0,225,226,5,3,0,0,226,234,5,34,0,
	0,227,228,5,35,0,0,228,234,5,65,0,0,229,230,5,6,0,0,230,234,5,36,0,0,231,
	232,5,69,0,0,232,234,5,66,0,0,233,224,1,0,0,0,233,225,1,0,0,0,233,227,1,
	0,0,0,233,229,1,0,0,0,233,231,1,0,0,0,234,37,1,0,0,0,235,236,5,70,0,0,236,
	237,5,37,0,0,237,238,5,39,0,0,238,240,5,66,0,0,239,241,5,66,0,0,240,239,
	1,0,0,0,240,241,1,0,0,0,241,254,1,0,0,0,242,243,5,70,0,0,243,244,5,37,0,
	0,244,245,5,38,0,0,245,249,5,71,0,0,246,248,3,40,20,0,247,246,1,0,0,0,248,
	251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,252,1,0,0,0,251,249,1,0,
	0,0,252,254,5,5,0,0,253,235,1,0,0,0,253,242,1,0,0,0,254,39,1,0,0,0,255,
	271,5,73,0,0,256,257,5,69,0,0,257,258,5,66,0,0,258,271,5,66,0,0,259,260,
	5,40,0,0,260,271,5,66,0,0,261,262,5,41,0,0,262,271,5,66,0,0,263,264,5,15,
	0,0,264,271,5,68,0,0,265,266,5,43,0,0,266,267,5,66,0,0,267,271,5,66,0,0,
	268,269,5,42,0,0,269,271,5,71,0,0,270,255,1,0,0,0,270,256,1,0,0,0,270,259,
	1,0,0,0,270,261,1,0,0,0,270,263,1,0,0,0,270,265,1,0,0,0,270,268,1,0,0,0,
	271,41,1,0,0,0,272,273,5,44,0,0,273,274,5,45,0,0,274,316,5,1,0,0,275,276,
	5,44,0,0,276,277,5,45,0,0,277,278,5,63,0,0,278,282,5,65,0,0,279,281,3,44,
	22,0,280,279,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,
	285,1,0,0,0,284,282,1,0,0,0,285,316,5,5,0,0,286,287,5,44,0,0,287,288,5,
	45,0,0,288,289,5,64,0,0,289,290,5,71,0,0,290,291,5,33,0,0,291,316,5,66,
	0,0,292,293,5,44,0,0,293,294,5,45,0,0,294,295,5,58,0,0,295,316,5,33,0,0,
	296,297,5,44,0,0,297,298,5,46,0,0,298,299,5,47,0,0,299,300,5,71,0,0,300,
	301,5,48,0,0,301,316,5,49,0,0,302,303,5,44,0,0,303,304,5,59,0,0,304,305,
	5,71,0,0,305,306,5,65,0,0,306,307,5,46,0,0,307,311,5,45,0,0,308,310,3,46,
	23,0,309,308,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,
	314,1,0,0,0,313,311,1,0,0,0,314,316,5,5,0,0,315,272,1,0,0,0,315,275,1,0,
	0,0,315,286,1,0,0,0,315,292,1,0,0,0,315,296,1,0,0,0,315,302,1,0,0,0,316,
	43,1,0,0,0,317,329,5,73,0,0,318,319,5,50,0,0,319,329,5,51,0,0,320,321,5,
	52,0,0,321,329,5,53,0,0,322,323,5,54,0,0,323,329,5,55,0,0,324,325,5,56,
	0,0,325,329,5,65,0,0,326,327,5,57,0,0,327,329,5,65,0,0,328,317,1,0,0,0,
	328,318,1,0,0,0,328,320,1,0,0,0,328,322,1,0,0,0,328,324,1,0,0,0,328,326,
	1,0,0,0,329,45,1,0,0,0,330,341,5,73,0,0,331,332,5,60,0,0,332,333,5,33,0,
	0,333,341,5,71,0,0,334,335,5,61,0,0,335,336,5,47,0,0,336,341,5,71,0,0,337,
	338,5,61,0,0,338,339,5,62,0,0,339,341,5,66,0,0,340,330,1,0,0,0,340,331,
	1,0,0,0,340,334,1,0,0,0,340,337,1,0,0,0,341,47,1,0,0,0,30,51,57,63,81,108,
	116,120,130,139,143,157,165,169,180,188,192,206,211,218,222,233,240,249,
	253,270,282,311,315,328,340];

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
	public EOF(): TerminalNode {
		return this.getToken(CiscoIOSParser.EOF, 0);
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
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


export class LineContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_line;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterLine) {
	 		listener.enterLine(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitLine) {
	 		listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
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
	public exec_stmt(): Exec_stmtContext {
		return this.getTypedRuleContext(Exec_stmtContext, 0) as Exec_stmtContext;
	}
	public priv_stmt(): Priv_stmtContext {
		return this.getTypedRuleContext(Priv_stmtContext, 0) as Priv_stmtContext;
	}
	public global_stmt(): Global_stmtContext {
		return this.getTypedRuleContext(Global_stmtContext, 0) as Global_stmtContext;
	}
	public EXIT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXIT, 0);
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


export class Exec_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enable_stmt(): Enable_stmtContext {
		return this.getTypedRuleContext(Enable_stmtContext, 0) as Enable_stmtContext;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_exec_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterExec_stmt) {
	 		listener.enterExec_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitExec_stmt) {
	 		listener.exitExec_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitExec_stmt) {
			return visitor.visitExec_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enable_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENABLE(): TerminalNode {
		return this.getToken(CiscoIOSParser.ENABLE, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_enable_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterEnable_stmt) {
	 		listener.enterEnable_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitEnable_stmt) {
	 		listener.exitEnable_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitEnable_stmt) {
			return visitor.visitEnable_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Priv_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conft_stmt(): Conft_stmtContext {
		return this.getTypedRuleContext(Conft_stmtContext, 0) as Conft_stmtContext;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_priv_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterPriv_stmt) {
	 		listener.enterPriv_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitPriv_stmt) {
	 		listener.exitPriv_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitPriv_stmt) {
			return visitor.visitPriv_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conft_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONFT(): TerminalNode {
		return this.getToken(CiscoIOSParser.CONFT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_conft_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterConft_stmt) {
	 		listener.enterConft_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitConft_stmt) {
	 		listener.exitConft_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitConft_stmt) {
			return visitor.visitConft_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ospf_stmt(): Ospf_stmtContext {
		return this.getTypedRuleContext(Ospf_stmtContext, 0) as Ospf_stmtContext;
	}
	public int_stmt(): Int_stmtContext {
		return this.getTypedRuleContext(Int_stmtContext, 0) as Int_stmtContext;
	}
	public rip_stmt(): Rip_stmtContext {
		return this.getTypedRuleContext(Rip_stmtContext, 0) as Rip_stmtContext;
	}
	public grundkonfig_stmt(): Grundkonfig_stmtContext {
		return this.getTypedRuleContext(Grundkonfig_stmtContext, 0) as Grundkonfig_stmtContext;
	}
	public linecon_stmt(): Linecon_stmtContext {
		return this.getTypedRuleContext(Linecon_stmtContext, 0) as Linecon_stmtContext;
	}
	public linevty_stmt(): Linevty_stmtContext {
		return this.getTypedRuleContext(Linevty_stmtContext, 0) as Linevty_stmtContext;
	}
	public dhcp_stmt(): Dhcp_stmtContext {
		return this.getTypedRuleContext(Dhcp_stmtContext, 0) as Dhcp_stmtContext;
	}
	public vpn_stmt(): Vpn_stmtContext {
		return this.getTypedRuleContext(Vpn_stmtContext, 0) as Vpn_stmtContext;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_global_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterGlobal_stmt) {
	 		listener.enterGlobal_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitGlobal_stmt) {
	 		listener.exitGlobal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitGlobal_stmt) {
			return visitor.visitGlobal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Grundkonfig_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HOSTNAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.HOSTNAME, 0);
	}
	public STR(): TerminalNode {
		return this.getToken(CiscoIOSParser.STR, 0);
	}
	public BANNER(): TerminalNode {
		return this.getToken(CiscoIOSParser.BANNER, 0);
	}
	public MOTD(): TerminalNode {
		return this.getToken(CiscoIOSParser.MOTD, 0);
	}
	public BANNER_TEXT(): TerminalNode {
		return this.getToken(CiscoIOSParser.BANNER_TEXT, 0);
	}
	public USERNAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.USERNAME, 0);
	}
	public IP(): TerminalNode {
		return this.getToken(CiscoIOSParser.IP, 0);
	}
	public DOMAIN(): TerminalNode {
		return this.getToken(CiscoIOSParser.DOMAIN, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.NAME, 0);
	}
	public DOMAIN_NAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.DOMAIN_NAME, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(CiscoIOSParser.NO, 0);
	}
	public DOMAINNAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.DOMAINNAME, 0);
	}
	public SSH(): TerminalNode {
		return this.getToken(CiscoIOSParser.SSH, 0);
	}
	public VERSION(): TerminalNode {
		return this.getToken(CiscoIOSParser.VERSION, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_grundkonfig_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterGrundkonfig_stmt) {
	 		listener.enterGrundkonfig_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitGrundkonfig_stmt) {
	 		listener.exitGrundkonfig_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitGrundkonfig_stmt) {
			return visitor.visitGrundkonfig_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Linecon_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.LINE, 0);
	}
	public CON(): TerminalNode {
		return this.getToken(CiscoIOSParser.CON, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, 0);
	}
	public linecon_body_list(): Linecon_bodyContext[] {
		return this.getTypedRuleContexts(Linecon_bodyContext) as Linecon_bodyContext[];
	}
	public linecon_body(i: number): Linecon_bodyContext {
		return this.getTypedRuleContext(Linecon_bodyContext, i) as Linecon_bodyContext;
	}
	public EXIT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXIT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_linecon_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterLinecon_stmt) {
	 		listener.enterLinecon_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitLinecon_stmt) {
	 		listener.exitLinecon_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitLinecon_stmt) {
			return visitor.visitLinecon_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Linecon_bodyContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public LOGIN(): TerminalNode {
		return this.getToken(CiscoIOSParser.LOGIN, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(CiscoIOSParser.LOCAL, 0);
	}
	public LOGGING(): TerminalNode {
		return this.getToken(CiscoIOSParser.LOGGING, 0);
	}
	public SYNCHRONUS(): TerminalNode {
		return this.getToken(CiscoIOSParser.SYNCHRONUS, 0);
	}
	public EXEC_TIMEOUT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXEC_TIMEOUT, 0);
	}
	public INT_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.INT);
	}
	public INT(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, i);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_linecon_body;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterLinecon_body) {
	 		listener.enterLinecon_body(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitLinecon_body) {
	 		listener.exitLinecon_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitLinecon_body) {
			return visitor.visitLinecon_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Linevty_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.LINE, 0);
	}
	public VTY(): TerminalNode {
		return this.getToken(CiscoIOSParser.VTY, 0);
	}
	public INT_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.INT);
	}
	public INT(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, i);
	}
	public linevty_body_list(): Linevty_bodyContext[] {
		return this.getTypedRuleContexts(Linevty_bodyContext) as Linevty_bodyContext[];
	}
	public linevty_body(i: number): Linevty_bodyContext {
		return this.getTypedRuleContext(Linevty_bodyContext, i) as Linevty_bodyContext;
	}
	public EXIT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXIT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_linevty_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterLinevty_stmt) {
	 		listener.enterLinevty_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitLinevty_stmt) {
	 		listener.exitLinevty_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitLinevty_stmt) {
			return visitor.visitLinevty_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Linevty_bodyContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public LOGIN(): TerminalNode {
		return this.getToken(CiscoIOSParser.LOGIN, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(CiscoIOSParser.LOCAL, 0);
	}
	public LOGGING(): TerminalNode {
		return this.getToken(CiscoIOSParser.LOGGING, 0);
	}
	public SYNCHRONUS(): TerminalNode {
		return this.getToken(CiscoIOSParser.SYNCHRONUS, 0);
	}
	public EXEC_TIMEOUT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXEC_TIMEOUT, 0);
	}
	public INT_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.INT);
	}
	public INT(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, i);
	}
	public TRANSPORT(): TerminalNode {
		return this.getToken(CiscoIOSParser.TRANSPORT, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INPUT, 0);
	}
	public SSH(): TerminalNode {
		return this.getToken(CiscoIOSParser.SSH, 0);
	}
	public TELNET(): TerminalNode {
		return this.getToken(CiscoIOSParser.TELNET, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_linevty_body;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterLinevty_body) {
	 		listener.enterLinevty_body(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitLinevty_body) {
	 		listener.exitLinevty_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitLinevty_body) {
			return visitor.visitLinevty_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ospf_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ROUTER(): TerminalNode {
		return this.getToken(CiscoIOSParser.ROUTER, 0);
	}
	public OSPF(): TerminalNode {
		return this.getToken(CiscoIOSParser.OSPF, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, 0);
	}
	public ospf_body_list(): Ospf_bodyContext[] {
		return this.getTypedRuleContexts(Ospf_bodyContext) as Ospf_bodyContext[];
	}
	public ospf_body(i: number): Ospf_bodyContext {
		return this.getTypedRuleContext(Ospf_bodyContext, i) as Ospf_bodyContext;
	}
	public EXIT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXIT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_ospf_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterOspf_stmt) {
	 		listener.enterOspf_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitOspf_stmt) {
	 		listener.exitOspf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitOspf_stmt) {
			return visitor.visitOspf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ospf_bodyContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public NETWORK(): TerminalNode {
		return this.getToken(CiscoIOSParser.NETWORK, 0);
	}
	public IP_ADDR_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.IP_ADDR);
	}
	public IP_ADDR(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.IP_ADDR, i);
	}
	public PASSIVE_INTERFACE(): TerminalNode {
		return this.getToken(CiscoIOSParser.PASSIVE_INTERFACE, 0);
	}
	public INT_NAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT_NAME, 0);
	}
	public INT_NUM(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT_NUM, 0);
	}
	public ROUTER_ID(): TerminalNode {
		return this.getToken(CiscoIOSParser.ROUTER_ID, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_ospf_body;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterOspf_body) {
	 		listener.enterOspf_body(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitOspf_body) {
	 		listener.exitOspf_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitOspf_body) {
			return visitor.visitOspf_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Int_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(CiscoIOSParser.INTERFACE, 0);
	}
	public INT_NAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT_NAME, 0);
	}
	public INT_NUM(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT_NUM, 0);
	}
	public int_body_list(): Int_bodyContext[] {
		return this.getTypedRuleContexts(Int_bodyContext) as Int_bodyContext[];
	}
	public int_body(i: number): Int_bodyContext {
		return this.getTypedRuleContext(Int_bodyContext, i) as Int_bodyContext;
	}
	public EXIT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXIT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_int_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterInt_stmt) {
	 		listener.enterInt_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitInt_stmt) {
	 		listener.exitInt_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitInt_stmt) {
			return visitor.visitInt_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Int_bodyContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(CiscoIOSParser.NO, 0);
	}
	public SHUT(): TerminalNode {
		return this.getToken(CiscoIOSParser.SHUT, 0);
	}
	public IP(): TerminalNode {
		return this.getToken(CiscoIOSParser.IP, 0);
	}
	public ADDR(): TerminalNode {
		return this.getToken(CiscoIOSParser.ADDR, 0);
	}
	public IP_ADDR_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.IP_ADDR);
	}
	public IP_ADDR(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.IP_ADDR, i);
	}
	public DESCRIPTION(): TerminalNode {
		return this.getToken(CiscoIOSParser.DESCRIPTION, 0);
	}
	public STR_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.STR);
	}
	public STR(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.STR, i);
	}
	public CRYPTO(): TerminalNode {
		return this.getToken(CiscoIOSParser.CRYPTO, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(CiscoIOSParser.MAP, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_int_body;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterInt_body) {
	 		listener.enterInt_body(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitInt_body) {
	 		listener.exitInt_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitInt_body) {
			return visitor.visitInt_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rip_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ROUTER(): TerminalNode {
		return this.getToken(CiscoIOSParser.ROUTER, 0);
	}
	public RIP(): TerminalNode {
		return this.getToken(CiscoIOSParser.RIP, 0);
	}
	public rip_body_list(): Rip_bodyContext[] {
		return this.getTypedRuleContexts(Rip_bodyContext) as Rip_bodyContext[];
	}
	public rip_body(i: number): Rip_bodyContext {
		return this.getTypedRuleContext(Rip_bodyContext, i) as Rip_bodyContext;
	}
	public EXIT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXIT, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_rip_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterRip_stmt) {
	 		listener.enterRip_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitRip_stmt) {
	 		listener.exitRip_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitRip_stmt) {
			return visitor.visitRip_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rip_bodyContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public ROUTER(): TerminalNode {
		return this.getToken(CiscoIOSParser.ROUTER, 0);
	}
	public RIP(): TerminalNode {
		return this.getToken(CiscoIOSParser.RIP, 0);
	}
	public VERSION(): TerminalNode {
		return this.getToken(CiscoIOSParser.VERSION, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(CiscoIOSParser.NO, 0);
	}
	public AUTO_SUMMARY(): TerminalNode {
		return this.getToken(CiscoIOSParser.AUTO_SUMMARY, 0);
	}
	public NETWORK(): TerminalNode {
		return this.getToken(CiscoIOSParser.NETWORK, 0);
	}
	public IP_ADDR(): TerminalNode {
		return this.getToken(CiscoIOSParser.IP_ADDR, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_rip_body;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterRip_body) {
	 		listener.enterRip_body(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitRip_body) {
	 		listener.exitRip_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitRip_body) {
			return visitor.visitRip_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dhcp_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IP(): TerminalNode {
		return this.getToken(CiscoIOSParser.IP, 0);
	}
	public DHCP(): TerminalNode {
		return this.getToken(CiscoIOSParser.DHCP, 0);
	}
	public EXCLUDED_ADDRESS(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXCLUDED_ADDRESS, 0);
	}
	public IP_ADDR_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.IP_ADDR);
	}
	public IP_ADDR(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.IP_ADDR, i);
	}
	public POOL(): TerminalNode {
		return this.getToken(CiscoIOSParser.POOL, 0);
	}
	public STR(): TerminalNode {
		return this.getToken(CiscoIOSParser.STR, 0);
	}
	public EXIT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXIT, 0);
	}
	public dhcp_body_list(): Dhcp_bodyContext[] {
		return this.getTypedRuleContexts(Dhcp_bodyContext) as Dhcp_bodyContext[];
	}
	public dhcp_body(i: number): Dhcp_bodyContext {
		return this.getTypedRuleContext(Dhcp_bodyContext, i) as Dhcp_bodyContext;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_dhcp_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterDhcp_stmt) {
	 		listener.enterDhcp_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitDhcp_stmt) {
	 		listener.exitDhcp_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitDhcp_stmt) {
			return visitor.visitDhcp_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dhcp_bodyContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public NETWORK(): TerminalNode {
		return this.getToken(CiscoIOSParser.NETWORK, 0);
	}
	public IP_ADDR_list(): TerminalNode[] {
	    	return this.getTokens(CiscoIOSParser.IP_ADDR);
	}
	public IP_ADDR(i: number): TerminalNode {
		return this.getToken(CiscoIOSParser.IP_ADDR, i);
	}
	public DEFAULT_ROUTER(): TerminalNode {
		return this.getToken(CiscoIOSParser.DEFAULT_ROUTER, 0);
	}
	public DNS_SERVER(): TerminalNode {
		return this.getToken(CiscoIOSParser.DNS_SERVER, 0);
	}
	public DOMAINNAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.DOMAINNAME, 0);
	}
	public DOMAIN_NAME(): TerminalNode {
		return this.getToken(CiscoIOSParser.DOMAIN_NAME, 0);
	}
	public HOST(): TerminalNode {
		return this.getToken(CiscoIOSParser.HOST, 0);
	}
	public CLIENT_IDENTIFIER(): TerminalNode {
		return this.getToken(CiscoIOSParser.CLIENT_IDENTIFIER, 0);
	}
	public STR(): TerminalNode {
		return this.getToken(CiscoIOSParser.STR, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_dhcp_body;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterDhcp_body) {
	 		listener.enterDhcp_body(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitDhcp_body) {
	 		listener.exitDhcp_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitDhcp_body) {
			return visitor.visitDhcp_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Vpn_stmtContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CRYPTO(): TerminalNode {
		return this.getToken(CiscoIOSParser.CRYPTO, 0);
	}
	public ISAKMP(): TerminalNode {
		return this.getToken(CiscoIOSParser.ISAKMP, 0);
	}
	public ENABLE(): TerminalNode {
		return this.getToken(CiscoIOSParser.ENABLE, 0);
	}
	public POLICY(): TerminalNode {
		return this.getToken(CiscoIOSParser.POLICY, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, 0);
	}
	public EXIT(): TerminalNode {
		return this.getToken(CiscoIOSParser.EXIT, 0);
	}
	public vpn_isakmp_body_list(): Vpn_isakmp_bodyContext[] {
		return this.getTypedRuleContexts(Vpn_isakmp_bodyContext) as Vpn_isakmp_bodyContext[];
	}
	public vpn_isakmp_body(i: number): Vpn_isakmp_bodyContext {
		return this.getTypedRuleContext(Vpn_isakmp_bodyContext, i) as Vpn_isakmp_bodyContext;
	}
	public KEY(): TerminalNode {
		return this.getToken(CiscoIOSParser.KEY, 0);
	}
	public STR(): TerminalNode {
		return this.getToken(CiscoIOSParser.STR, 0);
	}
	public ADDR(): TerminalNode {
		return this.getToken(CiscoIOSParser.ADDR, 0);
	}
	public IP_ADDR(): TerminalNode {
		return this.getToken(CiscoIOSParser.IP_ADDR, 0);
	}
	public IDENTITY(): TerminalNode {
		return this.getToken(CiscoIOSParser.IDENTITY, 0);
	}
	public IPSEC(): TerminalNode {
		return this.getToken(CiscoIOSParser.IPSEC, 0);
	}
	public TRANSFORM_SET(): TerminalNode {
		return this.getToken(CiscoIOSParser.TRANSFORM_SET, 0);
	}
	public ESP_DES(): TerminalNode {
		return this.getToken(CiscoIOSParser.ESP_DES, 0);
	}
	public ESP_SHA_HMAC(): TerminalNode {
		return this.getToken(CiscoIOSParser.ESP_SHA_HMAC, 0);
	}
	public MAP(): TerminalNode {
		return this.getToken(CiscoIOSParser.MAP, 0);
	}
	public vpn_crypto_map_body_list(): Vpn_crypto_map_bodyContext[] {
		return this.getTypedRuleContexts(Vpn_crypto_map_bodyContext) as Vpn_crypto_map_bodyContext[];
	}
	public vpn_crypto_map_body(i: number): Vpn_crypto_map_bodyContext {
		return this.getTypedRuleContext(Vpn_crypto_map_bodyContext, i) as Vpn_crypto_map_bodyContext;
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_vpn_stmt;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterVpn_stmt) {
	 		listener.enterVpn_stmt(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitVpn_stmt) {
	 		listener.exitVpn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitVpn_stmt) {
			return visitor.visitVpn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Vpn_isakmp_bodyContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public AUTHENTICATION(): TerminalNode {
		return this.getToken(CiscoIOSParser.AUTHENTICATION, 0);
	}
	public PRE_SHARE(): TerminalNode {
		return this.getToken(CiscoIOSParser.PRE_SHARE, 0);
	}
	public ENCRYPTION(): TerminalNode {
		return this.getToken(CiscoIOSParser.ENCRYPTION, 0);
	}
	public DES(): TerminalNode {
		return this.getToken(CiscoIOSParser.DES, 0);
	}
	public HASH(): TerminalNode {
		return this.getToken(CiscoIOSParser.HASH, 0);
	}
	public MD5(): TerminalNode {
		return this.getToken(CiscoIOSParser.MD5, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(CiscoIOSParser.GROUP, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(CiscoIOSParser.INT, 0);
	}
	public LIFETIME(): TerminalNode {
		return this.getToken(CiscoIOSParser.LIFETIME, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_vpn_isakmp_body;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterVpn_isakmp_body) {
	 		listener.enterVpn_isakmp_body(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitVpn_isakmp_body) {
	 		listener.exitVpn_isakmp_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitVpn_isakmp_body) {
			return visitor.visitVpn_isakmp_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Vpn_crypto_map_bodyContext extends ParserRuleContext {
	constructor(parser?: CiscoIOSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(CiscoIOSParser.NEWLINE, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(CiscoIOSParser.MATCH, 0);
	}
	public ADDR(): TerminalNode {
		return this.getToken(CiscoIOSParser.ADDR, 0);
	}
	public STR(): TerminalNode {
		return this.getToken(CiscoIOSParser.STR, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(CiscoIOSParser.SET, 0);
	}
	public TRANSFORM_SET(): TerminalNode {
		return this.getToken(CiscoIOSParser.TRANSFORM_SET, 0);
	}
	public PEER(): TerminalNode {
		return this.getToken(CiscoIOSParser.PEER, 0);
	}
	public IP_ADDR(): TerminalNode {
		return this.getToken(CiscoIOSParser.IP_ADDR, 0);
	}
    public get ruleIndex(): number {
    	return CiscoIOSParser.RULE_vpn_crypto_map_body;
	}
	public enterRule(listener: CiscoIOSListener): void {
	    if(listener.enterVpn_crypto_map_body) {
	 		listener.enterVpn_crypto_map_body(this);
		}
	}
	public exitRule(listener: CiscoIOSListener): void {
	    if(listener.exitVpn_crypto_map_body) {
	 		listener.exitVpn_crypto_map_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CiscoIOSVisitor<Result>): Result {
		if (visitor.visitVpn_crypto_map_body) {
			return visitor.visitVpn_crypto_map_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
