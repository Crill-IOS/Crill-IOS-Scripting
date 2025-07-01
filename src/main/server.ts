import {
    createConnection,
    TextDocuments,
    Diagnostic,
    ProposedFeatures,
    InitializeParams,
    DidChangeConfigurationNotification,
    CompletionItem,
    CompletionItemKind,
    TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
    type DocumentDiagnosticReport,
} from "vscode-languageserver/node";

import {
    TextDocument
} from 'vscode-languageserver-textdocument';


import antlr4 from 'antlr4';

import Lexer from "./parser/CiscoIOSLexer"



const connection = createConnection(ProposedFeatures.all);

const documents = new TextDocuments(TextDocument);

// Initialize code
//tell the "client" what features we are offering
//eg, completion, hover or diagnostics
//see at: https://code.visualstudio.com/api/language-extensions/programmatic-language-features

connection.onInitialize((params: InitializeParams) =>{
    const capabilities = params.capabilities;

	const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,

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
        if (capabilities.workspace.workspaceFolders){
            result.capabilities.workspace = {
                workspaceFolders:{
                    supported: true
                }
            }
        }
    }

    if (
        capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
         capabilities.textDocument.publishDiagnostics.relatedInformation
    ) {
        
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

	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		const document = documents.get(_textDocumentPosition.textDocument.uri);
		if (!document) {
			console.error("Document not found:", _textDocumentPosition.textDocument.uri);
			return [];
		}
        console.log("TEXT:")
        console.log(document.getText())

		return [
            {
				label: "test1",
				kind: CompletionItemKind.Keyword,
				insertTextFormat: 2,
				insertText: "test123"
			}
        ];
	}
);

documents.listen(connection);

connection.listen();



