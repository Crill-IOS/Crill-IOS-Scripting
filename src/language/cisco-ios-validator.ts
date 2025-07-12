import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { CiscoIosAstType , Stat} from './generated/ast.js';
import type { CiscoIosServices } from './cisco-ios-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: CiscoIosServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.CiscoIosValidator;
    const checks: ValidationChecks<CiscoIosAstType> = {
        Stat: validator.checkTESTING
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class CiscoIosValidator {

    checkTESTING(script: Stat, accept: ValidationAcceptor): void{
        if(script.commands){
            if(script.commands.length < 4){
                accept('warning', 'Script should be longer than 3 lines', {node: script, property: 'commands'});
            }
        }
    }


    // checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
    //     if (person.name) {
    //         const firstChar = person.name.substring(0, 1);
    //         if (firstChar.toUpperCase() !== firstChar) {
    //             accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
    //         }
    //     }
    // }

}
