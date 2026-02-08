import { Hover, HoverParams, MarkupContent } from "vscode-languageserver";
import { CstUtils, LangiumDocument, MaybePromise } from "langium";
import { HoverProvider } from "langium/lsp";
import commandDetails from './details/Command_Details.json';

interface CommandDetail {
    label: string;
    description: string;
}

export class CiscoIosHoverProvider implements HoverProvider {

    private commandDetails: Record<string, CommandDetail> = commandDetails;

    constructor(protected services: unknown) {}

    getHoverContent(document: LangiumDocument, params: HoverParams): MaybePromise<Hover | undefined> {
        const rootNode = document.parseResult?.value?.$cstNode;
        if (!rootNode) return undefined;

        const offset = document.textDocument.offsetAt(params.position);
        const leafNode = CstUtils.findLeafNodeAtOffset(rootNode, offset);
        if (!leafNode || leafNode.offset + leafNode.length <= offset) return undefined;

        return this.getHoverFromDetails(leafNode.astNode?.$type);
    }

    private getHoverFromDetails(key: string | undefined): Hover | undefined {
        if (!key) return undefined;
        const detail = this.commandDetails[key];
        if (!detail) return undefined;

        const content: MarkupContent = {
            kind: 'markdown',
            value: `**${detail.label.replaceAll("<", "").replaceAll(">", "")}**\n\n${detail.description}`
        };
        return { contents: content };
    }
}
