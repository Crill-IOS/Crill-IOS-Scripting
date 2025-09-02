/**
 * angeblich werden scopes standardmaessing nuer für das resolven von crossrefrences verwendet und sonnt wird er nicht aufgerufen
 * ^ bestätigt (getestet)
 * FIXEN
 */



import {
    DefaultScopeProvider,
    ReferenceInfo,
    Scope,
} from "langium";

export class CiscoIosScopeProvider extends DefaultScopeProvider {

    override getScope(context: ReferenceInfo): Scope {
        console.log("getting scope!")
        return super.getScope(context);
    }

    
}
