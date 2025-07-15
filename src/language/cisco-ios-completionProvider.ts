import { LangiumDocument } from "langium";
import { DefaultCompletionProvider } from "langium/lsp";
import { CompletionParams, CancellationToken, CompletionList } from "vscode-languageserver";




export class CiscoIosCompletionProvider extends DefaultCompletionProvider {
     override async getCompletion(document: LangiumDocument, params: CompletionParams, _cancelToken?: CancellationToken): Promise<CompletionList | undefined> {
        return {
            isIncomplete: false,
            items: []
        };
    }
}
