import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { BANNER_MESSAGE, CiscoIosAstType , COMMENT, IP, IP_cmd_interface, isIP_cmd_interface, isIp_cmd_option_address, Stat, SUBNETMASK, Username_cmd,} from './generated/ast.js';
import type { CiscoIosServices } from './cisco-ios-module.js';
import { AstUtils } from 'langium';



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
        COMMENT: validator.checkCOMMENT,
        Stat: validator.check_for_double_IPs,

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
        const delim1 = message.at(0);
        const delim2 = message.charAt(message.length-1);
        
        if (delim1 != delim2){
            accept("error", `Delimiters ${delim1} and ${delim2} dont match!`, {node:BANNER_MESSAGE});
        }else if (message.substring(1,message.length -1 ).includes(delim1) || 
                 (message.substring(1,message.length -1 ).includes(delim2))){
            accept("error", `Delimiter (${delim1}) can not be inside MESSAGE`, {node:BANNER_MESSAGE});
        }
    }

    checkCOMMENT(COMMENT: COMMENT, accept: ValidationAcceptor):void {
        if (COMMENT.delim ==  "!" || COMMENT.delim == "#"){

        }else{
            accept("error", `Delimiter (${COMMENT.delim}) can not be used to initialize a comment!`,{node:COMMENT, property: "delim"})
        }
    }
    check_for_double_IPs(script: Stat, accept: ValidationAcceptor): void{
        let ipHistory:string[] = [];
        let commandHistory: IP_cmd_interface[] = [];
        const addresses = 
        AstUtils.streamAllContents(AstUtils.findRootNode(script))
        .filter(e => e.$type == "IP_cmd_interface" )
        
        console.log(addresses + "address")
        for (let address of addresses){
            console.log("here")
            if (isIP_cmd_interface(address) && isIp_cmd_option_address(address.option)){
                const ip = address.option.ip?.value
                if (ipHistory.includes(ip)){
                    let pos =ipHistory.lastIndexOf(ip)
                    accept("error", `Duplicate ip address ${ip}`,{node:address.option, property: "ip",})
                    let old = commandHistory[pos];
                    if (old){
                        accept("error", `duplicate ip address ${ip}`, {node:old.option, property: "ip"})
                    }
                    
                }else {
                    ipHistory.push(ip);
                    commandHistory.push(address);
                }
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


