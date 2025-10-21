import { SemanticTokenAcceptor, AbstractSemanticTokenProvider } from 'langium/lsp';
import { AstNode } from 'langium';
import { isInterface_types } from './generated/ast.js';

const TOKEN_MAP: Record<string, { type: string; modifier?: string; keyword?: string }> = {
    // Grundkonfig
    Hostname_Input: { type: 'string' },
    USERNAME_INPUT: { type: 'string'},
    BANNER_MESSAGE: { type: 'string' },
    DOMAINNAME_INPUT: { type: 'string' },
    Interface_number: { type: 'string'},
    VERSION_INPUT: { type: 'string'},
    MODULUS_INPUT: { type: 'string'},
    USERNAME_PASSWORD_INPUT: { type: 'string'},
    IP: { type: 'string'},
    SUBNETMASK: { type: 'string'},

    // Allgemein
    COMMON: { type: 'comment'},
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

        const n = node as any
        const cr = n.cr;

        if (cr && cr.$type === 'COMMENT') {
            if (cr.$cstNode) {
                acceptor({
                    cst: cr.$cstNode,
                    type: 'comment'
                });
            }
        }

        const mapping = TOKEN_MAP[node.$type];
        if (!mapping) return;
        
        if (node.$cstNode) {
            acceptor({ cst: node.$cstNode, type: mapping.type})
        } 
    }
}
