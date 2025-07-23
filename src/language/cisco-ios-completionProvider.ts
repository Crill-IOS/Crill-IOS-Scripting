import { AstNode, LangiumDocument} from "langium";
import { DefaultCompletionProvider } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList} from "vscode-languageserver";
import { CiscoIosServices } from "./cisco-ios-module.js";
import { Interface_type_gigabitethernet, Script, isConfigure_cmds, isEnable_cmds, isExit_cmd } from "./generated/ast.js";


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
    
    /**
     * returns the mode at the cursor's position
     * @param node root node
     * @param params parameters
     * @returns mode at cursor's position
     */
    private modeAtPosition(node: AstNode, params: CompletionParams):string{
        const script = node as Script;
        const modeStack:string[]  = ["enable"];
        
        // if script is empty return "enable"
        if(!script.script){
            return "enable";
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
                        modeStack.push('configure');
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
                                modeStack.push('gigabitethernet');
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
        return modeStack.pop() ?? "enable";
    }
}
