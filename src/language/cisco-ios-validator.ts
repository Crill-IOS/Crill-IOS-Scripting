import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { CiscoIosAstType , IP, SUBNETMASK, Username_cmd} from './generated/ast.js';
import type { CiscoIosServices } from './cisco-ios-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: CiscoIosServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.CiscoIosValidator;
    const checks: ValidationChecks<CiscoIosAstType> = {
        IP: validator.checkIP,
        SUBNETMASK: validator.chekcSUBNETMASK,
        Username_cmd: validator.checkUsername_cmd
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class CiscoIosValidator {

    checkIP(ip: IP, accept:ValidationAcceptor): void {
        if(ip.value){
            const  splitIP= String(ip.value).split('.');

            for ( const num of splitIP){
                const ip_number = parseInt(num,10);
                
                if(ip_number > 255 || ip_number < 0 ){
                    accept("error", "This is not a valid IP-Address", {node: ip, property: 'value'});
                }
            }
        }
    }

    chekcSUBNETMASK(subnetmask:SUBNETMASK, accept:ValidationAcceptor):void{
        if(subnetmask.value){
            const splitSUBNETMASK = String(subnetmask.value).split('.');

            for (const num of splitSUBNETMASK){
                const sub_number = parseInt(num,10);
                if(sub_number.toString(2).length !=8){
                    if (sub_number.toString(2) != "0"){
                        accept("error", "This is not a valid SubNet-Maskt", {node: subnetmask, property: "value"});
                    }
                };
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
