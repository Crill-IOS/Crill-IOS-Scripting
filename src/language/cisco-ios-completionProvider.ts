import { LangiumDocument, MaybePromise} from "langium";
import { CompletionAcceptor, CompletionContext, DefaultCompletionProvider, NextFeature } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList, CompletionItem } from "vscode-languageserver";
import * as ast from "../../node_modules/langium/lib/languages/generated/ast.js";
import { CiscoIosServices } from "./cisco-ios-module.js";



interface CompletionInfo {
  label: string;
  description: string;
  insert: string;
}
const details: {[key:string]: CompletionInfo} = require("./details/test1.json");

export class CiscoIosCompletionProvider extends DefaultCompletionProvider {

    constructor(private readonly services: CiscoIosServices) {
        super(services);
        this.services;
    }
    

    override async getCompletion(document: LangiumDocument, params: CompletionParams, _cancelToken?: CancellationToken): Promise<CompletionList | undefined> {


        let completions: CompletionItem[] = [];
        const contexts = this.buildContexts(document, params.position);
        
        const acceptor: CompletionAcceptor = (context, value) => {
            const completionItem = this.fillCompletionItem(context, value);
            if (completionItem) {
                completions.push(completionItem);
            }
        };

        console.log("-----------------------------------------------")
        for (const context of contexts){
            for (const feature of context.features){
                this.completionFor(context, feature, acceptor);
            }
        }

        return CompletionList.create(this.deduplicateItems(completions), true);
    }
    

    override completionFor(context: CompletionContext, next: NextFeature, acceptor: CompletionAcceptor): MaybePromise<void> {
        console.log(next);
        console.log("SPLITTER_____________________________________________________________");
        let detail: CompletionInfo;
        if (next.type){
            detail = details[next.type];
            if (detail){
                acceptor(context,{
                    label: detail.label,
                    detail: detail.description,
                    sortText: "1",
                    kind: 1,
                    insertText: detail.insert
                })
            }
        }

        else if (ast.isKeyword(next.feature)) {
            return this.completionForKeyword(context, next.feature, acceptor);
        } else if (ast.isCrossReference(next.feature) && context.node) {
            return this.completionForCrossReference(context, next as NextFeature<ast.CrossReference>, acceptor);
        } else if (ast.isRuleCall(next.feature)){
            if (next.feature.rule.ref?.name == "NL"){
                detail = details["NL"]
                acceptor(context, {
                    label: detail.label,
                    detail: detail.description,
                    sortText: "1",
                    kind: 1,
                    insertText: detail.insert
            })
            }
        }
    }

    override completionForKeyword(context: CompletionContext, keyword: ast.Keyword, acceptor: CompletionAcceptor): MaybePromise<void> {
        if (!this.filterKeyword(context, keyword)) {
            return;
        }
        
        acceptor(context, {
            label: keyword.value,
            kind: this.getKeywordCompletionItemKind(keyword),
            detail: 'Keyword',
            sortText: '1',

        });
    }
}