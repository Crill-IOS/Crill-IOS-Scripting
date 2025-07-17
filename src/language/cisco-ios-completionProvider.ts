import { LangiumDocument} from "langium";
import { DefaultCompletionProvider } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList, CompletionItem , CompletionItemKind} from "vscode-languageserver";
import { CiscoIosServices } from "./cisco-ios-module.js";
//import { CstUtils } from "langium";
// import { CompletionItem } from "vscode/vscode/vs/editor/common/languages";
//import * as ast from './generated/ast.js';



export class CiscoIosCompletionProvider extends DefaultCompletionProvider {

    constructor(private readonly services: CiscoIosServices) {
        super(services); 
    }


    override async getCompletion(document: LangiumDocument, params: CompletionParams, _cancelToken?: CancellationToken): Promise<CompletionList | undefined> {
        this.services;
        return {
            isIncomplete: false,
            items: []
        }
    }   
}
