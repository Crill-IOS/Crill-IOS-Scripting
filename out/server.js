"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
const antlr4_1 = require("antlr4");
const CiscoIOSLexer_1 = require("./parser/CiscoIOSLexer");
const CiscoIOSParser_1 = require("./parser/CiscoIOSParser");
const CiscoIOSVisitor_js_1 = require("./parser/CiscoIOSVisitor.js");
class CustomVisitor extends CiscoIOSVisitor_js_1.default {
    visitChildren(ctx) {
        if (!ctx) {
            return;
        }
        if (ctx.children) {
            return ctx.children.map(child => {
                if (child.children && child.children.length != 0) {
                    return child.accept(this);
                }
                else {
                    return child.getText();
                }
            });
        }
    }
}
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
const documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
// Initialize code
//tell the "client" what features we are offering
//eg, completion, hover or diagnostics
//see at: https://code.visualstudio.com/api/language-extensions/programmatic-language-features
connection.onInitialize((params) => {
    const capabilities = params.capabilities;
    const result = {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
            completionProvider: {
                resolveProvider: true,
                triggerCharacters: [..."abcdefghijklmnopqrstuvwxyz"]
            }
            //hoverProvider: true,
            // diagnosticProvider: {
            //     interFileDependencies: false,
            //     workspaceDiagnostics: false
            // },
            // semanticTokensProvider: {
            //     legend: {
            //         tokenTypes: [
            //             "example1", "example2"
            //         ],
            //         tokenModifiers: ["example3", "example4"]
            //     }
            // }
        }
    };
    if (capabilities.workspace) {
        // workspace folder support
        //was sind workspace folder???? idk
        if (capabilities.workspace.workspaceFolders) {
            result.capabilities.workspace = {
                workspaceFolders: {
                    supported: true
                }
            };
        }
    }
    if (capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation) {
    }
    return result;
});
connection.onCompletion(
/**
 * Benjamin Zwettler 09.04.2025
 * @param _textDocumentPosition The pass parameter contains the position of the text document in
 *  which code complete got requested.
 * @returns a list of completionItems for Client
 */
(_textDocumentPosition) => {
    const document = documents.get(_textDocumentPosition.textDocument.uri);
    if (!document) {
        console.error("Document not found:", _textDocumentPosition.textDocument.uri);
        return [];
    }
    const text = "document.getText()";
    const chars = new antlr4_1.CharStream(text);
    const lexer = new CiscoIOSLexer_1.default(chars);
    const tokens = new antlr4_1.CommonTokenStream(lexer);
    const parser = new CiscoIOSParser_1.default(tokens);
    const tree = parser.config();
    return [
        {
            label: "test1",
            kind: node_1.CompletionItemKind.Keyword,
            insertTextFormat: 2,
            insertText: "test123"
        }
    ];
});
documents.listen(connection);
connection.listen();
//# sourceMappingURL=server.js.map