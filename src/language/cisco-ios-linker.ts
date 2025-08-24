import { DefaultLinker } from 'langium';
import type { LangiumCoreServices } from 'langium';
import type { AstNodeDescription, LinkingError, ReferenceInfo } from 'langium';

export class CiscoIosLinker extends DefaultLinker {

    constructor(services: LangiumCoreServices) {
        super(services);
    }

    override getCandidate(refInfo: ReferenceInfo): AstNodeDescription | LinkingError {
        const scope = this.scopeProvider.getScope(refInfo);
        const description = scope.getElement(refInfo.reference.$refText);

        if (description) {
            return description;
        }
        
        return this.createSilentLinkingError(refInfo);
    }

    protected createSilentLinkingError(refInfo: ReferenceInfo): LinkingError {
        return {
            ...refInfo,
            message: ''
        };
    }   

    protected override createLinkingError(refInfo: ReferenceInfo): LinkingError {
        return this.createSilentLinkingError(refInfo);
    }
}
