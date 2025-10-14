import { AstNode, LangiumDocument, MaybePromise } from "langium";
import { CompletionAcceptor, CompletionContext, DefaultCompletionProvider, NextFeature } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList, CompletionItem } from "vscode-languageserver";
import * as ast from "../../node_modules/langium/lib/languages/generated/ast.js";
import { CiscoIosServices } from "./cisco-ios-module.js";
import { IP, Ping_cmd, Username_cmd, USERNAME_INPUT } from "./generated/ast.js";
import details from "./details/Command_Details.json";


/**
 * Object type to store completion Info from:
 * "/src/language/details/Command_Details.json"
 */
interface CompletionInfo {
  label: string;
  description: string;
  insert: string;
}

export class CiscoIosCompletionProvider extends DefaultCompletionProvider {

    constructor(private readonly services: CiscoIosServices) {
        super(services);
    }
    
    /**
     * @description
     * takes the document and the params and build contexts and 
     * returns completions for each context
     * 
     * @param document document that kontext
     * @param params Completion Params that contain the cursour position
     * @param _cancelToken Chancelation token
     * @returns a completion list promise with completions in
     * the current context of the cursour
     */
    override async getCompletion(document: LangiumDocument, params: CompletionParams, _cancelToken?: CancellationToken): Promise<CompletionList | undefined> {
        let completions: CompletionItem[] = []; 
        
        //build contexts via document and params
        const contexts = this.buildContexts(document, params.position);

        // Handles giving no Completion for Comments
        if (this.isCursorInComment(document, params)) return CompletionList.create([], true)
        
        // acceptor creates and saves completion items from a given context
        // and stores it in the "completions" array
        const acceptor: CompletionAcceptor = (context, value) => {
            const completionItem = this.fillCompletionItem(context, value);
            if (completionItem) {
                completions.push(completionItem);
            }
        };

        console.log("-----------------------------------------------")
        //requests completion for every feature in every context
        for (const context of contexts){
            for (const feature of context.features){
                this.completionFor(context, feature, acceptor);
            }
        }
        // create a completion list from the collected completions
        return CompletionList.create(this.deduplicateItems(completions), true);
    }
    
    /**
     * @description
     * creates completion Items with Details from "Command_Details.json"
     * and puts them into the "completions" array
     * 
     * @param context a context from the document
     * @param next the next feature from the context.features
     * @param acceptor the acceptor that saves completion items into the "completions" array
     * @returns nothing (could return a maybepromise)
     */
    override completionFor(context: CompletionContext, next: NextFeature, acceptor: CompletionAcceptor): MaybePromise<void> {
        //console.log(next);
        //console.log("SPLITTER_____________________________________________________________");
        let detail: CompletionInfo;
        
        if (next.type){
            detail = details[next.type as keyof typeof details];
            //if details exist for "next.type" create 
            // a completion item with the details
            if (detail){
                acceptor(context,{
                    label: detail.label,
                    detail: detail.description,
                    sortText: "1",
                    kind: 1,  //kind in detail noch hinzufügen!!!
                    insertTextFormat: 2,
                    insertText: detail.insert
                })
            }
        }
        
        // Custom Cross References
        // die acceptor Inhalte kann man noch in eine Datei wie 'Command_Details.json' auslagern
        const node: AstNode | undefined = context.node;

        if (node && node.$type === Ping_cmd) {
            this.collectFromType(IP, context.document.parseResult.value).forEach(ip => {
                acceptor(context, {
                    label: ip,
                    detail: 'IP from this Document',
                    sortText: '2',
                    kind: 12,
                    insertText: ip
                });
            });
        }

        if (node && node.$type === Username_cmd) {
            this.collectFromType(USERNAME_INPUT, context.document.parseResult.value).forEach(username => {
                acceptor(context, {
                    label: username,
                    detail: 'Username from this Document',
                    sortText: '2',
                    kind: 12,
                    insertText: username
                });
            });
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
     * Überprüft, ob der Cursor in einem Kommentar steht
     * @param document das gesamte Dokument
     * @param params enthält die Cursor Position
     * @returns true -> innerhalb eines Kommentars; false -> außerhalb eines Kommentars
     */
    isCursorInComment(document: LangiumDocument, params: CompletionParams): boolean {
        const offset = document.textDocument.offsetAt(params.position);
        
        const text = document.textDocument.getText();
        const lexer = this.services.parser.Lexer;
        const lexResult = lexer.tokenize(text);
        const commentTokens = lexResult.hidden ?? [];

        for (const commentToken of commentTokens) {
            if (offset > commentToken.startOffset 
                && params.position.line + 1 <= (commentToken.endLine ?? -1)) {
                return true
            }
        }

        return false
    }

    /**
     * Sammelt die gewünschten Node values aus dem gesamten Dokument. In Visited werden die angesehenen Nodes gespeichert damit kein Loop erzeugt wird.
     * @param node startNode
     * @returns String-Array mit gesammelten Values
     */
    collectFromType(type: string, node: AstNode): string[] {
    const result: string[] = [];
    const visited = new Set<AstNode>();

        /**
         * Schaut nach ob eine node den type hat. Wenn ja fügt zu result hinzu.
         * @param node Node die geprüft wird
         * @returns
         */
        function checkForType(node: AstNode) {
            if (visited.has(node)) return;
            visited.add(node);

            if (node.$type === type) {
                result.push((node as any).value);
            }

            // Alle Eigenschaften des Knotens durchgehen und potenziell Subknoten.
            for (const property in node) {
                const wert = (node as any)[property];
                /*z.B. {
                            $type: 'IP,
                            ip: '192.168.0.1',
                            mask: '255.255.255.0'
                            ...
                        } ist $type, ip und mask die properties und 'IP', '192.168.0.1' und '255.255.255.0' die werte
                */
            
                if (Array.isArray(wert)) {
                    for (const eintrag of wert) {
                        if (eintrag && typeof eintrag === 'object' && '$type' in eintrag) {
                            checkForType(eintrag);
                        }
                    }
                } else if (wert && typeof wert === 'object' && '$type' in wert) {
                    checkForType(wert);
                }
            }
        }

        checkForType(node);
        return result;
    }
}