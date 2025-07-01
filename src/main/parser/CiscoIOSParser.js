"use strict";
// Generated from ./src/antlr/CiscoIOS.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network_stmtContext = exports.Router_stmtContext = exports.No_stmtContext = exports.Ip_stmtContext = exports.Interface_stmtContext = exports.StatementContext = exports.ConfigContext = void 0;
const antlr4_1 = require("antlr4");
class CiscoIOSParser extends antlr4_1.Parser {
    static T__0 = 1;
    static T__1 = 2;
    static T__2 = 3;
    static T__3 = 4;
    static T__4 = 5;
    static T__5 = 6;
    static T__6 = 7;
    static T__7 = 8;
    static T__8 = 9;
    static ID = 10;
    static IPADDR = 11;
    static INT = 12;
    static WS = 13;
    static EOF = antlr4_1.Token.EOF;
    static RULE_config = 0;
    static RULE_statement = 1;
    static RULE_interface_stmt = 2;
    static RULE_ip_stmt = 3;
    static RULE_no_stmt = 4;
    static RULE_router_stmt = 5;
    static RULE_network_stmt = 6;
    static literalNames = [null, "'interface'",
        "'ip'", "'address'",
        "'no'", "'shutdown'",
        "'router'",
        "'ospf'", "'network'",
        "'area'"];
    static symbolicNames = [null, null,
        null, null,
        null, null,
        null, null,
        null, null,
        "ID", "IPADDR",
        "INT", "WS"];
    // tslint:disable:no-trailing-whitespace
    static ruleNames = [
        "config", "statement", "interface_stmt", "ip_stmt", "no_stmt", "router_stmt",
        "network_stmt",
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
    interface_stmt() {
        let localctx = new Interface_stmtContext(this, this._ctx, this.state);
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
    ip_stmt() {
        let localctx = new Ip_stmtContext(this, this._ctx, this.state);
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
    no_stmt() {
        let localctx = new No_stmtContext(this, this._ctx, this.state);
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
    router_stmt() {
        let localctx = new Router_stmtContext(this, this._ctx, this.state);
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
    network_stmt() {
        let localctx = new Network_stmtContext(this, this._ctx, this.state);
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
    static _serializedATN = [4, 1, 13, 48, 2, 0, 7, 0, 2,
        1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 1, 0, 4, 0, 16, 8, 0, 11, 0, 12, 0,
        17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 25, 8, 1, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1,
        4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 0, 0, 7, 0, 2, 4, 6, 8, 10, 12,
        0, 0, 45, 0, 15, 1, 0, 0, 0, 2, 24, 1, 0, 0, 0, 4, 26, 1, 0, 0, 0, 6, 29, 1, 0, 0, 0, 8, 34, 1, 0, 0, 0,
        10, 37, 1, 0, 0, 0, 12, 41, 1, 0, 0, 0, 14, 16, 3, 2, 1, 0, 15, 14, 1, 0, 0, 0, 16, 17, 1, 0, 0, 0, 17,
        15, 1, 0, 0, 0, 17, 18, 1, 0, 0, 0, 18, 1, 1, 0, 0, 0, 19, 25, 3, 4, 2, 0, 20, 25, 3, 6, 3, 0, 21, 25,
        3, 8, 4, 0, 22, 25, 3, 10, 5, 0, 23, 25, 3, 12, 6, 0, 24, 19, 1, 0, 0, 0, 24, 20, 1, 0, 0, 0, 24, 21,
        1, 0, 0, 0, 24, 22, 1, 0, 0, 0, 24, 23, 1, 0, 0, 0, 25, 3, 1, 0, 0, 0, 26, 27, 5, 1, 0, 0, 27, 28, 5,
        10, 0, 0, 28, 5, 1, 0, 0, 0, 29, 30, 5, 2, 0, 0, 30, 31, 5, 3, 0, 0, 31, 32, 5, 11, 0, 0, 32, 33, 5,
        11, 0, 0, 33, 7, 1, 0, 0, 0, 34, 35, 5, 4, 0, 0, 35, 36, 5, 5, 0, 0, 36, 9, 1, 0, 0, 0, 37, 38, 5, 6,
        0, 0, 38, 39, 5, 7, 0, 0, 39, 40, 5, 12, 0, 0, 40, 11, 1, 0, 0, 0, 41, 42, 5, 8, 0, 0, 42, 43, 5, 11,
        0, 0, 43, 44, 5, 11, 0, 0, 44, 45, 5, 9, 0, 0, 45, 46, 5, 12, 0, 0, 46, 13, 1, 0, 0, 0, 2, 17, 24];
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
    statement_list() {
        return this.getTypedRuleContexts(StatementContext);
    }
    statement(i) {
        return this.getTypedRuleContext(StatementContext, i);
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
class StatementContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    interface_stmt() {
        return this.getTypedRuleContext(Interface_stmtContext, 0);
    }
    ip_stmt() {
        return this.getTypedRuleContext(Ip_stmtContext, 0);
    }
    no_stmt() {
        return this.getTypedRuleContext(No_stmtContext, 0);
    }
    router_stmt() {
        return this.getTypedRuleContext(Router_stmtContext, 0);
    }
    network_stmt() {
        return this.getTypedRuleContext(Network_stmtContext, 0);
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
class Interface_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID() {
        return this.getToken(CiscoIOSParser.ID, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_interface_stmt;
    }
    enterRule(listener) {
        if (listener.enterInterface_stmt) {
            listener.enterInterface_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterface_stmt) {
            listener.exitInterface_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterface_stmt) {
            return visitor.visitInterface_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Interface_stmtContext = Interface_stmtContext;
class Ip_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IPADDR_list() {
        return this.getTokens(CiscoIOSParser.IPADDR);
    }
    IPADDR(i) {
        return this.getToken(CiscoIOSParser.IPADDR, i);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_ip_stmt;
    }
    enterRule(listener) {
        if (listener.enterIp_stmt) {
            listener.enterIp_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIp_stmt) {
            listener.exitIp_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIp_stmt) {
            return visitor.visitIp_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Ip_stmtContext = Ip_stmtContext;
class No_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_no_stmt;
    }
    enterRule(listener) {
        if (listener.enterNo_stmt) {
            listener.enterNo_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNo_stmt) {
            listener.exitNo_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNo_stmt) {
            return visitor.visitNo_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.No_stmtContext = No_stmtContext;
class Router_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    INT() {
        return this.getToken(CiscoIOSParser.INT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_router_stmt;
    }
    enterRule(listener) {
        if (listener.enterRouter_stmt) {
            listener.enterRouter_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRouter_stmt) {
            listener.exitRouter_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRouter_stmt) {
            return visitor.visitRouter_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Router_stmtContext = Router_stmtContext;
class Network_stmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IPADDR_list() {
        return this.getTokens(CiscoIOSParser.IPADDR);
    }
    IPADDR(i) {
        return this.getToken(CiscoIOSParser.IPADDR, i);
    }
    INT() {
        return this.getToken(CiscoIOSParser.INT, 0);
    }
    get ruleIndex() {
        return CiscoIOSParser.RULE_network_stmt;
    }
    enterRule(listener) {
        if (listener.enterNetwork_stmt) {
            listener.enterNetwork_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNetwork_stmt) {
            listener.exitNetwork_stmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNetwork_stmt) {
            return visitor.visitNetwork_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Network_stmtContext = Network_stmtContext;
//# sourceMappingURL=CiscoIOSParser.js.map