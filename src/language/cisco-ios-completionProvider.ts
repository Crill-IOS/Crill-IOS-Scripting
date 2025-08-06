import { AstNode, LangiumDocument, MaybePromise, } from "langium";
import { CompletionAcceptor, CompletionContext, DefaultCompletionProvider, NextFeature } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList} from "vscode-languageserver";
import { CiscoIosServices } from "./cisco-ios-module.js";
import { Interface_type_gigabitethernet, Script, isConfigure_cmds, isEnable_cmds, isExit_cmd,  } from "./generated/ast.js";
import * as ast from "../../node_modules/langium/lib/languages/generated/ast.js";

export class CiscoIosCompletionProvider extends DefaultCompletionProvider {

    constructor(private readonly services: CiscoIosServices) {
        super(services); 
    }


    override async getCompletion(document: LangiumDocument, params: CompletionParams, _cancelToken?: CancellationToken): Promise<CompletionList | undefined> {
        this.services;
        const root: AstNode = document.parseResult.value;
        const contexts = this.buildContexts(document, params.position);
        const mode = this.modeAtPosition(root,params);
        for (const context of contexts){
            for (const feature of context.features){
                if(feature.feature.$type === "Keyword"){
                    //wie bekomme ich den value wenn es ein keyword ist usw
                }
                
            }
        }
        console.log(mode);
        return super.getCompletion(document,params,_cancelToken);

    }

    override completionFor(context: CompletionContext, next: NextFeature, acceptor: CompletionAcceptor): MaybePromise<void> {
        if (ast.isKeyword(next.feature)) {
            return this.completionForKeyword(context, next.feature, acceptor);
        } else if (ast.isCrossReference(next.feature) && context.node) {
            return this.completionForCrossReference(context, next as NextFeature<ast.CrossReference>, acceptor);
        }
        // Don't offer any completion for other elements (i.e. terminals, datatype rules)
        // We - from a framework level - cannot reasonably assume their contents.
        // Adopters can just override `completionFor` if they want to do that anyway.
    }

    override completionForKeyword(context: CompletionContext, keyword: ast.Keyword, acceptor: CompletionAcceptor): MaybePromise<void> {
        if (!this.filterKeyword(context, keyword)) {
            return;
        }
        acceptor(context, {
            label: keyword.value,
            kind: this.getKeywordCompletionItemKind(keyword),
            detail: 'Keyword',
            sortText: '1'
        });
    }
    
    /**
     * returns the mode at the cursor's position
     * @param node root node
     * @param params parameters
     * @returns mode at cursor's position
     */
    private modeAtPosition(node: AstNode, params: CompletionParams):string{
        const script = node as Script;
        const modeStack:string[]  = ["Enable_cmds"];
        
        // if script is empty return "enable"
        if(!script.script){
            return "Enable_cmds";
        }

        const lines = script.script.lines;
        const targetLine = params.position.line;

        // targetLine is the line of the cursor's position
        for (let i = 0; i < lines.length && i < targetLine; i++) {
            let  line = lines[i];

            // check "configure terminal" command
            if (isEnable_cmds(line)) {
                if(line.commands.$type === "Configure_cmd"){
                    if(line.commands.options.option === 'terminal'){
                        modeStack.push('Configure_cmds');
                        continue;
                    }
                }
            }

            // check "interface gigabitethernet/..." command
            if (isConfigure_cmds(line)) {
                if (line.commands.$type === 'Interface_cmd'){

                    //check the diffrent interface modes
                    if (line.commands.types.type ==="gigabitethernet"){
                        const inter = line.commands.types as Interface_type_gigabitethernet;
                        if( inter.$type === 'Interface_type_gigabitethernet'){
                            if(inter.number.number && inter.number.sub){
                                modeStack.push('gigabitethernet_SUB');
                                continue;
                            } else if(inter.number.number){
                                modeStack.push('Interface_cmds');
                                continue;
                            }
                        }
                    }
                }
            }

            // check "exit" command
            if (isExit_cmd(line)) {
                modeStack.pop();
            }
        }

        // return last mode from modeStack or "enable" if modeStack is empty
        return modeStack.pop() ?? "Enable_cmds";
    }
}
