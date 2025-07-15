import {
    AstNode,
    AstNodeDescription,
    DefaultScopeProvider,
    ReferenceInfo,
    Scope,
    StreamScope,
    stream
} from "langium";

export class CiscoIosScopeProvider extends DefaultScopeProvider {

    override getScope(context: ReferenceInfo): Scope {
        const node = context.container;
        const mode = this.detectMode(node);

        if (mode == 'configure terminal') {
            return new StreamScope(this.getConfigureTerminalCommands());
        }

        return super.getScope(context);
    }

    private detectMode(node: AstNode): string | undefined {
        let current: AstNode | undefined = node;
        while (current) {
            if (current.$type === 'Configure_cmd') {
                const options = (current as any).options?.option;
                if (options === 'terminal') {
                    console.log("works");
                    return 'configure terminal';
                }
            }
            current = current.$container;
        }
        return undefined;
    }

    private getConfigureTerminalCommands() {
        const result: AstNodeDescription[] = [];
        const types = ['Hostname_cmd', 'Interface_cmd'];

        for (const type of types) {
            const elements = this.indexManager.allElements(type);
            for (const item of elements) {
                result.push(item);
            }
        }

        return stream(result);
    }
}
