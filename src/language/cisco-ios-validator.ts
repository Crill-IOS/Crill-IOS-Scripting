import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { CiscoIosAstType , Command, Configure_cmd, Script} from './generated/ast.js';
import type { CiscoIosServices } from './cisco-ios-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: CiscoIosServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.CiscoIosValidator;
    const checks: ValidationChecks<CiscoIosAstType> = {
        Script: validator.checkTESTING,
        Command: validator.checkModes
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class CiscoIosValidator {

    checkTESTING(script: Script, accept: ValidationAcceptor): void{
        if(script.script.lines){
            if(script.script.lines.length < 4){
                accept('warning', 'Script should be longer than 3 lines', {node: script, property: 'script'});
            }
        }
    }

    checkModes(commands: Command, accept: ValidationAcceptor): void{
        if(commands.commands?.$type == Configure_cmd){
             accept('error', 'Script has a configure Command', {node: commands, property: 'commands'});
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
