import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { BANNER_MESSAGE, CiscoIosAstType , IP, SUBNETMASK, Username_cmd,} from './generated/ast.js';
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
        Username_cmd: validator.checkUsername_cmd,
        BANNER_MESSAGE: validator.checkBANNER_MESSAGE,
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
            let sub_binary: string = "";
            for (const num of splitSUBNETMASK){
                const sub_number = parseInt(num,10);
                if (sub_number > 255){

                }
                const sub_number_binary = sub_number.toString(2);
                let temp = sub_number_binary;
                for (let i = 0; i<(8-sub_number_binary.length); i++) {
                    temp = "0" + temp;
                }
                sub_binary = sub_binary +temp;
            }
            if (sub_binary.match(/10+1/) || sub_binary.length != 32 || !sub_binary.includes("0")){
                accept("error", "This is not a valid Subnet-Mask", {node: subnetmask, property: 'value'});
            }
        }
    }

    checkUsername_cmd(username_cmd: Username_cmd, accept: ValidationAcceptor):void {
        if(username_cmd.options){
            let occuredOptions:string[]= [];
            for(const option of username_cmd.options){
                if(occuredOptions.includes(option.$type)){
                    accept("error", `Already Defined ${option.$cstNode?.text} (duplicate)`, {node:option});
                }else {
                    occuredOptions.push(option.$type);
                }
            }
        }
    }
    checkBANNER_MESSAGE(BANNER_MESSAGE: BANNER_MESSAGE, accept: ValidationAcceptor):void {
        let message = BANNER_MESSAGE.message.join("");
        const delim1 = BANNER_MESSAGE.delim1.toString().at(0);
        const delim2 = BANNER_MESSAGE.delim2?.toString().charAt(BANNER_MESSAGE.delim2.toString().length-1) || message.charAt(message.length-1);
        const delim2Proofed = (typeof BANNER_MESSAGE.delim2 != "undefined" ? BANNER_MESSAGE.delim2.toString() : "");
        const whole_message = BANNER_MESSAGE.delim1 + message + delim2Proofed;
        console.log(whole_message)
        if (delim1 != delim2){
            accept("error", `Delimiters ${delim1} and ${delim2} dont match!`, {node:BANNER_MESSAGE});
        }else if (whole_message.substring(1,whole_message.length -1 ).includes(delim1) || 
                 (whole_message.substring(1,whole_message.length -1 ).includes(delim2))){
            accept("error", `Delimiter (${delim1}) can not be inside MESSAGE`, {node:BANNER_MESSAGE});
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


