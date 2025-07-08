
import { AbstractParseTreeVisitor } from "antlr4ng";


import { StatContext } from "./CiscoIOSParser.js";
import { Enable_cmdsContext } from "./CiscoIOSParser.js";
import { Enable_cmdContext } from "./CiscoIOSParser.js";
import { Show_cmdContext } from "./CiscoIOSParser.js";
import { Show_cmd_optionsContext } from "./CiscoIOSParser.js";
import { Configure_cmdContext } from "./CiscoIOSParser.js";
import { Configure_cmd_optionsContext } from "./CiscoIOSParser.js";
import { Configure_terminal_cmdsContext } from "./CiscoIOSParser.js";
import { Hostname_cmdContext } from "./CiscoIOSParser.js";
import { Hostname_cmd_optionsContext } from "./CiscoIOSParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CiscoIOSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class CiscoIOSVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `CiscoIOSParser.stat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStat?: (ctx: StatContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.enable_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_cmds?: (ctx: Enable_cmdsContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.enable_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_cmd?: (ctx: Enable_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.show_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShow_cmd?: (ctx: Show_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.show_cmd_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShow_cmd_options?: (ctx: Show_cmd_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.configure_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigure_cmd?: (ctx: Configure_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.configure_cmd_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigure_cmd_options?: (ctx: Configure_cmd_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.configure_terminal_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigure_terminal_cmds?: (ctx: Configure_terminal_cmdsContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.hostname_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHostname_cmd?: (ctx: Hostname_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.hostname_cmd_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHostname_cmd_options?: (ctx: Hostname_cmd_optionsContext) => Result;
}

