// Generated from ./src/antlr/CiscoIOS.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ConfigContext } from "./CiscoIOSParser.js";
import { StatementContext } from "./CiscoIOSParser.js";
import { Interface_stmtContext } from "./CiscoIOSParser.js";
import { Ip_stmtContext } from "./CiscoIOSParser.js";
import { No_stmtContext } from "./CiscoIOSParser.js";
import { Router_stmtContext } from "./CiscoIOSParser.js";
import { Network_stmtContext } from "./CiscoIOSParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CiscoIOSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class CiscoIOSVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.config`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfig?: (ctx: ConfigContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.interface_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_stmt?: (ctx: Interface_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.ip_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIp_stmt?: (ctx: Ip_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.no_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNo_stmt?: (ctx: No_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.router_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRouter_stmt?: (ctx: Router_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.network_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNetwork_stmt?: (ctx: Network_stmtContext) => Result;
}

