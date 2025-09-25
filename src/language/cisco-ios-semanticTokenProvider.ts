import { SemanticTokenAcceptor, AbstractSemanticTokenProvider } from 'langium/lsp';
import { AstNode } from 'langium';

const TOKEN_MAP: Record<string, { type: string; modifier?: string; keyword?: string }> = {
    Comment: { type: 'comment' },

    Hostname_Input: { type: 'variable', modifier: 'declaration' },
    USERNAME_INPUT: { type: 'string', modifier: 'declaration' },
    BANNER_MESSAGE: { type: 'string' },
    DOMAINNAME_INPUT: { type: 'variable' },
    INPUT: { type: 'variable' },

    INT: { type: 'number' },
    VERSION_INPUT: { type: 'number' },
    MODULUS_INPUT: { type: 'number' },

    IP: { type: 'variable', modifier: 'readonly' },
    SUBNETMASK: { type: 'variable', modifier: 'readonly' },
    Interface_number: { type: 'number'},

    Username_cmd_option: { type: 'variable', modifier: 'declaration' },
};

export class CiscoIosSemanticTokenProvider extends AbstractSemanticTokenProvider {
    protected override highlightElement(node: AstNode, acceptor: SemanticTokenAcceptor): void {
        const mapping = TOKEN_MAP[node.$type];
        if (!mapping) return;

        if (mapping.type === 'keyword') {
            const keywordText = mapping.keyword ?? node.$cstNode?.container?.content?.[0]?.text;
            if (keywordText) {
                acceptor({ node, keyword: keywordText, type: 'keyword' });
            }
        } else if (mapping.type === 'function') {
            const firstToken = node.$cstNode?.container?.content?.[0];
            if (firstToken) {
                acceptor({ cst: firstToken, type: 'function', modifier: mapping.modifier });
            }
        } else if (node.$cstNode) {
            acceptor({ cst: node.$cstNode, type: mapping.type, modifier: mapping.modifier });
        }
    }

}
