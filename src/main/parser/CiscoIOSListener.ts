
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `CiscoIOSParser`.
 */
export class CiscoIOSListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `CiscoIOSParser.stat`.
     * @param ctx the parse tree
     */
    enterStat?: (ctx: StatContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.stat`.
     * @param ctx the parse tree
     */
    exitStat?: (ctx: StatContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.commands`.
     * @param ctx the parse tree
     */
    enterCommands?: (ctx: CommandsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.commands`.
     * @param ctx the parse tree
     */
    exitCommands?: (ctx: CommandsContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.enable_cmds`.
     * @param ctx the parse tree
     */
    enterEnable_cmds?: (ctx: Enable_cmdsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.enable_cmds`.
     * @param ctx the parse tree
     */
    exitEnable_cmds?: (ctx: Enable_cmdsContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.configure_cmd`.
     * @param ctx the parse tree
     */
    enterConfigure_cmd?: (ctx: Configure_cmdContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.configure_cmd`.
     * @param ctx the parse tree
     */
    exitConfigure_cmd?: (ctx: Configure_cmdContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.configure_cmd_options`.
     * @param ctx the parse tree
     */
    enterConfigure_cmd_options?: (ctx: Configure_cmd_optionsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.configure_cmd_options`.
     * @param ctx the parse tree
     */
    exitConfigure_cmd_options?: (ctx: Configure_cmd_optionsContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.configure_cmds`.
     * @param ctx the parse tree
     */
    enterConfigure_cmds?: (ctx: Configure_cmdsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.configure_cmds`.
     * @param ctx the parse tree
     */
    exitConfigure_cmds?: (ctx: Configure_cmdsContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.hostname_cmd`.
     * @param ctx the parse tree
     */
    enterHostname_cmd?: (ctx: Hostname_cmdContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.hostname_cmd`.
     * @param ctx the parse tree
     */
    exitHostname_cmd?: (ctx: Hostname_cmdContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.interface_cmd`.
     * @param ctx the parse tree
     */
    enterInterface_cmd?: (ctx: Interface_cmdContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.interface_cmd`.
     * @param ctx the parse tree
     */
    exitInterface_cmd?: (ctx: Interface_cmdContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.interface_cmd_options`.
     * @param ctx the parse tree
     */
    enterInterface_cmd_options?: (ctx: Interface_cmd_optionsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.interface_cmd_options`.
     * @param ctx the parse tree
     */
    exitInterface_cmd_options?: (ctx: Interface_cmd_optionsContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.interface_types`.
     * @param ctx the parse tree
     */
    enterInterface_types?: (ctx: Interface_typesContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.interface_types`.
     * @param ctx the parse tree
     */
    exitInterface_types?: (ctx: Interface_typesContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.interface_id`.
     * @param ctx the parse tree
     */
    enterInterface_id?: (ctx: Interface_idContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.interface_id`.
     * @param ctx the parse tree
     */
    exitInterface_id?: (ctx: Interface_idContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.interface_cmds`.
     * @param ctx the parse tree
     */
    enterInterface_cmds?: (ctx: Interface_cmdsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.interface_cmds`.
     * @param ctx the parse tree
     */
    exitInterface_cmds?: (ctx: Interface_cmdsContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

