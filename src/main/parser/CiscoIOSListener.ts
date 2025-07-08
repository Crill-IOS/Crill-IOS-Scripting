
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
     * Enter a parse tree produced by `CiscoIOSParser.enable_cmd`.
     * @param ctx the parse tree
     */
    enterEnable_cmd?: (ctx: Enable_cmdContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.enable_cmd`.
     * @param ctx the parse tree
     */
    exitEnable_cmd?: (ctx: Enable_cmdContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.show_cmd`.
     * @param ctx the parse tree
     */
    enterShow_cmd?: (ctx: Show_cmdContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.show_cmd`.
     * @param ctx the parse tree
     */
    exitShow_cmd?: (ctx: Show_cmdContext) => void;
    /**
     * Enter a parse tree produced by `CiscoIOSParser.show_cmd_options`.
     * @param ctx the parse tree
     */
    enterShow_cmd_options?: (ctx: Show_cmd_optionsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.show_cmd_options`.
     * @param ctx the parse tree
     */
    exitShow_cmd_options?: (ctx: Show_cmd_optionsContext) => void;
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
     * Enter a parse tree produced by `CiscoIOSParser.configure_terminal_cmds`.
     * @param ctx the parse tree
     */
    enterConfigure_terminal_cmds?: (ctx: Configure_terminal_cmdsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.configure_terminal_cmds`.
     * @param ctx the parse tree
     */
    exitConfigure_terminal_cmds?: (ctx: Configure_terminal_cmdsContext) => void;
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
     * Enter a parse tree produced by `CiscoIOSParser.hostname_cmd_options`.
     * @param ctx the parse tree
     */
    enterHostname_cmd_options?: (ctx: Hostname_cmd_optionsContext) => void;
    /**
     * Exit a parse tree produced by `CiscoIOSParser.hostname_cmd_options`.
     * @param ctx the parse tree
     */
    exitHostname_cmd_options?: (ctx: Hostname_cmd_optionsContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

