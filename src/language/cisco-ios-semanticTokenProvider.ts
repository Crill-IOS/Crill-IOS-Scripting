import { SemanticTokenAcceptor, AbstractSemanticTokenProvider } from 'langium/lsp';
import { AstNode } from 'langium';
import { isCOMMON } from './generated/ast.js';

/**
 * Contains highlighting information AstNodes
 */
const TOKEN_MAP: Record<string, { type: string; modifier?: string; keyword?: string }> = {
    COMMENT: { type: 'comment' },

    // Texteingaben
    BANNER_MESSAGE: { type: 'string' },
    DOMAINNAME_INPUT: { type: 'string' },    
    DESCRIPTION_INPUT: { type: 'string' },
    USERNAME_PASSWORD_INPUT: { type: 'string' },
    USERNAME_INPUT: { type: 'string' },
    HOSTNAME_INPUT: { type: 'string' },
    ACL_NAME: { type: 'string' },

    // Zahleneingaben
    IP: { type: 'number' },
    SUBNETMASK: { type: 'number' },
    WILDCARDMASK: { type: 'number' },
    
    OSPF_PROCESS_NUMBER: { type: 'number'},
    OSPF_AREA_NUMBER: { type: 'number' },
    OSPF_PASSIVE_INTERFACE_NUMBER: { type: 'number' },
    OSPF_COST_NUMBER: { type: 'number' },
    OSPF_PRIORITY_NUMBER: { type: 'number' },

    VERSION_INPUT: { type: 'number' },
    PRIVILEGE_INPUT: { type: 'number' },
    MODULUS_INPUT: { type: 'number' },

    INTERFACE_NUMBER_INPUT: { type: 'number' },
    NAT_INTERFACE_NUMBER_INPUT: { type: 'number' },

    ACL_PORT_NUMBER: { type: 'number' },
    ACL_STATEMENT_NUMBER: { type: 'number' },
    ACL_NUMBER: { type: 'number' },

    CONSOLE_NUMBER: { type: 'number' },
    VTY_NUMBER: { type: 'number' },
    Line_ExecTimeoutValue: { type: 'number' },
    INTERFACE_SPEED_NUMBER: { type: 'number' },
    INTERFACE_CARRIER_DELAY_NUMBER: { type: 'number' },
    INTERFACE_VLAN_NUMBER: { type: 'number' },
    
    RIP_VERSION_NUMBER: { type: 'number' },
    RIP_PASSIVE_INTERFACE_NUMBER: { type: 'number' },
    BGP_EBGP_MULTIHOP_NUMBER: { type: 'number' },
    BGP_AS_NUMBER: { type: 'number' },
    UPDATE_SOURCE_INTERFACE_NUMBER_INPUT: { type: 'number' },
};

export class CiscoIosSemanticTokenProvider extends AbstractSemanticTokenProvider {
    /**
     * A basic function from langium that highlights an element based on the given acceptor
     * @param node current AstNode
     * @param acceptor 
     * @returns 
     */
    protected override highlightElement(node: AstNode, acceptor: SemanticTokenAcceptor): void {
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
