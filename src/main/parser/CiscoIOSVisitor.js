"use strict";
// Generated from ./src/antlr/CiscoIOS.g4 by ANTLR 4.13.2
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
     * Visit a parse tree produced by `CiscoIOSParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.interface_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterface_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.ip_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIp_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.no_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNo_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.router_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRouter_stmt;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.network_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNetwork_stmt;
}
exports.default = CiscoIOSVisitor;
//# sourceMappingURL=CiscoIOSVisitor.js.map