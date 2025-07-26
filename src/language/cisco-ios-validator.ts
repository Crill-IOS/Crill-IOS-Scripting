import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { CiscoIosAstType , IP, Username_cmd} from './generated/ast.js';
import type { CiscoIosServices } from './cisco-ios-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: CiscoIosServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.CiscoIosValidator;
    const checks: ValidationChecks<CiscoIosAstType> = {
        IP: validator.checkIP,
        Username_cmd: validator.checkUsername_cmd
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class CiscoIosValidator {

    checkIP(ip: IP, accept:ValidationAcceptor): void {
        if(ip.ip){
            const  splitIP= String(ip.ip).split('.')

            for ( const num of splitIP){
                const ip_number = parseInt(num,10);
                
                if(ip_number > 255 || ip_number < 0 ){
                    accept("error", "This is not a valid IP-Address", {node: ip, property: 'ip'});
                }
            }
        }
    }

    checkUsername_cmd(username_cmd: Username_cmd, accept: ValidationAcceptor):void {
        if(username_cmd.options){
            let occuredOptions:string[]= [];
            for(const option of username_cmd.options){
                if(occuredOptions.includes(option.$type)){
                    accept("error", "Already Defined (duplicate)", {node:option});
                }else {
                    occuredOptions.push(option.$type);
                }
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
