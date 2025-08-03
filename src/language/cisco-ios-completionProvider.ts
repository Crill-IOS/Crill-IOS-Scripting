import { AstNode, LangiumDocument } from "langium";
import { DefaultCompletionProvider } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList, CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { CiscoIosServices } from "./cisco-ios-module.js";
import { Interface_type_gigabitethernet, Script, isConfigure_cmds, isEnable_cmds, isExit_cmd } from "./generated/ast.js";
//import * as ast from './generated/ast.js';

export class CiscoIosCompletionProvider extends DefaultCompletionProvider {

    constructor(private readonly services: CiscoIosServices) {
        super(services);
    }

    override async getCompletion(document: LangiumDocument, params: CompletionParams, _cancelToken?: CancellationToken): Promise<CompletionList | undefined> {
        this.services;

        // //feature testing to get how it works
        // const grammar = this.services.Grammar
        // const rule = grammar.rules.find(r => r.name === "Enable_cmds")
        // console.log("Rule----------------------------------------------")
        // if(rule?.definition.$type !== 'Assignment'){

        // }else{
        //     const asignment = rule.definition;
        //     console.log(asignment);
        // }
        // console.log("Rule-end----------------------------------------------")


        const root: AstNode = document.parseResult.value;
        // const contexts = this.buildContexts(document, params.position);

        // for(const context of contexts){
        //     console.log("START-----------------------");
        //     for (const feature of context.features){
        //         console.log(feature);
                
        //     }
        //     console.log("STOP-----------------------");
        // }
        // //feature testing end
        console.log(this.modeAtPosition(root, params));
        

        // return super.getCompletion(document,params,_cancelToken);

        // alles oben auskommentierte könnte noch wichtig sein und war fürs verständnis wichtig





        // HIER GEHTS LOS
        const defaultCompletions = await super.getCompletion(document, params, _cancelToken);

        const customItems: CompletionItem[] = [];

        const lineText = document.textDocument.getText({
            start: { line: params.position.line, character: 0},
            end: params.position
        });

        if (lineText.trim().startsWith('ping')) {
            // schlage immer 8.8.8.8 vor zum Testen
            customItems.push(
                {
                    label: '8.8.8.8', kind: CompletionItemKind.Value 
                }
            )
            
            // sammelt alle IPs aus dem gleichen Dokument und pusht sie in die customItems dazu
            this.collectIps(document.parseResult.value).forEach(ip => {
                customItems.push({
                    label: ip,
                    kind: CompletionItemKind.Text,
                    detail: 'IP from this document'
                });
            });
            
            return { items: customItems, isIncomplete: false};
        }

        // falls keine customItems benötigt werden einfach die standardCompletions returnen
        // vielleicht sinnvoller beim erweitern die defaultCompletions.items UND die customItems returnen
        return { items: defaultCompletions?.items ?? [], isIncomplete: false};
    }

    /**
     * Sammelt die IP-Adressen aus dem gesamten Dokument. In Visited werden die angesehenen Nodes gespeichert damit kein Loop erzeugt wird.
     * @param node startNode
     * @returns String-Array mit gesammelten IPs
     */
    collectIps(node: AstNode): string[] {
    const result: string[] = [];
    const visited = new Set<AstNode>();

    /**
     * Schaut nach ob eine node eine IP ist. Wenn ja fügt zu result hinzu.
     * @param node Node die geprüft wird
     * @returns
     */
    function checkForIps(node: AstNode) {
        if (visited.has(node)) return;
        visited.add(node);

        
        // wenn Node vom Type 'IP' dann hinzufügen
        if (node.$type === 'IP' /*&& typeof (node as any).ip === 'string' //man könnte noch die Eigenschaft ip wie in der .langium file prüfen aber macht keinen unterschied*/) {
            result.push((node as any).ip);
        }

        // Alle Eigenschaften des Knotens durchgehen
        // und potenziell Subknoten.
        for (const property in node) {
            const wert = (node as any)[property];
            /*
                z.B. {
                        $type: 'IP,
                        ip: '192.168.0.1',
                        mask: '255.255.255.0'
                        ...
                    }
                
                ist $type, ip und mask die properties
                und 'IP', '192.168.0.1' und '255.255.255.0' die werte
            */
           
            if (Array.isArray(wert)) {
                // Wenn es ein Array ist, jeden Eintrag prüfen
                for (const eintrag of wert) {
                    if (eintrag && typeof eintrag === 'object' && '$type' in eintrag) {
                        checkForIps(eintrag);
                    }
                }
            } else if (wert && typeof wert === 'object' && '$type' in wert) {
                // Einzelnes Kind-Objekt prüfen
                checkForIps(wert);
            }
        }
    }

    checkForIps(node);
    return result;
}

    /**
     * returns the mode at the cursor's position
     * @param node root node
     * @param params parameters
     * @returns mode at cursor's position
     */
    private modeAtPosition(node: AstNode, params: CompletionParams):string{
        const script = node as Script;
        const modeStack:string[]  = ["Enable_cmds"];
        
        // if script is empty return "enable"
        if(!script.script){
            return "Enable_cmds";
        }

        const lines = script.script.lines;
        const targetLine = params.position.line;

        // targetLine is the line of the cursor's position
        for (let i = 0; i < lines.length && i < targetLine; i++) {
            let  line = lines[i];

            // check "configure terminal" command
            if (isEnable_cmds(line)) {
                if(line.commands.$type === "Configure_cmd"){
                    if(line.commands.options.option === 'terminal'){
                        modeStack.push('Configure_cmds');
                        continue;
                    }
                }
            }

            // check "interface gigabitethernet/..." command
            if (isConfigure_cmds(line)) {
                if (line.commands.$type === 'Interface_cmd'){

                    //check the diffrent interface modes
                    if (line.commands.types.type ==="gigabitethernet"){
                        const inter = line.commands.types as Interface_type_gigabitethernet;
                        if( inter.$type === 'Interface_type_gigabitethernet'){
                            if(inter.number.number && inter.number.sub){
                                modeStack.push('gigabitethernet_SUB');
                                continue;
                            } else if(inter.number.number){
                                modeStack.push('Interface_cmds');
                                continue;
                            }
                        }
                    }
                }
            }

            // check "exit" command
            if (isExit_cmd(line)) {
                modeStack.pop();
            }
        }

        // return last mode from modeStack or "enable" if modeStack is empty
        return modeStack.pop() ?? "Enable_cmds";
    }
}