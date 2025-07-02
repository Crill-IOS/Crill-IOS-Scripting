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


import { InputStream, CommonTokenStream, CharStream , Lexer} from 'antlr4';

import CiscoIOSLexer from "./parser/CiscoIOSLexer"
import CiscoIOSParser from "./parser/CiscoIOSParser";
import { ParserRuleContext } from "antlr4";
import CiscoIOSVisitor from "./parser/CiscoIOSVisitor.js";
import { SemanticTokensParams } from "vscode-languageserver";


class CustomVisitor extends CiscoIOSVisitor<any> {

  visitChildren(ctx: ParserRuleContext) {
    if (!ctx) {
      return;
    }
    if (ctx.children) {
      return ctx.children.map(child => {
        if (child instanceof ParserRuleContext && child.children && child.children.length != 0) {
          return (child as any).accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}


const connection = createConnection(ProposedFeatures.all);

const documents = new TextDocuments(TextDocument);

// Chat: Map für Semantic Tokens
const tokenTypeMap: { [key: string]: string } = {
  "ENABLE": "keyword",
  "CONFT": "keyword",
  "ROUTER": "keyword",
  "OSPF": "function",
  "EXIT": "keyword",
  "NO": "keyword",
  "INTERFACE": "keyword",
  "HOSTNAME": "namespace",
  "BANNER": "class",
  "MOTD": "enum",
  "DOMAIN": "keyword",
  "NAME": "keyword",
  "SSH": "keyword",
  "USERNAME": "regexp",
  "LINE": "keyword",
  "VTY": "keyword",
  "CON": "keyword",
  "LOGIN": "keyword",
  "LOCAL": "keyword",
  "LOGGING": "keyword",
  "SYNCHRONUS": "keyword",
  "EXEC_TIMEOUT": "keyword",
  "TRANSPORT": "keyword",
  "INPUT": "keyword",
  "TELNET": "keyword",
  "PASSIVE_INTERFACE": "keyword",
  "ROUTER_ID": "keyword",
  "SHUT": "keyword",
  "ADDR": "keyword",
  "RIP": "keyword",
  "VERSION": "keyword",
  "AUTO_SUMMARY": "keyword",
  "DHCP": "keyword",
  "POOL": "keyword",
  "NETWORK": "keyword",
  "IP": "keyword",

  // ====== Operanden, numerische Werte, Bezeichner ======
  "INT": "number",
  "INT_NUM": "number",
  "IP_ADDR": "number",
  "SUB_ADDR": "number",

  // ====== Namen, Strings ======
  "DOMAIN_NAME": "string",
  "STR": "string",
  "BANNER_TEXT": "method",

  // ====== Interface-Bezeichner (z.B. GigabitEthernet0/1) ======
  "INT_NAME": "",

  // ====== Standardtypen ======
  "ID": "variable", // falls du ID-Tokens noch nutzt

};
// - bis hier

/*
  keyword = blau
  number = grün
  string = orange
  operator = nix
  variable

"keyword",
                  "operator",
                  "number",
                  "string",
                  "variable",
                  "function",
                  "type"
*/

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

            // Chat: für Semantic Tokens
            semanticTokensProvider: {
              legend: {
                tokenTypes: [
                  "keyword",
                  "operator",
                  "number",
                  "string",
                  "variable",
                  "function",
                  "type"
                ],
                tokenModifiers: []
              },
              full: true,
              range: false
            }
            // - bis hier

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



// connection.onCompletion(
	

// 	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
// 		const document = documents.get(_textDocumentPosition.textDocument.uri);
// 		if (!document) {
// 			console.error("Document not found:", _textDocumentPosition.textDocument.uri);
// 			return [];
// 		}


//         const text = "document.getText()"
//         const chars = new CharStream(text);
//         const lexer = new CiscoIOSLexer(chars);
//         const tokens = new CommonTokenStream(lexer);
//         const parser = new CiscoIOSParser(tokens);
//         const tree = parser.config()
//         tree.accept(new CustomVisitor())

// 		return [
//             {
// 				label: "test1",
// 				kind: CompletionItemKind.Keyword,
// 				insertTextFormat: 2,
// 				insertText: "test123"
// 			}
//         ];
// 	}
// );

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

    const text = document.getText();  // richtig den Text des Dokuments holen
    const chars = new CharStream(text);
    const lexer = new CiscoIOSLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CiscoIOSParser(tokens);
    const tree = parser.config();

    const visitor = new CustomVisitor();
    const visitResult = tree.accept(visitor);
    // console.log("Visitor result:", visitResult);
    
    // console.log(tree.getChildCount());
    
    
    tokens.fill()
    tokens.tokens.forEach((token) => {
      console.log(`Token: type=${token.type}, text='${token.text}', line=${token.line}, column=${token.column}, symbolic=${CiscoIOSParser.symbolicNames[token.type]}`)
    })

    // Hier kannst du visitResult auswerten und z.B. CompletionItems erzeugen.
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

// Chat: Semantic Tokens Zuweisung zu Tokens von ANTLR
const legend = {
  tokenTypes: [
    "keyword",    // 0
    "operator",   // 1 (nicht verwendet hier)
    "number",     // 2
    "string",     // 3 (nicht verwendet hier)
    "variable",   // 4
    "function",   // 5 (nicht verwendet hier)
    "type"        // 6 (nicht verwendet hier)
  ],
  tokenModifiers: []
};

connection.languages.semanticTokens.on((params: SemanticTokensParams) => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return { data: [] };

  const text = document.getText();
  const chars = new CharStream(text);
  const lexer = new CiscoIOSLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  tokens.fill();

  const semanticTokens: number[] = [];
  let lastLine = 0;
  let lastChar = 0;

  for (const token of tokens.tokens) {
    if (token.type <= 0) continue;

    const symbolic = CiscoIOSParser.symbolicNames[token.type];

    let tokenTypeStr = null;
    if (symbolic) tokenTypeStr = tokenTypeMap[symbolic]

    if (!tokenTypeStr) continue;

    const tokenTypeIndex = legend.tokenTypes.indexOf(tokenTypeStr);
    if (tokenTypeIndex === -1) continue;

    const line = token.line - 1;
    const char = token.column;
    const length = token.text.length;

    const deltaLine = line - lastLine;
    const deltaStart = deltaLine === 0 ? char - lastChar : char;

    semanticTokens.push(deltaLine, deltaStart, length, tokenTypeIndex, 0);
    lastLine = line;
    lastChar = char;
  }

  return {
    data: semanticTokens
  };
});
// - bis hier


documents.listen(connection);

connection.listen();



