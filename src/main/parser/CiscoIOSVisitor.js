"use strict";
// Generated from ./CiscoIOS.g4 by ANTLR 4.13.2
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CiscoIOSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
class CiscoIOSVisitor extends antlr4_1.ParseTreeVisitor {
    /**
     * Visit a parse tree produced by `CiscoIOSParser.config`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfig;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.line`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLine;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.exec_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExec_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.enable_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.priv_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPriv_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.conft_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConft_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.global_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlobal_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.grundkonfig_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrundkonfig_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.linecon_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLinecon_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.linecon_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLinecon_body;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.linevty_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLinevty_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.linevty_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLinevty_body;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.ospf_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOspf_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.ospf_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOspf_body;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.int_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInt_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.int_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInt_body;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.rip_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRip_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.rip_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRip_body;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.dhcp_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDhcp_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.dhcp_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDhcp_body;
}
exports.default = CiscoIOSVisitor;
//# sourceMappingURL=CiscoIOSVisitor.js.map