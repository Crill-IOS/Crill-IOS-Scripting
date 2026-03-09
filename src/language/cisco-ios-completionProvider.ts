import { AstNode, LangiumDocument, MaybePromise } from "langium";
import { CompletionAcceptor, CompletionContext, DefaultCompletionProvider, NextFeature } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList, CompletionItem, Range, TextEdit } from "vscode-languageserver";
import * as ast from "../../node_modules/langium/lib/languages/generated/ast.js";
import { CiscoIosServices } from "./cisco-ios-module.js";
import { CompletionItemKind } from "vscode-languageserver-types";
import { commandDetails, commandTokenDefaults } from "./details/commandDetails.js";


type TokenDefaults = Record<string, string>;

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

        // Read user settings once per request and apply default substitutions
        const defaults = await this.getTokenDefaults();

        // acceptor creates and saves completion items from a given context
        // and stores it in the "completions" array
        const acceptor: CompletionAcceptor = (context, value) => {
            const resolved = value.insertText
                ? { ...value, insertText: this.applyDefaults(value.insertText, defaults) }
                : value;
            const completionItem = this.fillCompletionItem(context, resolved as typeof value);
            if (completionItem) {
                this.applyTemplateReplacement(document, params, completionItem);
                completions.push(completionItem);
            }
        };
        
        //requests completion for every feature in every context
        for (const context of contexts) {
            for (const feature of context.features) {
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
        const detail = next.type ? commandDetails[next.type] : undefined;
        //if details exist for "next.type" create 
        // a completion item with the details
        if (detail) {
            acceptor(context, {
                label: detail.label,
                kind: detail.kind as CompletionItemKind,
                detail: detail.description,
                sortText: "1",
                insertTextFormat: 2,
                insertText: detail.insert
            })
            //if no details were found use fallback instead
        } else if (ast.isKeyword(next.feature) && next.type!= "KEYWORDS" ) {
            return this.completionForKeyword(context, next.feature, acceptor);
        }
    }

    /**
     * @deprecated only used as fallback when no details exist for a feature type
     *
     * @description generates a Completion Item via the "keyword" name
     * from the grammar (ast)
     * 
     * @param context a context from a document
     * @param keyword a keyword from the ast
     * @param acceptor the acceptor that saves completion items into the "completions" array
     * 
     * @returns nothing (could return a maybepromise)
     */
    override completionForKeyword(context: CompletionContext, keyword: ast.Keyword, acceptor: CompletionAcceptor): MaybePromise<void> {
        if (!this.filterKeyword(context, keyword)) {
            return;
        }
        acceptor(context, {
            label: keyword.value,
            kind: this.getKeywordCompletionItemKind(keyword),
            detail: '',
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
     * Reads token overrides from VS Code (Crill-IOS.defaults) and merges them
     * over the defaults declared in Command_Details.json.
     */
    private async getTokenDefaults(): Promise<TokenDefaults> {
        try {
            const cfg = await this.services.shared.workspace.ConfigurationProvider
                .getConfiguration('Crill-IOS', 'defaults') as Record<string, unknown> | undefined;
            const defaults = { ...commandTokenDefaults };
            if (cfg) {
                for (const [key, value] of Object.entries(cfg)) {
                    if (typeof value === 'string') {
                        defaults[key] = value;
                    }
                }
            }
            return defaults;
        } catch {
            return { ...commandTokenDefaults };
        }
    }

    /**
     * Replaces placeholder tokens in an insert text with the user's configured defaults.
     */
    private applyDefaults(insertText: string, defaults: TokenDefaults): string {
        return insertText.replace(/__([A-Za-z0-9_]+)__/g, (match, tokenName: string) => {
            return defaults[tokenName] ?? match;
        });
    }

    private applyTemplateReplacement(document: LangiumDocument, params: CompletionParams, item: CompletionItem): void {
        if (typeof item.label !== 'string' || !item.label.startsWith('/') || !item.insertText) {
            return;
        }

        const text = document.textDocument.getText();
        const offset = document.textDocument.offsetAt(params.position);
        let start = offset;
        while (start > 0 && !/\s/.test(text[start - 1])) {
            start--;
        }

        if (text[start] !== '/') {
            return;
        }

        let end = offset;
        while (end < text.length && !/\s/.test(text[end])) {
            end++;
        }

        item.textEdit = TextEdit.replace(Range.create(
            document.textDocument.positionAt(start),
            document.textDocument.positionAt(end)
        ), item.insertText);
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