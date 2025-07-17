import { AstNode, LangiumDocument} from "langium";
import { DefaultCompletionProvider } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList} from "vscode-languageserver";
import { CiscoIosServices } from "./cisco-ios-module.js";
import { Script } from "./generated/ast.js";




export class CiscoIosCompletionProvider extends DefaultCompletionProvider {

    constructor(private readonly services: CiscoIosServices) {
        super(services); 
    }


    override async getCompletion(document: LangiumDocument, params: CompletionParams, _cancelToken?: CancellationToken): Promise<CompletionList | undefined> {
        this.services;
        // return {
        //     isIncomplete: false,
        //     items: []
        // }
        const root: AstNode = document.parseResult.value;
        this.modeAtPosition(root, params);


        return super.getCompletion(document,params,_cancelToken);

    }
    
    
    private modeAtPosition(node: AstNode, params: CompletionParams){
        const script = node as Script;
        const lines = script.script.lines;

        console.log("HERE____________________________________")
        console.log(lines);
    }
}
