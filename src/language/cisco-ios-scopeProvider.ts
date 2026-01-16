import {
    DefaultScopeProvider,
    ReferenceInfo,
    Scope,
} from "langium";

export class CiscoIosScopeProvider extends DefaultScopeProvider {

    override getScope(context: ReferenceInfo): Scope {
        return super.getScope(context);
    }

    
}
