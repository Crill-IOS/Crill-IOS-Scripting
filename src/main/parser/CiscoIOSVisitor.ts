
import { AbstractParseTreeVisitor } from "antlr4ng";


import { StatContext } from "./CiscoIOSParser.js";
import { CommandsContext } from "./CiscoIOSParser.js";
import { Enable_cmdsContext } from "./CiscoIOSParser.js";
import { Configure_cmdContext } from "./CiscoIOSParser.js";
import { Configure_cmd_optionsContext } from "./CiscoIOSParser.js";
import { Configure_cmdsContext } from "./CiscoIOSParser.js";
import { Hostname_cmdContext } from "./CiscoIOSParser.js";
import { Interface_cmdContext } from "./CiscoIOSParser.js";
import { Interface_cmd_optionsContext } from "./CiscoIOSParser.js";
import { Interface_typesContext } from "./CiscoIOSParser.js";
import { Interface_idContext } from "./CiscoIOSParser.js";
import { Interface_cmdsContext } from "./CiscoIOSParser.js";


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
     * Visit a parse tree produced by `CiscoIOSParser.commands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommands?: (ctx: CommandsContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.enable_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_cmds?: (ctx: Enable_cmdsContext) => Result;
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
     * Visit a parse tree produced by `CiscoIOSParser.configure_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigure_cmds?: (ctx: Configure_cmdsContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.hostname_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHostname_cmd?: (ctx: Hostname_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.interface_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterface_cmd?: (ctx: Interface_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.interface_cmd_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterface_cmd_options?: (ctx: Interface_cmd_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.interface_types`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterface_types?: (ctx: Interface_typesContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.interface_id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterface_id?: (ctx: Interface_idContext) => Result;
    /**
     * Visit a parse tree produced by `CiscoIOSParser.interface_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterface_cmds?: (ctx: Interface_cmdsContext) => Result;
}

