import { AstNode, LangiumDocument, MaybePromise} from "langium";
import { CompletionAcceptor, CompletionContext, DefaultCompletionProvider, NextFeature } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList, CompletionItem, CompletionItemKind } from "vscode-languageserver";
import * as ast from "../../node_modules/langium/lib/languages/generated/ast.js";
import { CiscoIosServices } from "./cisco-ios-module.js";



interface CompletionInfo {
  label: string;
  description: string;
  insert: string;
}
const details: {[key:string]: CompletionInfo} = require("./details/Command_Details.json");

export class CiscoIosCompletionProvider extends DefaultCompletionProvider {

    constructor(private readonly services: CiscoIosServices) {
        super(services);
        this.services;
    }
    

    override async getCompletion(document: LangiumDocument, params: CompletionParams, _cancelToken?: CancellationToken): Promise<CompletionList | undefined> {
        let completions: CompletionItem[] = [];
        
        // Builds Completions with labels, descriptions, etc.
        const contexts = this.buildContexts(document, params.position);
        
        const acceptor: CompletionAcceptor = (context, value) => {
            const completionItem = this.fillCompletionItem(context, value);
            if (completionItem) {
                completions.push(completionItem);
            }
        };

        console.log("-----------------------------------------------")
        for (const context of contexts){
            for (const feature of context.features){
                this.completionFor(context, feature, acceptor);
            }
        }

        // Build Completions for Cross-references which can't be done in the grammar

        const defaultCompletions = await super.getCompletion(document, params, _cancelToken);
        defaultCompletions?.items.forEach(i => completions.push(i))
        const lineText = document.textDocument.getText({
            start: { line: params.position.line, character: 0},
            end: params.position
        });

        // 'ping' Completions

        if (lineText.trim() === 'ping') {
            // schlage immer 8.8.8.8 vor zum Testen
            completions.push(
                {
                    label: '8.8.8.8', kind: CompletionItemKind.Value,
                    detail: 'Dummy IP for testing'
                }
            )
            
            // sammelt alle IPs aus dem gleichen Dokument und pusht sie in die customItems dazu
            this.collectIps(document.parseResult.value).forEach(ip => {
                completions.push({
                    label: ip,
                    kind: CompletionItemKind.Text,
                    detail: 'IP from this document'
                });
            });
        }

        // 'username' Completions

        if (lineText.trim() === 'username')
            this.collectUsernames(document.parseResult.value).forEach(username => {
                completions.push({
                    label: username,
                    kind: CompletionItemKind.Text,
                    detail: 'Username from this document'
                })})

        return CompletionList.create(this.deduplicateItems(completions), true);
    }
    

    override completionFor(context: CompletionContext, next: NextFeature, acceptor: CompletionAcceptor): MaybePromise<void> {
        console.log(next);
        console.log("SPLITTER_____________________________________________________________");
        let detail: CompletionInfo;
        
        if (next.type){
            detail = details[next.type];
            if (detail){
                acceptor(context,{
                    label: detail.label,
                    detail: detail.description,
                    sortText: "1",
                    kind: 1,
                    insertText: detail.insert
                })
            }
        }
        
        if (ast.isKeyword(next.feature)) {
            return this.completionForKeyword(context, next.feature, acceptor);
        } else if (ast.isCrossReference(next.feature) && context.node) {
            return this.completionForCrossReference(context, next as NextFeature<ast.CrossReference>, acceptor);
        } else if (ast.isRuleCall(next.feature)){
            if (next.feature.rule.ref?.name == "NL"){
                const document = context.document.textDocument;
                const offset = document.offsetAt(context.position);
                const correctLine = document.offsetAt({line:context.position.line, character:0})
                const textBeforeCursor = document.getText().substring(correctLine, offset)

                if (textBeforeCursor.trim().length > 0) {
                    let detail = details["CR"];
                    acceptor(context, {
                        label: detail.label,
                        detail: detail.description,
                        sortText: "1",
                        insertText: detail.insert
                    });
                }
            }
        }
    }

    override completionForKeyword(context: CompletionContext, keyword: ast.Keyword, acceptor: CompletionAcceptor): MaybePromise<void> {
        if (!this.filterKeyword(context, keyword)) {
            return;
        }
        
        acceptor(context, {
            label: keyword.value,
            kind: this.getKeywordCompletionItemKind(keyword),
            detail: 'From OLD logic',
            sortText: '1',

        });
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
                result.push((node as any).value);
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
     * Sammelt die Usernames aus dem gesamten Dokument. In Visited werden die angesehenen Nodes gespeichert damit kein Loop erzeugt wird.
     * @param node startNode
     * @returns String-Array mit gesammelten Usernames
     */
    collectUsernames(node: AstNode): string[] {
    const result: string[] = [];
    const visited = new Set<AstNode>();

        /**
         * Schaut nach ob eine node ein Username ist. Wenn ja fügt zu result hinzu.
         * @param node Node die geprüft wird
         * @returns
         */
        function checkForIps(node: AstNode) {
            if (visited.has(node)) return;
            visited.add(node);
            
            if (node.$type === 'USERNAME_INPUT') {
                result.push((node as any).value);
            }

            for (const property in node) {
                const wert = (node as any)[property];    
                if (Array.isArray(wert)) {
                    for (const eintrag of wert) {
                        if (eintrag && typeof eintrag === 'object' && '$type' in eintrag) {
                            checkForIps(eintrag);
                        }
                    }
                } else if (wert && typeof wert === 'object' && '$type' in wert) {
                    checkForIps(wert);
                }
            }
        }

        checkForIps(node);
        return result;
    }
}