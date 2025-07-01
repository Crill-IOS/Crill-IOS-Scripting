// Generated from ./src/antlr/CiscoIOS.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ConfigContext } from "./CiscoIOSParser.js";
import { StatementContext } from "./CiscoIOSParser.js";
import { Interface_stmtContext } from "./CiscoIOSParser.js";
import { Ip_stmtContext } from "./CiscoIOSParser.js";
import { No_stmtContext } from "./CiscoIOSParser.js";
import { Router_stmtContext } from "./CiscoIOSParser.js";
import { Network_stmtContext } from "./CiscoIOSParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CiscoIOSParser`.
 */
export default class CiscoIOSListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.config`.
	 * @param ctx the parse tree
	 */
	enterConfig?: (ctx: ConfigContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.config`.
	 * @param ctx the parse tree
	 */
	exitConfig?: (ctx: ConfigContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.interface_stmt`.
	 * @param ctx the parse tree
	 */
	enterInterface_stmt?: (ctx: Interface_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.interface_stmt`.
	 * @param ctx the parse tree
	 */
	exitInterface_stmt?: (ctx: Interface_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.ip_stmt`.
	 * @param ctx the parse tree
	 */
	enterIp_stmt?: (ctx: Ip_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.ip_stmt`.
	 * @param ctx the parse tree
	 */
	exitIp_stmt?: (ctx: Ip_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.no_stmt`.
	 * @param ctx the parse tree
	 */
	enterNo_stmt?: (ctx: No_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.no_stmt`.
	 * @param ctx the parse tree
	 */
	exitNo_stmt?: (ctx: No_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.router_stmt`.
	 * @param ctx the parse tree
	 */
	enterRouter_stmt?: (ctx: Router_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.router_stmt`.
	 * @param ctx the parse tree
	 */
	exitRouter_stmt?: (ctx: Router_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.network_stmt`.
	 * @param ctx the parse tree
	 */
	enterNetwork_stmt?: (ctx: Network_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.network_stmt`.
	 * @param ctx the parse tree
	 */
	exitNetwork_stmt?: (ctx: Network_stmtContext) => void;
}

