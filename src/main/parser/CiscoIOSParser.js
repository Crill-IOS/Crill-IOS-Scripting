"use strict";
// Generated from ./CiscoIOS.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dhcp_bodyContext = exports.Dhcp_stmtContext = exports.Rip_bodyContext = exports.Rip_stmtContext = exports.Int_bodyContext = exports.Int_stmtContext = exports.Ospf_bodyContext = exports.Ospf_stmtContext = exports.Linevty_bodyContext = exports.Linevty_stmtContext = exports.Linecon_bodyContext = exports.Linecon_stmtContext = exports.Grundkonfig_stmtContext = exports.Global_stmtContext = exports.Conft_stmtContext = exports.Priv_stmtContext = exports.Enable_stmtContext = exports.Exec_stmtContext = exports.StatementContext = exports.LineContext = exports.ConfigContext = void 0;
const antlr4_1 = require("antlr4");
class CiscoIOSParser extends antlr4_1.Parser {
    static ENABLE = 1;
    static CONFT = 2;
    static ROUTER = 3;
    static OSPF = 4;
    static EXIT = 5;
    static NO = 6;
    static INTERFACE = 7;
    static INT_NAME = 8;
    static INT_NUM = 9;
    static HOSTNAME = 10;
    static BANNER = 11;
    static MOTD = 12;
    static DOMAIN = 13;
    static NAME = 14;
    static SSH = 15;
    static USERNAME = 16;
    static LINE = 17;
    static VTY = 18;
    static CON = 19;
    static LOGIN = 20;
    static LOCAL = 21;
    static LOGGING = 22;
    static SYNCHRONUS = 23;
    static EXEC_TIMEOUT = 24;
    static TRANSPORT = 25;
    static INPUT = 26;
    static TELNET = 27;
    static PASSIVE_INTERFACE = 28;
    static ROUTER_ID = 29;
    static DESCRIPTION = 30;
    static SHUT = 31;
    static ADDR = 32;
    static RIP = 33;
    static VERSION = 34;
    static AUTO_SUMMARY = 35;
    static DHCP = 36;
    static POOL = 37;
    static INT = 38;
    static IP_ADDR = 39;
    static SUB_ADDR = 40;
    static DOMAIN_NAME = 41;
    static NETWORK = 42;
    static IP = 43;
    static STR = 44;
    static BANNER_TEXT = 45;
    static NEWLINE = 46;
    static WS = 47;
    static ANY = 48;
    static EOF = antlr4_1.Token.EOF;
    static RULE_config = 0;
    static RULE_line = 1;
    static RULE_statement = 2;
    static RULE_exec_stmt = 3;
    static RULE_enable_stmt = 4;
    static RULE_priv_stmt = 5;
    static RULE_conft_stmt = 6;
    static RULE_global_stmt = 7;
    static RULE_grundkonfig_stmt = 8;
    static RULE_linecon_stmt = 9;
    static RULE_linecon_body = 10;
    static RULE_linevty_stmt = 11;
    static RULE_linevty_body = 12;
    static RULE_ospf_stmt = 13;
    static RULE_ospf_body = 14;
    static RULE_int_stmt = 15;
    static RULE_int_body = 16;
    static RULE_rip_stmt = 17;
    static RULE_rip_body = 18;
    static RULE_dhcp_stmt = 19;
    static RULE_dhcp_body = 20;
    static literalNames = [null, "'enable'",
        "'configure terminal'",
        "'router'",
        "'ospf'", "'exit'",
        "'no'", "'interface'",
        null, null,
        "'hostname'",
        "'banner'",
        "'motd'", "'domain'",
        "'name'", "'ssh'",
        "'username'",
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
        null, null,
        null, null,
        "'network'",
        "'ip'"];
    static symbolicNames = [null, "ENABLE",
        "CONFT", "ROUTER",
        "OSPF", "EXIT",
        "NO", "INTERFACE",
        "INT_NAME",
        "INT_NUM",
        "HOSTNAME",
        "BANNER", "MOTD",
        "DOMAIN", "NAME",
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
        "INT", "IP_ADDR",
        "SUB_ADDR",
        "DOMAIN_NAME",
        "NETWORK",
        "IP", "STR",
        "BANNER_TEXT",
        "NEWLINE",
        "WS", "ANY"];
    // tslint:disable:no-trailing-whitespace
    static ruleNames = [
        "config", "line", "statement", "exec_stmt", "enable_stmt", "priv_stmt",
        "conft_stmt", "global_stmt", "grundkonfig_stmt", "linecon_stmt", "linecon_body",
        "linevty_stmt", "linevty_body", "ospf_stmt", "ospf_body", "int_stmt",
        "int_body", "rip_stmt", "rip_body", "dhcp_stmt", "dhcp_body",
    ];
    get grammarFileName() { return "CiscoIOS.g4"; }
    get literalNames() { return CiscoIOSParser.literalNames; }
    get symbolicNames() { return CiscoIOSParser.symbolicNames; }
    get ruleNames() { return CiscoIOSParser.ruleNames; }
    get serializedATN() { return CiscoIOSParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr4_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new antlr4_1.ParserATNSimulator(this, CiscoIOSParser._ATN, CiscoIOSParser.DecisionsToDFA, new antlr4_1.PredictionContextCache());
    }
    // @RuleVersion(0)
    config() {
        let localctx = new ConfigContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, CiscoIOSParser.RULE_config);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 42;
                            this.line();
                        }
                    }
                    this.state = 45;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 199918) !== 0) || _la === 43 || _la === 46);
                this.state = 47;
                this.match(CiscoIOSParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    line() {
        let localctx = new LineContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, CiscoIOSParser.RULE_line);
        try {
            this.state = 51;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 49;
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
                case 16:
                case 17:
                case 43:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 50;
                        this.statement();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    statement() {
        let localctx = new StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, CiscoIOSParser.RULE_statement);
        try {
            this.state = 57;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 53;
                        this.exec_stmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 54;
                        this.priv_stmt();
                    }
                    break;
                case 3:
                case 6:
                case 7:
                case 10:
                case 11:
                case 16:
                case 17:
                case 43:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 55;
                        this.global_stmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 56;
                        this.match(CiscoIOSParser.EXIT);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    exec_stmt() {
        let localctx = new Exec_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, CiscoIOSParser.RULE_exec_stmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 59;
                this.enable_stmt();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    enable_stmt() {
        let localctx = new Enable_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, CiscoIOSParser.RULE_enable_stmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 61;
                this.match(CiscoIOSParser.ENABLE);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    priv_stmt() {
        let localctx = new Priv_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, CiscoIOSParser.RULE_priv_stmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 63;
                this.conft_stmt();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    conft_stmt() {
        let localctx = new Conft_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, CiscoIOSParser.RULE_conft_stmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 65;
                this.match(CiscoIOSParser.CONFT);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    global_stmt() {
        let localctx = new Global_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, CiscoIOSParser.RULE_global_stmt);
        try {
            this.state = 74;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 67;
                        this.ospf_stmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 68;
                        this.int_stmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 69;
                        this.rip_stmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 70;
                        this.grundkonfig_stmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 71;
                        this.linecon_stmt();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 72;
                        this.linevty_stmt();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 73;
                        this.dhcp_stmt();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    grundkonfig_stmt() {
        let localctx = new Grundkonfig_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, CiscoIOSParser.RULE_grundkonfig_stmt);
        try {
            this.state = 95;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 76;
                        this.match(CiscoIOSParser.HOSTNAME);
                        this.state = 77;
                        this.match(CiscoIOSParser.STR);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 78;
                        this.match(CiscoIOSParser.BANNER);
                        this.state = 79;
                        this.match(CiscoIOSParser.MOTD);
                        this.state = 80;
                        this.match(CiscoIOSParser.BANNER_TEXT);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 81;
                        this.match(CiscoIOSParser.USERNAME);
                        this.state = 82;
                        this.match(CiscoIOSParser.STR);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 83;
                        this.match(CiscoIOSParser.IP);
                        this.state = 84;
                        this.match(CiscoIOSParser.DOMAIN);
                        this.state = 85;
                        this.match(CiscoIOSParser.NAME);
                        this.state = 86;
                        this.match(CiscoIOSParser.DOMAIN_NAME);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 87;
                        this.match(CiscoIOSParser.NO);
                        this.state = 88;
                        this.match(CiscoIOSParser.IP);
                        this.state = 89;
                        this.match(CiscoIOSParser.DOMAIN);
                        this.state = 90;
                        this.match(CiscoIOSParser.NAME);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 91;
                        this.match(CiscoIOSParser.IP);
                        this.state = 92;
                        this.match(CiscoIOSParser.SSH);
                        this.state = 93;
                        this.match(CiscoIOSParser.VERSION);
                        this.state = 94;
                        this.match(CiscoIOSParser.INT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    linecon_stmt() {
        let localctx = new Linecon_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, CiscoIOSParser.RULE_linecon_stmt);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 97;
                this.match(CiscoIOSParser.LINE);
                this.state = 98;
                this.match(CiscoIOSParser.CON);
                this.state = 99;
                this.match(CiscoIOSParser.INT);
                this.state = 103;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 100;
                                this.linecon_body();
                            }
                        }
                    }
                    this.state = 105;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
                }
                this.state = 107;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 106;
                            this.match(CiscoIOSParser.EXIT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    linecon_body() {
        let localctx = new Linecon_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, CiscoIOSParser.RULE_linecon_body);
        try {
            this.state = 117;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 109;
                        this.match(CiscoIOSParser.NEWLINE);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 110;
                        this.match(CiscoIOSParser.LOGIN);
                        this.state = 111;
                        this.match(CiscoIOSParser.LOCAL);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 112;
                        this.match(CiscoIOSParser.LOGGING);
                        this.state = 113;
                        this.match(CiscoIOSParser.SYNCHRONUS);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 114;
                        this.match(CiscoIOSParser.EXEC_TIMEOUT);
                        this.state = 115;
                        this.match(CiscoIOSParser.INT);
                        this.state = 116;
                        this.match(CiscoIOSParser.INT);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    linevty_stmt() {
        let localctx = new Linevty_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, CiscoIOSParser.RULE_linevty_stmt);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 119;
                this.match(CiscoIOSParser.LINE);
                this.state = 120;
                this.match(CiscoIOSParser.VTY);
                this.state = 121;
                this.match(CiscoIOSParser.INT);
                this.state = 122;
                this.match(CiscoIOSParser.INT);
                this.state = 126;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 123;
                                this.linevty_body();
                            }
                        }
                    }
                    this.state = 128;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
                }
                this.state = 130;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 129;
                            this.match(CiscoIOSParser.EXIT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    linevty_body() {
        let localctx = new Linevty_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, CiscoIOSParser.RULE_linevty_body);
        try {
            this.state = 144;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 132;
                        this.match(CiscoIOSParser.NEWLINE);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 133;
                        this.match(CiscoIOSParser.LOGIN);
                        this.state = 134;
                        this.match(CiscoIOSParser.LOCAL);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 135;
                        this.match(CiscoIOSParser.LOGGING);
                        this.state = 136;
                        this.match(CiscoIOSParser.SYNCHRONUS);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 137;
                        this.match(CiscoIOSParser.EXEC_TIMEOUT);
                        this.state = 138;
                        this.match(CiscoIOSParser.INT);
                        this.state = 139;
                        this.match(CiscoIOSParser.INT);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 140;
                        this.match(CiscoIOSParser.TRANSPORT);
                        this.state = 141;
                        this.match(CiscoIOSParser.INPUT);
                        this.state = 142;
                        this.match(CiscoIOSParser.SSH);
                        this.state = 143;
                        this.match(CiscoIOSParser.TELNET);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    ospf_stmt() {
        let localctx = new Ospf_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, CiscoIOSParser.RULE_ospf_stmt);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 146;
                this.match(CiscoIOSParser.ROUTER);
                this.state = 147;
                this.match(CiscoIOSParser.OSPF);
                this.state = 148;
                this.match(CiscoIOSParser.INT);
                this.state = 152;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 149;
                                this.ospf_body();
                            }
                        }
                    }
                    this.state = 154;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
                }
                this.state = 156;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 155;
                            this.match(CiscoIOSParser.EXIT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    ospf_body() {
        let localctx = new Ospf_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, CiscoIOSParser.RULE_ospf_body);
        try {
            this.state = 167;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 158;
                        this.match(CiscoIOSParser.NEWLINE);
                    }
                    break;
                case 42:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 159;
                        this.match(CiscoIOSParser.NETWORK);
                        this.state = 160;
                        this.match(CiscoIOSParser.IP_ADDR);
                        this.state = 161;
                        this.match(CiscoIOSParser.IP_ADDR);
                    }
                    break;
                case 28:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 162;
                        this.match(CiscoIOSParser.PASSIVE_INTERFACE);
                        this.state = 163;
                        this.match(CiscoIOSParser.INT_NAME);
                        this.state = 164;
                        this.match(CiscoIOSParser.INT_NUM);
                    }
                    break;
                case 29:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 165;
                        this.match(CiscoIOSParser.ROUTER_ID);
                        this.state = 166;
                        this.match(CiscoIOSParser.IP_ADDR);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    int_stmt() {
        let localctx = new Int_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, CiscoIOSParser.RULE_int_stmt);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 169;
                this.match(CiscoIOSParser.INTERFACE);
                this.state = 170;
                this.match(CiscoIOSParser.INT_NAME);
                this.state = 171;
                this.match(CiscoIOSParser.INT_NUM);
                this.state = 175;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 172;
                                this.int_body();
                            }
                        }
                    }
                    this.state = 177;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
                }
                this.state = 179;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 178;
                            this.match(CiscoIOSParser.EXIT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    int_body() {
        let localctx = new Int_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, CiscoIOSParser.RULE_int_body);
        let _la;
        try {
            this.state = 195;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 181;
                        this.match(CiscoIOSParser.NEWLINE);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 182;
                        this.match(CiscoIOSParser.NO);
                        this.state = 183;
                        this.match(CiscoIOSParser.SHUT);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 184;
                        this.match(CiscoIOSParser.SHUT);
                    }
                    break;
                case 43:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 185;
                        this.match(CiscoIOSParser.IP);
                        this.state = 186;
                        this.match(CiscoIOSParser.ADDR);
                        this.state = 187;
                        this.match(CiscoIOSParser.IP_ADDR);
                        this.state = 188;
                        this.match(CiscoIOSParser.IP_ADDR);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 189;
                        this.match(CiscoIOSParser.DESCRIPTION);
                        this.state = 191;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 190;
                                    this.match(CiscoIOSParser.STR);
                                }
                            }
                            this.state = 193;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === 44);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    rip_stmt() {
        let localctx = new Rip_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, CiscoIOSParser.RULE_rip_stmt);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 197;
                this.match(CiscoIOSParser.ROUTER);
                this.state = 198;
                this.match(CiscoIOSParser.RIP);
                this.state = 202;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 199;
                                this.rip_body();
                            }
                        }
                    }
                    this.state = 204;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                }
                this.state = 206;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
                    case 1:
                        {
                            this.state = 205;
                            this.match(CiscoIOSParser.EXIT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    rip_body() {
        let localctx = new Rip_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, CiscoIOSParser.RULE_rip_body);
        try {
            this.state = 217;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 208;
                        this.match(CiscoIOSParser.NEWLINE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 209;
                        this.match(CiscoIOSParser.ROUTER);
                        this.state = 210;
                        this.match(CiscoIOSParser.RIP);
                    }
                    break;
                case 34:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 211;
                        this.match(CiscoIOSParser.VERSION);
                        this.state = 212;
                        this.match(CiscoIOSParser.INT);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 213;
                        this.match(CiscoIOSParser.NO);
                        this.state = 214;
                        this.match(CiscoIOSParser.AUTO_SUMMARY);
                    }
                    break;
                case 42:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 215;
                        this.match(CiscoIOSParser.NETWORK);
                        this.state = 216;
                        this.match(CiscoIOSParser.IP_ADDR);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    dhcp_stmt() {
        let localctx = new Dhcp_stmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, CiscoIOSParser.RULE_dhcp_stmt);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 219;
                this.match(CiscoIOSParser.IP);
                this.state = 220;
                this.match(CiscoIOSParser.DHCP);
                this.state = 221;
                this.match(CiscoIOSParser.POOL);
                this.state = 222;
                this.match(CiscoIOSParser.STR);
                this.state = 226;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 223;
                                this.dhcp_body();
                            }
                        }
                    }
                    this.state = 228;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
                }
                this.state = 230;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 229;
                            this.match(CiscoIOSParser.EXIT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    dhcp_body() {
        let localctx = new Dhcp_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, CiscoIOSParser.RULE_dhcp_body);
        try {
            this.state = 236;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 232;
                        this.match(CiscoIOSParser.NEWLINE);
                    }
                    break;
                case 42:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 233;
                        this.match(CiscoIOSParser.NETWORK);
                        this.state = 234;
                        this.match(CiscoIOSParser.IP_ADDR);
                        this.state = 235;
                        this.match(CiscoIOSParser.IP_ADDR);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    static _serializedATN = [4, 1, 48, 239, 2, 0, 7, 0, 2,
        1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
        10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17,
        7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 1, 0, 4, 0, 44, 8, 0, 11, 0, 12, 0, 45, 1, 0, 1, 0,
        1, 1, 1, 1, 3, 1, 52, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 58, 8, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1,
        6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 75, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1,
        8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 96, 8, 8, 1, 9, 1, 9, 1,
        9, 1, 9, 5, 9, 102, 8, 9, 10, 9, 12, 9, 105, 9, 9, 1, 9, 3, 9, 108, 8, 9, 1, 10, 1, 10, 1, 10, 1, 10,
        1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 118, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 125, 8, 11,
        10, 11, 12, 11, 128, 9, 11, 1, 11, 3, 11, 131, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1,
        12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 145, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 5, 13, 151,
        8, 13, 10, 13, 12, 13, 154, 9, 13, 1, 13, 3, 13, 157, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1,
        14, 1, 14, 1, 14, 1, 14, 3, 14, 168, 8, 14, 1, 15, 1, 15, 1, 15, 1, 15, 5, 15, 174, 8, 15, 10, 15,
        12, 15, 177, 9, 15, 1, 15, 3, 15, 180, 8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1,
        16, 1, 16, 1, 16, 4, 16, 192, 8, 16, 11, 16, 12, 16, 193, 3, 16, 196, 8, 16, 1, 17, 1, 17, 1, 17,
        5, 17, 201, 8, 17, 10, 17, 12, 17, 204, 9, 17, 1, 17, 3, 17, 207, 8, 17, 1, 18, 1, 18, 1, 18, 1,
        18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 218, 8, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 5, 19,
        225, 8, 19, 10, 19, 12, 19, 228, 9, 19, 1, 19, 3, 19, 231, 8, 19, 1, 20, 1, 20, 1, 20, 1, 20, 3,
        20, 237, 8, 20, 1, 20, 0, 0, 21, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
        36, 38, 40, 0, 0, 265, 0, 43, 1, 0, 0, 0, 2, 51, 1, 0, 0, 0, 4, 57, 1, 0, 0, 0, 6, 59, 1, 0, 0, 0, 8,
        61, 1, 0, 0, 0, 10, 63, 1, 0, 0, 0, 12, 65, 1, 0, 0, 0, 14, 74, 1, 0, 0, 0, 16, 95, 1, 0, 0, 0, 18, 97,
        1, 0, 0, 0, 20, 117, 1, 0, 0, 0, 22, 119, 1, 0, 0, 0, 24, 144, 1, 0, 0, 0, 26, 146, 1, 0, 0, 0, 28,
        167, 1, 0, 0, 0, 30, 169, 1, 0, 0, 0, 32, 195, 1, 0, 0, 0, 34, 197, 1, 0, 0, 0, 36, 217, 1, 0, 0, 0,
        38, 219, 1, 0, 0, 0, 40, 236, 1, 0, 0, 0, 42, 44, 3, 2, 1, 0, 43, 42, 1, 0, 0, 0, 44, 45, 1, 0, 0, 0,
        45, 43, 1, 0, 0, 0, 45, 46, 1, 0, 0, 0, 46, 47, 1, 0, 0, 0, 47, 48, 5, 0, 0, 1, 48, 1, 1, 0, 0, 0, 49,
        52, 5, 46, 0, 0, 50, 52, 3, 4, 2, 0, 51, 49, 1, 0, 0, 0, 51, 50, 1, 0, 0, 0, 52, 3, 1, 0, 0, 0, 53, 58,
        3, 6, 3, 0, 54, 58, 3, 10, 5, 0, 55, 58, 3, 14, 7, 0, 56, 58, 5, 5, 0, 0, 57, 53, 1, 0, 0, 0, 57, 54,
        1, 0, 0, 0, 57, 55, 1, 0, 0, 0, 57, 56, 1, 0, 0, 0, 58, 5, 1, 0, 0, 0, 59, 60, 3, 8, 4, 0, 60, 7, 1, 0,
        0, 0, 61, 62, 5, 1, 0, 0, 62, 9, 1, 0, 0, 0, 63, 64, 3, 12, 6, 0, 64, 11, 1, 0, 0, 0, 65, 66, 5, 2, 0,
        0, 66, 13, 1, 0, 0, 0, 67, 75, 3, 26, 13, 0, 68, 75, 3, 30, 15, 0, 69, 75, 3, 34, 17, 0, 70, 75, 3,
        16, 8, 0, 71, 75, 3, 18, 9, 0, 72, 75, 3, 22, 11, 0, 73, 75, 3, 38, 19, 0, 74, 67, 1, 0, 0, 0, 74,
        68, 1, 0, 0, 0, 74, 69, 1, 0, 0, 0, 74, 70, 1, 0, 0, 0, 74, 71, 1, 0, 0, 0, 74, 72, 1, 0, 0, 0, 74, 73,
        1, 0, 0, 0, 75, 15, 1, 0, 0, 0, 76, 77, 5, 10, 0, 0, 77, 96, 5, 44, 0, 0, 78, 79, 5, 11, 0, 0, 79, 80,
        5, 12, 0, 0, 80, 96, 5, 45, 0, 0, 81, 82, 5, 16, 0, 0, 82, 96, 5, 44, 0, 0, 83, 84, 5, 43, 0, 0, 84,
        85, 5, 13, 0, 0, 85, 86, 5, 14, 0, 0, 86, 96, 5, 41, 0, 0, 87, 88, 5, 6, 0, 0, 88, 89, 5, 43, 0, 0,
        89, 90, 5, 13, 0, 0, 90, 96, 5, 14, 0, 0, 91, 92, 5, 43, 0, 0, 92, 93, 5, 15, 0, 0, 93, 94, 5, 34,
        0, 0, 94, 96, 5, 38, 0, 0, 95, 76, 1, 0, 0, 0, 95, 78, 1, 0, 0, 0, 95, 81, 1, 0, 0, 0, 95, 83, 1, 0,
        0, 0, 95, 87, 1, 0, 0, 0, 95, 91, 1, 0, 0, 0, 96, 17, 1, 0, 0, 0, 97, 98, 5, 17, 0, 0, 98, 99, 5, 19,
        0, 0, 99, 103, 5, 38, 0, 0, 100, 102, 3, 20, 10, 0, 101, 100, 1, 0, 0, 0, 102, 105, 1, 0, 0, 0, 103,
        101, 1, 0, 0, 0, 103, 104, 1, 0, 0, 0, 104, 107, 1, 0, 0, 0, 105, 103, 1, 0, 0, 0, 106, 108, 5, 5,
        0, 0, 107, 106, 1, 0, 0, 0, 107, 108, 1, 0, 0, 0, 108, 19, 1, 0, 0, 0, 109, 118, 5, 46, 0, 0, 110,
        111, 5, 20, 0, 0, 111, 118, 5, 21, 0, 0, 112, 113, 5, 22, 0, 0, 113, 118, 5, 23, 0, 0, 114, 115,
        5, 24, 0, 0, 115, 116, 5, 38, 0, 0, 116, 118, 5, 38, 0, 0, 117, 109, 1, 0, 0, 0, 117, 110, 1, 0,
        0, 0, 117, 112, 1, 0, 0, 0, 117, 114, 1, 0, 0, 0, 118, 21, 1, 0, 0, 0, 119, 120, 5, 17, 0, 0, 120,
        121, 5, 18, 0, 0, 121, 122, 5, 38, 0, 0, 122, 126, 5, 38, 0, 0, 123, 125, 3, 24, 12, 0, 124, 123,
        1, 0, 0, 0, 125, 128, 1, 0, 0, 0, 126, 124, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 130, 1, 0, 0, 0,
        128, 126, 1, 0, 0, 0, 129, 131, 5, 5, 0, 0, 130, 129, 1, 0, 0, 0, 130, 131, 1, 0, 0, 0, 131, 23,
        1, 0, 0, 0, 132, 145, 5, 46, 0, 0, 133, 134, 5, 20, 0, 0, 134, 145, 5, 21, 0, 0, 135, 136, 5, 22,
        0, 0, 136, 145, 5, 23, 0, 0, 137, 138, 5, 24, 0, 0, 138, 139, 5, 38, 0, 0, 139, 145, 5, 38, 0, 0,
        140, 141, 5, 25, 0, 0, 141, 142, 5, 26, 0, 0, 142, 143, 5, 15, 0, 0, 143, 145, 5, 27, 0, 0, 144,
        132, 1, 0, 0, 0, 144, 133, 1, 0, 0, 0, 144, 135, 1, 0, 0, 0, 144, 137, 1, 0, 0, 0, 144, 140, 1, 0,
        0, 0, 145, 25, 1, 0, 0, 0, 146, 147, 5, 3, 0, 0, 147, 148, 5, 4, 0, 0, 148, 152, 5, 38, 0, 0, 149,
        151, 3, 28, 14, 0, 150, 149, 1, 0, 0, 0, 151, 154, 1, 0, 0, 0, 152, 150, 1, 0, 0, 0, 152, 153, 1,
        0, 0, 0, 153, 156, 1, 0, 0, 0, 154, 152, 1, 0, 0, 0, 155, 157, 5, 5, 0, 0, 156, 155, 1, 0, 0, 0, 156,
        157, 1, 0, 0, 0, 157, 27, 1, 0, 0, 0, 158, 168, 5, 46, 0, 0, 159, 160, 5, 42, 0, 0, 160, 161, 5,
        39, 0, 0, 161, 168, 5, 39, 0, 0, 162, 163, 5, 28, 0, 0, 163, 164, 5, 8, 0, 0, 164, 168, 5, 9, 0,
        0, 165, 166, 5, 29, 0, 0, 166, 168, 5, 39, 0, 0, 167, 158, 1, 0, 0, 0, 167, 159, 1, 0, 0, 0, 167,
        162, 1, 0, 0, 0, 167, 165, 1, 0, 0, 0, 168, 29, 1, 0, 0, 0, 169, 170, 5, 7, 0, 0, 170, 171, 5, 8,
        0, 0, 171, 175, 5, 9, 0, 0, 172, 174, 3, 32, 16, 0, 173, 172, 1, 0, 0, 0, 174, 177, 1, 0, 0, 0, 175,
        173, 1, 0, 0, 0, 175, 176, 1, 0, 0, 0, 176, 179, 1, 0, 0, 0, 177, 175, 1, 0, 0, 0, 178, 180, 5, 5,
        0, 0, 179, 178, 1, 0, 0, 0, 179, 180, 1, 0, 0, 0, 180, 31, 1, 0, 0, 0, 181, 196, 5, 46, 0, 0, 182,
        183, 5, 6, 0, 0, 183, 196, 5, 31, 0, 0, 184, 196, 5, 31, 0, 0, 185, 186, 5, 43, 0, 0, 186, 187,
        5, 32, 0, 0, 187, 188, 5, 39, 0, 0, 188, 196, 5, 39, 0, 0, 189, 191, 5, 30, 0, 0, 190, 192, 5, 44,
        0, 0, 191, 190, 1, 0, 0, 0, 192, 193, 1, 0, 0, 0, 193, 191, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194,
        196, 1, 0, 0, 0, 195, 181, 1, 0, 0, 0, 195, 182, 1, 0, 0, 0, 195, 184, 1, 0, 0, 0, 195, 185, 1, 0,
        0, 0, 195, 189, 1, 0, 0, 0, 196, 33, 1, 0, 0, 0, 197, 198, 5, 3, 0, 0, 198, 202, 5, 33, 0, 0, 199,
        201, 3, 36, 18, 0, 200, 199, 1, 0, 0, 0, 201, 204, 1, 0, 0, 0, 202, 200, 1, 0, 0, 0, 202, 203, 1,
        0, 0, 0, 203, 206, 1, 0, 0, 0, 204, 202, 1, 0, 0, 0, 205, 207, 5, 5, 0, 0, 206, 205, 1, 0, 0, 0, 206,
        207, 1, 0, 0, 0, 207, 35, 1, 0, 0, 0, 208, 218, 5, 46, 0, 0, 209, 210, 5, 3, 0, 0, 210, 218, 5, 33,
        0, 0, 211, 212, 5, 34, 0, 0, 212, 218, 5, 38, 0, 0, 213, 214, 5, 6, 0, 0, 214, 218, 5, 35, 0, 0,
        215, 216, 5, 42, 0, 0, 216, 218, 5, 39, 0, 0, 217, 208, 1, 0, 0, 0, 217, 209, 1, 0, 0, 0, 217, 211,
        1, 0, 0, 0, 217, 213, 1, 0, 0, 0, 217, 215, 1, 0, 0, 0, 218, 37, 1, 0, 0, 0, 219, 220, 5, 43, 0, 0,
        220, 221, 5, 36, 0, 0, 221, 222, 5, 37, 0, 0, 222, 226, 5, 44, 0, 0, 223, 225, 3, 40, 20, 0, 224,
        223, 1, 0, 0, 0, 225, 228, 1, 0, 0, 0, 226, 224, 1, 0, 0, 0, 226, 227, 1, 0, 0, 0, 227, 230, 1, 0,
        0, 0, 228, 226, 1, 0, 0, 0, 229, 231, 5, 5, 0, 0, 230, 229, 1, 0, 0, 0, 230, 231, 1, 0, 0, 0, 231,
        39, 1, 0, 0, 0, 232, 237, 5, 46, 0, 0, 233, 234, 5, 42, 0, 0, 234, 235, 5, 39, 0, 0, 235, 237, 5,
        39, 0, 0, 236, 232, 1, 0, 0, 0, 236, 233, 1, 0, 0, 0, 237, 41, 1, 0, 0, 0, 24, 45, 51, 57, 74, 95,
        103, 107, 117, 126, 130, 144, 152, 156, 167, 175, 179, 193, 195, 202, 206, 217, 226, 230,
        236];
    static __ATN;
    static get _ATN() {
        if (!CiscoIOSParser.__ATN) {
            CiscoIOSParser.__ATN = new antlr4_1.ATNDeserializer().deserialize(CiscoIOSParser._serializedATN);
        }
        return CiscoIOSParser.__ATN;
    }
    static DecisionsToDFA = CiscoIOSParser._ATN.decisionToState.map((ds, index) => new antlr4_1.DFA(ds, index));
}
exports.default = CiscoIOSParser;
class ConfigContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EOF() {
        return this.getToken(CiscoIOSParser.EOF, 0);
    }
    line_list() {
        return this.getTypedRuleContexts(LineContext);
    }
    line(i) {
        return this.getTypedRuleContext(LineContext, i);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_config;
    }
    enterRule(listener) {
        if (listener.enterConfig) {
            listener.enterConfig(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConfig) {
            listener.exitConfig(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConfig) {
            return visitor.visitConfig(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConfigContext = ConfigContext;
class LineContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NEWLINE() {
        return this.getToken(CiscoIOSParser.NEWLINE, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_line;
    }
    enterRule(listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LineContext = LineContext;
class StatementContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    exec_stmt() {
        return this.getTypedRuleContext(Exec_stmtContext, 0);
    }
    priv_stmt() {
        return this.getTypedRuleContext(Priv_stmtContext, 0);
    }
    global_stmt() {
        return this.getTypedRuleContext(Global_stmtContext, 0);
    }
    EXIT() {
        return this.getToken(CiscoIOSParser.EXIT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_statement;
    }
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class Exec_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    enable_stmt() {
        return this.getTypedRuleContext(Enable_stmtContext, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_exec_stmt;
    }
    enterRule(listener) {
        if (listener.enterExec_stmt) {
            listener.enterExec_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExec_stmt) {
            listener.exitExec_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExec_stmt) {
            return visitor.visitExec_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Exec_stmtContext = Exec_stmtContext;
class Enable_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ENABLE() {
        return this.getToken(CiscoIOSParser.ENABLE, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_enable_stmt;
    }
    enterRule(listener) {
        if (listener.enterEnable_stmt) {
            listener.enterEnable_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnable_stmt) {
            listener.exitEnable_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnable_stmt) {
            return visitor.visitEnable_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Enable_stmtContext = Enable_stmtContext;
class Priv_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    conft_stmt() {
        return this.getTypedRuleContext(Conft_stmtContext, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_priv_stmt;
    }
    enterRule(listener) {
        if (listener.enterPriv_stmt) {
            listener.enterPriv_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPriv_stmt) {
            listener.exitPriv_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPriv_stmt) {
            return visitor.visitPriv_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Priv_stmtContext = Priv_stmtContext;
class Conft_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    CONFT() {
        return this.getToken(CiscoIOSParser.CONFT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_conft_stmt;
    }
    enterRule(listener) {
        if (listener.enterConft_stmt) {
            listener.enterConft_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConft_stmt) {
            listener.exitConft_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConft_stmt) {
            return visitor.visitConft_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Conft_stmtContext = Conft_stmtContext;
class Global_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ospf_stmt() {
        return this.getTypedRuleContext(Ospf_stmtContext, 0);
    }
    int_stmt() {
        return this.getTypedRuleContext(Int_stmtContext, 0);
    }
    rip_stmt() {
        return this.getTypedRuleContext(Rip_stmtContext, 0);
    }
    grundkonfig_stmt() {
        return this.getTypedRuleContext(Grundkonfig_stmtContext, 0);
    }
    linecon_stmt() {
        return this.getTypedRuleContext(Linecon_stmtContext, 0);
    }
    linevty_stmt() {
        return this.getTypedRuleContext(Linevty_stmtContext, 0);
    }
    dhcp_stmt() {
        return this.getTypedRuleContext(Dhcp_stmtContext, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_global_stmt;
    }
    enterRule(listener) {
        if (listener.enterGlobal_stmt) {
            listener.enterGlobal_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGlobal_stmt) {
            listener.exitGlobal_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobal_stmt) {
            return visitor.visitGlobal_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Global_stmtContext = Global_stmtContext;
class Grundkonfig_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    HOSTNAME() {
        return this.getToken(CiscoIOSParser.HOSTNAME, 0);
    }
    STR() {
        return this.getToken(CiscoIOSParser.STR, 0);
    }
    BANNER() {
        return this.getToken(CiscoIOSParser.BANNER, 0);
    }
    MOTD() {
        return this.getToken(CiscoIOSParser.MOTD, 0);
    }
    BANNER_TEXT() {
        return this.getToken(CiscoIOSParser.BANNER_TEXT, 0);
    }
    USERNAME() {
        return this.getToken(CiscoIOSParser.USERNAME, 0);
    }
    IP() {
        return this.getToken(CiscoIOSParser.IP, 0);
    }
    DOMAIN() {
        return this.getToken(CiscoIOSParser.DOMAIN, 0);
    }
    NAME() {
        return this.getToken(CiscoIOSParser.NAME, 0);
    }
    DOMAIN_NAME() {
        return this.getToken(CiscoIOSParser.DOMAIN_NAME, 0);
    }
    NO() {
        return this.getToken(CiscoIOSParser.NO, 0);
    }
    SSH() {
        return this.getToken(CiscoIOSParser.SSH, 0);
    }
    VERSION() {
        return this.getToken(CiscoIOSParser.VERSION, 0);
    }
    INT() {
        return this.getToken(CiscoIOSParser.INT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_grundkonfig_stmt;
    }
    enterRule(listener) {
        if (listener.enterGrundkonfig_stmt) {
            listener.enterGrundkonfig_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGrundkonfig_stmt) {
            listener.exitGrundkonfig_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGrundkonfig_stmt) {
            return visitor.visitGrundkonfig_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Grundkonfig_stmtContext = Grundkonfig_stmtContext;
class Linecon_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LINE() {
        return this.getToken(CiscoIOSParser.LINE, 0);
    }
    CON() {
        return this.getToken(CiscoIOSParser.CON, 0);
    }
    INT() {
        return this.getToken(CiscoIOSParser.INT, 0);
    }
    linecon_body_list() {
        return this.getTypedRuleContexts(Linecon_bodyContext);
    }
    linecon_body(i) {
        return this.getTypedRuleContext(Linecon_bodyContext, i);
    }
    EXIT() {
        return this.getToken(CiscoIOSParser.EXIT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_linecon_stmt;
    }
    enterRule(listener) {
        if (listener.enterLinecon_stmt) {
            listener.enterLinecon_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLinecon_stmt) {
            listener.exitLinecon_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLinecon_stmt) {
            return visitor.visitLinecon_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Linecon_stmtContext = Linecon_stmtContext;
class Linecon_bodyContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NEWLINE() {
        return this.getToken(CiscoIOSParser.NEWLINE, 0);
    }
    LOGIN() {
        return this.getToken(CiscoIOSParser.LOGIN, 0);
    }
    LOCAL() {
        return this.getToken(CiscoIOSParser.LOCAL, 0);
    }
    LOGGING() {
        return this.getToken(CiscoIOSParser.LOGGING, 0);
    }
    SYNCHRONUS() {
        return this.getToken(CiscoIOSParser.SYNCHRONUS, 0);
    }
    EXEC_TIMEOUT() {
        return this.getToken(CiscoIOSParser.EXEC_TIMEOUT, 0);
    }
    INT_list() {
        return this.getTokens(CiscoIOSParser.INT);
    }
    INT(i) {
        return this.getToken(CiscoIOSParser.INT, i);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_linecon_body;
    }
    enterRule(listener) {
        if (listener.enterLinecon_body) {
            listener.enterLinecon_body(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLinecon_body) {
            listener.exitLinecon_body(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLinecon_body) {
            return visitor.visitLinecon_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Linecon_bodyContext = Linecon_bodyContext;
class Linevty_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LINE() {
        return this.getToken(CiscoIOSParser.LINE, 0);
    }
    VTY() {
        return this.getToken(CiscoIOSParser.VTY, 0);
    }
    INT_list() {
        return this.getTokens(CiscoIOSParser.INT);
    }
    INT(i) {
        return this.getToken(CiscoIOSParser.INT, i);
    }
    linevty_body_list() {
        return this.getTypedRuleContexts(Linevty_bodyContext);
    }
    linevty_body(i) {
        return this.getTypedRuleContext(Linevty_bodyContext, i);
    }
    EXIT() {
        return this.getToken(CiscoIOSParser.EXIT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_linevty_stmt;
    }
    enterRule(listener) {
        if (listener.enterLinevty_stmt) {
            listener.enterLinevty_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLinevty_stmt) {
            listener.exitLinevty_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLinevty_stmt) {
            return visitor.visitLinevty_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Linevty_stmtContext = Linevty_stmtContext;
class Linevty_bodyContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NEWLINE() {
        return this.getToken(CiscoIOSParser.NEWLINE, 0);
    }
    LOGIN() {
        return this.getToken(CiscoIOSParser.LOGIN, 0);
    }
    LOCAL() {
        return this.getToken(CiscoIOSParser.LOCAL, 0);
    }
    LOGGING() {
        return this.getToken(CiscoIOSParser.LOGGING, 0);
    }
    SYNCHRONUS() {
        return this.getToken(CiscoIOSParser.SYNCHRONUS, 0);
    }
    EXEC_TIMEOUT() {
        return this.getToken(CiscoIOSParser.EXEC_TIMEOUT, 0);
    }
    INT_list() {
        return this.getTokens(CiscoIOSParser.INT);
    }
    INT(i) {
        return this.getToken(CiscoIOSParser.INT, i);
    }
    TRANSPORT() {
        return this.getToken(CiscoIOSParser.TRANSPORT, 0);
    }
    INPUT() {
        return this.getToken(CiscoIOSParser.INPUT, 0);
    }
    SSH() {
        return this.getToken(CiscoIOSParser.SSH, 0);
    }
    TELNET() {
        return this.getToken(CiscoIOSParser.TELNET, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_linevty_body;
    }
    enterRule(listener) {
        if (listener.enterLinevty_body) {
            listener.enterLinevty_body(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLinevty_body) {
            listener.exitLinevty_body(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLinevty_body) {
            return visitor.visitLinevty_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Linevty_bodyContext = Linevty_bodyContext;
class Ospf_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ROUTER() {
        return this.getToken(CiscoIOSParser.ROUTER, 0);
    }
    OSPF() {
        return this.getToken(CiscoIOSParser.OSPF, 0);
    }
    INT() {
        return this.getToken(CiscoIOSParser.INT, 0);
    }
    ospf_body_list() {
        return this.getTypedRuleContexts(Ospf_bodyContext);
    }
    ospf_body(i) {
        return this.getTypedRuleContext(Ospf_bodyContext, i);
    }
    EXIT() {
        return this.getToken(CiscoIOSParser.EXIT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_ospf_stmt;
    }
    enterRule(listener) {
        if (listener.enterOspf_stmt) {
            listener.enterOspf_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOspf_stmt) {
            listener.exitOspf_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOspf_stmt) {
            return visitor.visitOspf_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Ospf_stmtContext = Ospf_stmtContext;
class Ospf_bodyContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NEWLINE() {
        return this.getToken(CiscoIOSParser.NEWLINE, 0);
    }
    NETWORK() {
        return this.getToken(CiscoIOSParser.NETWORK, 0);
    }
    IP_ADDR_list() {
        return this.getTokens(CiscoIOSParser.IP_ADDR);
    }
    IP_ADDR(i) {
        return this.getToken(CiscoIOSParser.IP_ADDR, i);
    }
    PASSIVE_INTERFACE() {
        return this.getToken(CiscoIOSParser.PASSIVE_INTERFACE, 0);
    }
    INT_NAME() {
        return this.getToken(CiscoIOSParser.INT_NAME, 0);
    }
    INT_NUM() {
        return this.getToken(CiscoIOSParser.INT_NUM, 0);
    }
    ROUTER_ID() {
        return this.getToken(CiscoIOSParser.ROUTER_ID, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_ospf_body;
    }
    enterRule(listener) {
        if (listener.enterOspf_body) {
            listener.enterOspf_body(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOspf_body) {
            listener.exitOspf_body(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOspf_body) {
            return visitor.visitOspf_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Ospf_bodyContext = Ospf_bodyContext;
class Int_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    INTERFACE() {
        return this.getToken(CiscoIOSParser.INTERFACE, 0);
    }
    INT_NAME() {
        return this.getToken(CiscoIOSParser.INT_NAME, 0);
    }
    INT_NUM() {
        return this.getToken(CiscoIOSParser.INT_NUM, 0);
    }
    int_body_list() {
        return this.getTypedRuleContexts(Int_bodyContext);
    }
    int_body(i) {
        return this.getTypedRuleContext(Int_bodyContext, i);
    }
    EXIT() {
        return this.getToken(CiscoIOSParser.EXIT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_int_stmt;
    }
    enterRule(listener) {
        if (listener.enterInt_stmt) {
            listener.enterInt_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInt_stmt) {
            listener.exitInt_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInt_stmt) {
            return visitor.visitInt_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Int_stmtContext = Int_stmtContext;
class Int_bodyContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NEWLINE() {
        return this.getToken(CiscoIOSParser.NEWLINE, 0);
    }
    NO() {
        return this.getToken(CiscoIOSParser.NO, 0);
    }
    SHUT() {
        return this.getToken(CiscoIOSParser.SHUT, 0);
    }
    IP() {
        return this.getToken(CiscoIOSParser.IP, 0);
    }
    ADDR() {
        return this.getToken(CiscoIOSParser.ADDR, 0);
    }
    IP_ADDR_list() {
        return this.getTokens(CiscoIOSParser.IP_ADDR);
    }
    IP_ADDR(i) {
        return this.getToken(CiscoIOSParser.IP_ADDR, i);
    }
    DESCRIPTION() {
        return this.getToken(CiscoIOSParser.DESCRIPTION, 0);
    }
    STR_list() {
        return this.getTokens(CiscoIOSParser.STR);
    }
    STR(i) {
        return this.getToken(CiscoIOSParser.STR, i);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_int_body;
    }
    enterRule(listener) {
        if (listener.enterInt_body) {
            listener.enterInt_body(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInt_body) {
            listener.exitInt_body(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInt_body) {
            return visitor.visitInt_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Int_bodyContext = Int_bodyContext;
class Rip_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ROUTER() {
        return this.getToken(CiscoIOSParser.ROUTER, 0);
    }
    RIP() {
        return this.getToken(CiscoIOSParser.RIP, 0);
    }
    rip_body_list() {
        return this.getTypedRuleContexts(Rip_bodyContext);
    }
    rip_body(i) {
        return this.getTypedRuleContext(Rip_bodyContext, i);
    }
    EXIT() {
        return this.getToken(CiscoIOSParser.EXIT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_rip_stmt;
    }
    enterRule(listener) {
        if (listener.enterRip_stmt) {
            listener.enterRip_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRip_stmt) {
            listener.exitRip_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRip_stmt) {
            return visitor.visitRip_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rip_stmtContext = Rip_stmtContext;
class Rip_bodyContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NEWLINE() {
        return this.getToken(CiscoIOSParser.NEWLINE, 0);
    }
    ROUTER() {
        return this.getToken(CiscoIOSParser.ROUTER, 0);
    }
    RIP() {
        return this.getToken(CiscoIOSParser.RIP, 0);
    }
    VERSION() {
        return this.getToken(CiscoIOSParser.VERSION, 0);
    }
    INT() {
        return this.getToken(CiscoIOSParser.INT, 0);
    }
    NO() {
        return this.getToken(CiscoIOSParser.NO, 0);
    }
    AUTO_SUMMARY() {
        return this.getToken(CiscoIOSParser.AUTO_SUMMARY, 0);
    }
    NETWORK() {
        return this.getToken(CiscoIOSParser.NETWORK, 0);
    }
    IP_ADDR() {
        return this.getToken(CiscoIOSParser.IP_ADDR, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_rip_body;
    }
    enterRule(listener) {
        if (listener.enterRip_body) {
            listener.enterRip_body(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRip_body) {
            listener.exitRip_body(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRip_body) {
            return visitor.visitRip_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rip_bodyContext = Rip_bodyContext;
class Dhcp_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IP() {
        return this.getToken(CiscoIOSParser.IP, 0);
    }
    DHCP() {
        return this.getToken(CiscoIOSParser.DHCP, 0);
    }
    POOL() {
        return this.getToken(CiscoIOSParser.POOL, 0);
    }
    STR() {
        return this.getToken(CiscoIOSParser.STR, 0);
    }
    dhcp_body_list() {
        return this.getTypedRuleContexts(Dhcp_bodyContext);
    }
    dhcp_body(i) {
        return this.getTypedRuleContext(Dhcp_bodyContext, i);
    }
    EXIT() {
        return this.getToken(CiscoIOSParser.EXIT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_dhcp_stmt;
    }
    enterRule(listener) {
        if (listener.enterDhcp_stmt) {
            listener.enterDhcp_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDhcp_stmt) {
            listener.exitDhcp_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDhcp_stmt) {
            return visitor.visitDhcp_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Dhcp_stmtContext = Dhcp_stmtContext;
class Dhcp_bodyContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NEWLINE() {
        return this.getToken(CiscoIOSParser.NEWLINE, 0);
    }
    NETWORK() {
        return this.getToken(CiscoIOSParser.NETWORK, 0);
    }
    IP_ADDR_list() {
        return this.getTokens(CiscoIOSParser.IP_ADDR);
    }
    IP_ADDR(i) {
        return this.getToken(CiscoIOSParser.IP_ADDR, i);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_dhcp_body;
    }
    enterRule(listener) {
        if (listener.enterDhcp_body) {
            listener.enterDhcp_body(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDhcp_body) {
            listener.exitDhcp_body(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDhcp_body) {
            return visitor.visitDhcp_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Dhcp_bodyContext = Dhcp_bodyContext;
//# sourceMappingURL=CiscoIOSParser.js.map