import { LangiumDocument, AstNode} from "langium";
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
        const root: AstNode = document.parseResult.value;
        
 
 
        return {
            isIncomplete: false,
            items: this.getCompletions(root.$type ,this.services)
        }
    }


    getCompletions(type: string, services: CiscoIosServices): CompletionItem[]{

    const index = services.shared.workspace.IndexManager;

    const results: CompletionItem[] = [];

    const elements = index.allElements(type);
    for (const el of elements) {
        results.push({
            label: el.name,
            kind: CompletionItemKind.Keyword,
            detail: type
        });
    }

    return results;
    }
 
    
    

    // getMode(node: CstNode): string{
        
        
    //         if(current.$type ==='Command'){
    //             const command = current as Command;
    //             if(command.commands?.$type === 'Configure_cmd'){
    //                 const configure =command.commands as Configure_cmd;
    //                 if(configure.options.option === 'terminal'){
    //                     return 'configure'
    //                 }
    //             }
    //         }
    //         return 'enable';
    //     }
        
    
}
