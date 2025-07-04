// Generated from ./src/antlr/CiscoIOS.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
import { Vpn_stmtContext } from "./CiscoIOSParser.js";
import { Vpn_isakmp_bodyContext } from "./CiscoIOSParser.js";
import { Vpn_crypto_map_bodyContext } from "./CiscoIOSParser.js";


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
	 * Enter a parse tree produced by `CiscoIOSParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;
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
	 * Enter a parse tree produced by `CiscoIOSParser.exec_stmt`.
	 * @param ctx the parse tree
	 */
	enterExec_stmt?: (ctx: Exec_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.exec_stmt`.
	 * @param ctx the parse tree
	 */
	exitExec_stmt?: (ctx: Exec_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.enable_stmt`.
	 * @param ctx the parse tree
	 */
	enterEnable_stmt?: (ctx: Enable_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.enable_stmt`.
	 * @param ctx the parse tree
	 */
	exitEnable_stmt?: (ctx: Enable_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.priv_stmt`.
	 * @param ctx the parse tree
	 */
	enterPriv_stmt?: (ctx: Priv_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.priv_stmt`.
	 * @param ctx the parse tree
	 */
	exitPriv_stmt?: (ctx: Priv_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.conft_stmt`.
	 * @param ctx the parse tree
	 */
	enterConft_stmt?: (ctx: Conft_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.conft_stmt`.
	 * @param ctx the parse tree
	 */
	exitConft_stmt?: (ctx: Conft_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.global_stmt`.
	 * @param ctx the parse tree
	 */
	enterGlobal_stmt?: (ctx: Global_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.global_stmt`.
	 * @param ctx the parse tree
	 */
	exitGlobal_stmt?: (ctx: Global_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.grundkonfig_stmt`.
	 * @param ctx the parse tree
	 */
	enterGrundkonfig_stmt?: (ctx: Grundkonfig_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.grundkonfig_stmt`.
	 * @param ctx the parse tree
	 */
	exitGrundkonfig_stmt?: (ctx: Grundkonfig_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.linecon_stmt`.
	 * @param ctx the parse tree
	 */
	enterLinecon_stmt?: (ctx: Linecon_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.linecon_stmt`.
	 * @param ctx the parse tree
	 */
	exitLinecon_stmt?: (ctx: Linecon_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.linecon_body`.
	 * @param ctx the parse tree
	 */
	enterLinecon_body?: (ctx: Linecon_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.linecon_body`.
	 * @param ctx the parse tree
	 */
	exitLinecon_body?: (ctx: Linecon_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.linevty_stmt`.
	 * @param ctx the parse tree
	 */
	enterLinevty_stmt?: (ctx: Linevty_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.linevty_stmt`.
	 * @param ctx the parse tree
	 */
	exitLinevty_stmt?: (ctx: Linevty_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.linevty_body`.
	 * @param ctx the parse tree
	 */
	enterLinevty_body?: (ctx: Linevty_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.linevty_body`.
	 * @param ctx the parse tree
	 */
	exitLinevty_body?: (ctx: Linevty_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.ospf_stmt`.
	 * @param ctx the parse tree
	 */
	enterOspf_stmt?: (ctx: Ospf_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.ospf_stmt`.
	 * @param ctx the parse tree
	 */
	exitOspf_stmt?: (ctx: Ospf_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.ospf_body`.
	 * @param ctx the parse tree
	 */
	enterOspf_body?: (ctx: Ospf_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.ospf_body`.
	 * @param ctx the parse tree
	 */
	exitOspf_body?: (ctx: Ospf_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.int_stmt`.
	 * @param ctx the parse tree
	 */
	enterInt_stmt?: (ctx: Int_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.int_stmt`.
	 * @param ctx the parse tree
	 */
	exitInt_stmt?: (ctx: Int_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.int_body`.
	 * @param ctx the parse tree
	 */
	enterInt_body?: (ctx: Int_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.int_body`.
	 * @param ctx the parse tree
	 */
	exitInt_body?: (ctx: Int_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.rip_stmt`.
	 * @param ctx the parse tree
	 */
	enterRip_stmt?: (ctx: Rip_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.rip_stmt`.
	 * @param ctx the parse tree
	 */
	exitRip_stmt?: (ctx: Rip_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.rip_body`.
	 * @param ctx the parse tree
	 */
	enterRip_body?: (ctx: Rip_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.rip_body`.
	 * @param ctx the parse tree
	 */
	exitRip_body?: (ctx: Rip_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.dhcp_stmt`.
	 * @param ctx the parse tree
	 */
	enterDhcp_stmt?: (ctx: Dhcp_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.dhcp_stmt`.
	 * @param ctx the parse tree
	 */
	exitDhcp_stmt?: (ctx: Dhcp_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.dhcp_body`.
	 * @param ctx the parse tree
	 */
	enterDhcp_body?: (ctx: Dhcp_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.dhcp_body`.
	 * @param ctx the parse tree
	 */
	exitDhcp_body?: (ctx: Dhcp_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.vpn_stmt`.
	 * @param ctx the parse tree
	 */
	enterVpn_stmt?: (ctx: Vpn_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.vpn_stmt`.
	 * @param ctx the parse tree
	 */
	exitVpn_stmt?: (ctx: Vpn_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.vpn_isakmp_body`.
	 * @param ctx the parse tree
	 */
	enterVpn_isakmp_body?: (ctx: Vpn_isakmp_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.vpn_isakmp_body`.
	 * @param ctx the parse tree
	 */
	exitVpn_isakmp_body?: (ctx: Vpn_isakmp_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `CiscoIOSParser.vpn_crypto_map_body`.
	 * @param ctx the parse tree
	 */
	enterVpn_crypto_map_body?: (ctx: Vpn_crypto_map_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CiscoIOSParser.vpn_crypto_map_body`.
	 * @param ctx the parse tree
	 */
	exitVpn_crypto_map_body?: (ctx: Vpn_crypto_map_bodyContext) => void;
}

