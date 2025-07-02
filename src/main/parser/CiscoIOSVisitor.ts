// Generated from ./CiscoIOS.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ConfigContext } from "./CiscoIOSParser.js";
import { LineContext } from "./CiscoIOSParser.js";
import { StatementContext } from "./CiscoIOSParser.js";
import { Exec_stmtContext } from "./CiscoIOSParser.js";
import { Enable_stmtContext } from "./CiscoIOSParser.js";
import { Priv_stmtContext } from "./CiscoIOSParser.js";
import { Conft_stmtContext } from "./CiscoIOSParser.js";
import { Global_stmtContext } from "./CiscoIOSParser.js";
import { Grundkonfig_stmtContext } from "./CiscoIOSParser.js";
import { Linecon_stmtContext } from "./CiscoIOSParser.js";
import { Linecon_bodyContext } from "./CiscoIOSParser.js";
import { Linevty_stmtContext } from "./CiscoIOSParser.js";
import { Linevty_bodyContext } from "./CiscoIOSParser.js";
import { Ospf_stmtContext } from "./CiscoIOSParser.js";
import { Ospf_bodyContext } from "./CiscoIOSParser.js";
import { Int_stmtContext } from "./CiscoIOSParser.js";
import { Int_bodyContext } from "./CiscoIOSParser.js";
import { Rip_stmtContext } from "./CiscoIOSParser.js";
import { Rip_bodyContext } from "./CiscoIOSParser.js";
import { Dhcp_stmtContext } from "./CiscoIOSParser.js";
import { Dhcp_bodyContext } from "./CiscoIOSParser.js";


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
	 * Visit a parse tree produced by `CiscoIOSParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.exec_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_stmt?: (ctx: Exec_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.enable_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnable_stmt?: (ctx: Enable_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.priv_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriv_stmt?: (ctx: Priv_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.conft_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConft_stmt?: (ctx: Conft_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.global_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_stmt?: (ctx: Global_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.grundkonfig_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrundkonfig_stmt?: (ctx: Grundkonfig_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.linecon_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinecon_stmt?: (ctx: Linecon_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.linecon_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinecon_body?: (ctx: Linecon_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.linevty_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinevty_stmt?: (ctx: Linevty_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.linevty_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinevty_body?: (ctx: Linevty_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.ospf_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOspf_stmt?: (ctx: Ospf_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.ospf_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOspf_body?: (ctx: Ospf_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.int_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_stmt?: (ctx: Int_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.int_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_body?: (ctx: Int_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.rip_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRip_stmt?: (ctx: Rip_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.rip_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRip_body?: (ctx: Rip_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.dhcp_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDhcp_stmt?: (ctx: Dhcp_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `CiscoIOSParser.dhcp_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDhcp_body?: (ctx: Dhcp_bodyContext) => Result;
}

