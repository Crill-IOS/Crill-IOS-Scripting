import { AstNode, LangiumDocument} from "langium";
import { DefaultCompletionProvider } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList} from "vscode-languageserver";
import { CiscoIosServices } from "./cisco-ios-module.js";
import { Interface_type_gigabitethernet, Script, isConfigure_cmds, isEnable_cmds} from "./generated/ast.js";




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
        console.log(this.modeAtPosition(root, params));
        

        return super.getCompletion(document,params,_cancelToken);

    }
    
    
    private modeAtPosition(node: AstNode, params: CompletionParams):string{
        const script = node as Script;
        
        let mode:string[]  = ["enable"];
        
        
        if(!script.script){
            const out = mode.pop();
            if (!out) {
                return "enable";
            }
            return out;
        }

        const lines = script.script.lines;
        const position = params.position

        
        let counter = 0;
        for(const line of lines){
            if (counter >= position.line){
                break
            }
            // check "configure terminal" command
            if(isEnable_cmds(line)) {
                if(line.commands.$type === "Configure_cmd"){
                    if(line.commands.options.option === 'terminal'){
                        mode.push('configure');
                        continue;
                    }
                }
            }

            if (isConfigure_cmds(line)){
                if (line.commands.$type === 'Interface_cmd'){
                    //check the diffrent modes

                    if (line.commands.types.type ==="gigabitethernet"){
                        const inter = line.commands.types as Interface_type_gigabitethernet
                        if( inter.$type === 'Interface_type_gigabitethernet'){
                            if(inter.number.number && inter.number.sub){
                                mode.push('gigabitethernet_SUB');
                            } else if(inter.number.number){
                                mode.push('gigabitethernet');
                            }
                        }
                    }
                }
            }
            
            counter = counter +1;
        }

        const out = mode.pop();
        if(!out){
            return "enable"
        }
        return out;
    }
}
