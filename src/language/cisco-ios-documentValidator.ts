import { DefaultDocumentValidator, LangiumDocument, ValidationOptions } from 'langium';
import { Diagnostic } from 'vscode-languageserver-types';

/**
 * Custom DocumentValidator that filters out specific parser errors.
 */
export class CiscoIosDocumentValidator extends DefaultDocumentValidator {
    
    override async validateDocument(
        document: LangiumDocument,
        options?: ValidationOptions
    ): Promise<Diagnostic[]> {
        const diagnostics = await super.validateDocument(document, options);
        
        // Filter out the NL EOF error
        return diagnostics.filter(diagnostic => 
            !this.shouldSuppressDiagnostic(diagnostic)
        );
    }

    /**
     * Determines if a diagnostic should be suppressed.
     * 
     * @param diagnostic The diagnostic to check
     * @returns true if the diagnostic should be suppressed
     */
    private shouldSuppressDiagnostic(diagnostic: Diagnostic): boolean {
        const message = diagnostic.message;
        // Suppress unnecessary parser errors
        if (message.includes("Expecting token of type 'exit' but found ``.")
            || message.includes("but found: ''")
            || message.includes("Expecting token of type 'NL' but found ``.")) {
            return true;
        }
        
        return false;        
    }
}
