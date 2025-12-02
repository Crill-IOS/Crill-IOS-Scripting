import { SemanticTokenAcceptor, AbstractSemanticTokenProvider } from 'langium/lsp';
import { AstNode } from 'langium';
import { isCOMMON, isInterface_types } from './generated/ast.js';

/**
 * Contains highlighting information AstNodes
 */
const TOKEN_MAP: Record<string, { type: string; modifier?: string; keyword?: string }> = {
    // Allgemein
    COMMON: { type: 'comment'},
    COMMENT: { type: 'comment' },

    // Grundkonfig
    HOSTNAME_INPUT: { type: 'string' },
    USERNAME_INPUT: { type: 'string'},
    BANNER_MESSAGE: { type: 'string' },
    DOMAINNAME_INPUT: { type: 'string' },
    Interface_number: { type: 'string'},
    VERSION_INPUT: { type: 'string'},
    MODULUS_INPUT: { type: 'string'},
    PRIVILEGE_INPUT: { type: 'string'},
    USERNAME_PASSWORD_INPUT: { type: 'string'},
    IP: { type: 'string'},
    SUBNETMASK: { type: 'string'},
    WILDCARDMASK: { type: 'string' },
    OSPF_AREA_NUMBER: { type: 'string'},
    
    // zukünftig
    OSPF_PROCESS_NUMBER: { type: 'number'},
};

export class CiscoIosSemanticTokenProvider extends AbstractSemanticTokenProvider {
    /**
     * A basic function from langium that highlights an element based on the given acceptor
     * @param node current AstNode
     * @param acceptor 
     * @returns 
     */
    protected override highlightElement(node: AstNode, acceptor: SemanticTokenAcceptor): void {
        // Highlights interface types like 'gigabitethernet'
        if (isInterface_types(node)) {
            acceptor({
                node,
                property: 'type',
                type: 'variable',
            })
            return
        }
        
        // Highlights comments written after commands
        if (isCOMMON(node)) {
            if (node.$type == "COMMENTLINE" && node.$cstNode) {
                acceptor({
                    cst: node.$cstNode,
                    type: 'comment'
                })
            }
        }

        // Gets highlighting-information from map for current AstNode
        const mapping = TOKEN_MAP[node.$type];
        
        // If no highlighting-information exists then skip current AstNode
        if (!mapping) return;
        
        // If highlighting-information exists and a CstNode exists then highlight the CstNode
        // CstNode is used instead of AstNode, because the CstNode contains text information like start- and endposition
        if (node.$cstNode) {
            acceptor({ cst: node.$cstNode, type: mapping.type})
        } 
    }
}
