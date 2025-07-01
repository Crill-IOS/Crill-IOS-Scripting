"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
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
                triggerCharacters: ["abcdefghijklmnopqrstuvwxyz"]
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
//# sourceMappingURL=server.js.map