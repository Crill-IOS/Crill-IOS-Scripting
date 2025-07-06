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
    AnnotatedTextEdit,
} from "vscode-languageserver/node";

import {
    TextDocument
} from 'vscode-languageserver-textdocument';


import { CiscoIOSLexer } from "./parser/CiscoIOSLexer";
import { CiscoIOSParser } from "./parser/CiscoIOSParser";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { commands } from "vscode";
import { CodeCompletionCore } from "antlr4-c3";

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
            },
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
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    const document = documents.get(_textDocumentPosition.textDocument.uri);
    if (!document) {
      console.error("Document not found:", _textDocumentPosition.textDocument.uri);
      return [];
    }

    const cursorOffset = document.offsetAt(_textDocumentPosition.position);
    console.log("offset: "+ cursorOffset);
    const text = document.getText();

    getExpectedTokensAt(text, cursorOffset);
    
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


function getExpectedTokensAt(text: string, cursorOffset: number): number[]{
  const inputStream = CharStream.fromString(text);
  const lexer = new CiscoIOSLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);

  const parser = new CiscoIOSParser(tokenStream);
  const tree = parser.config()
  

  const core = new CodeCompletionCore(parser);
  const candidates = core.collectCandidates(cursorOffset);

  for (const [tokenType, _] of candidates.tokens) {
    console.log("  Token:", parser.vocabulary.getDisplayName(tokenType));
  }
  
  for (const [ruleIndex, _] of candidates.rules) {
    console.log("  Rule:", parser.ruleNames[ruleIndex]);
  }
  
  return [];
}


connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		return item;
	}
);



documents.listen(connection);
connection.listen();



