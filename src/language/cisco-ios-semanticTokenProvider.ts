import { SemanticTokenAcceptor, AbstractSemanticTokenProvider } from 'langium/lsp';
import { AstNode } from 'langium';
import { isInterface_types } from './generated/ast.js';

const TOKEN_MAP: Record<string, { type: string; modifier?: string; keyword?: string }> = {
    // Grundkonfig
    HOSTNAME_INPUT: { type: 'number' },
    USERNAME_INPUT: { type: 'number'},
    BANNER_MESSAGE: { type: 'number' },
    DOMAINNAME_INPUT: { type: 'number' },
    Interface_number: { type: 'number'},
    VERSION_INPUT: { type: 'number'},
    MODULUS_INPUT: { type: 'number'},
    USERNAME_PASSWORD_INPUT: { type: 'number'},
    IP: { type: 'number'},
    SUBNETMASK: { type: 'number'},

    // Allgemein
    COMMENT: { type: 'comment'},

    // zukünftig
    OSPF_PROCESS_NUMBER: { type: 'number'},

};

export class CiscoIosSemanticTokenProvider extends AbstractSemanticTokenProvider {
    protected override highlightElement(node: AstNode, acceptor: SemanticTokenAcceptor): void {
        if (isInterface_types(node)) {
            acceptor({
                node,
                property: 'type',
                type: 'variable',
            })
            return
        }

        const mapping = TOKEN_MAP[node.$type];
        if (!mapping) return;
        if (node.$cstNode) {
            acceptor({ cst: node.$cstNode, type: mapping.type})
        }
    }

}
