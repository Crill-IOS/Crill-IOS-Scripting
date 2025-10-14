import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { BANNER_MESSAGE, CiscoIosAstType, COMMENT, IP, IP_cmd_interface, isIP_cmd_interface, isIp_cmd_option_address, Stat, SUBNETMASK, Username_cmd, } from './generated/ast.js';
import type { CiscoIosServices } from './cisco-ios-module.js';
import { AstUtils } from 'langium';

import * as ipaddr from "ipaddr.js";


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
        Stat: validator.check_Stat,

    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class CiscoIosValidator {

    checkIP(ip: IP, accept: ValidationAcceptor): void {
        if (ip.value) {
            const splitIP = String(ip.value).split('.');

            for (const num of splitIP) {
                const ip_number = parseInt(num, 10);

                if (ip_number > 255 || ip_number < 0) {
                    accept("error", "This is not a valid IP-Address", { node: ip, property: 'value' });
                }
            }
        }
    }

    chekcSUBNETMASK(subnetmask: SUBNETMASK, accept: ValidationAcceptor): void {
        if (subnetmask.value) {
            const splitSUBNETMASK = String(subnetmask.value).split('.');
            let sub_binary: string = "";
            for (const num of splitSUBNETMASK) {
                const sub_number = parseInt(num, 10);
                if (sub_number > 255) {

                }
                const sub_number_binary = sub_number.toString(2);
                let temp = sub_number_binary;
                for (let i = 0; i < (8 - sub_number_binary.length); i++) {
                    temp = "0" + temp;
                }
                sub_binary = sub_binary + temp;
            }
            if (sub_binary.match(/10+1/) || sub_binary.length != 32 || !sub_binary.includes("0")) {
                accept("error", "This is not a valid Subnet-Mask", { node: subnetmask, property: 'value' });
            }
        }
    }

    checkUsername_cmd(username_cmd: Username_cmd, accept: ValidationAcceptor): void {
        if (username_cmd.options) {
            let occuredOptions: string[] = [];
            for (const option of username_cmd.options) {
                if (occuredOptions.includes(option.$type)) {
                    accept("error", `Already Defined ${option.$cstNode?.text} (duplicate)`, { node: option });
                } else {
                    occuredOptions.push(option.$type);
                }
            }
        }
    }
    checkBANNER_MESSAGE(BANNER_MESSAGE: BANNER_MESSAGE, accept: ValidationAcceptor): void {
        let message = BANNER_MESSAGE.message.join("");
        const delim1 = message.at(0);
        const delim2 = message.charAt(message.length - 1);

        if (delim1 != delim2) {
            accept("error", `Delimiters ${delim1} and ${delim2} dont match!`, { node: BANNER_MESSAGE });
        } else if (message.substring(1, message.length - 1).includes(delim1) ||
            (message.substring(1, message.length - 1).includes(delim2))) {
            accept("error", `Delimiter (${delim1}) can not be inside MESSAGE`, { node: BANNER_MESSAGE });
        }
    }

    checkCOMMENT(COMMENT: COMMENT, accept: ValidationAcceptor): void {
        if (COMMENT.delim == "!" || COMMENT.delim == "#") {

        } else {
            accept("error", `Delimiter (${COMMENT.delim}) can not be used to initialize a comment!`, { node: COMMENT, property: "delim" })
        }
    }
    check_Stat(script: Stat, accept: ValidationAcceptor): void {

        //all checks that care about more than 1 node
        check_double_ips_Interface(script);
        check_overlapping_ips_Interface(script);

        //all check functions that care about more than 1 node



        /**
         * Checks for duplicate IP addresses within IP_cmd_interface nodes.
         * Reports an error for both the first and subsequent occurrences.
         * 
         * @param script the root node of the ast
         * 
         * @example
         * interface fastethernet 0/0
         * ip address 1.2.3.4 255.255.255.0
         * exit
         * interface gigabitethernet 0/0
         * ip address 1.2.3.4 255.255.255.0
         * exit
         * 
         * ^ this "throws" an "error" since both ips are the same.
         * the function does not care if it is the same or a diffrent interface.
         */
        function check_double_ips_Interface(script: Stat) {
            const seenIPs = new Map<string, IP_cmd_interface>();

            const addresses = AstUtils.streamAllContents(AstUtils.findRootNode(script))
                .filter(e => e.$type === "IP_cmd_interface");

            for (const address of addresses) {
                if (isIP_cmd_interface(address) && isIp_cmd_option_address(address.option)) {
                    const ip = address.option.ip?.value;
                    if (!ip) continue;

                    const existing = seenIPs.get(ip);
                    if (existing) {
                        // Duplicate found: report both
                        accept("error", `Duplicate IP address: ${ip}`, { node: address.option, property: "ip"});
                        accept("error", `Duplicate IP address: ${ip}`, { node: existing.option, property: "ip" });
                    } else {
                        seenIPs.set(ip, address);
                    }
                }
            }
        }




        /**
         * Checks for overlapping IP subnets within IP_cmd_interface nodes.
         * Reports an error for both subnets when overlap is detected.
         * 
         * @param script the root node of the AST
         * 
         * @example
         * interface fastethernet 0/0
         * ip address 1.2.0.1 255.255.0.0
         * exit
         * interface gigabitethernet 0/1
         * ip address 1.2.3.1 255.255.255.0
         * exit
         * 
         * ^ this "throws" an "error" because 1.2.3.0/24 overlaps with 1.2.0.0/16
         */
        function check_overlapping_ips_Interface(script: Stat) {
            const seen: { ip: ipaddr.IPv4 | ipaddr.IPv6; prefix: number; cidr: string; node: IP_cmd_interface }[] = [];

            const addresses = AstUtils.streamAllContents(AstUtils.findRootNode(script))
                .filter(e => e.$type === "IP_cmd_interface");

            for (const address of addresses) {
                if (!isIP_cmd_interface(address) || !isIp_cmd_option_address(address.option)) continue;
                const ipStr = address.option.ip?.value?.trim();
                const maskStr = address.option.mask?.value?.trim();
                if (!ipStr || !maskStr) continue;

                try {
                    const maskBits = maskStr.split(".").map(n => Number(n).toString(2).padStart(8, "0")).join("").indexOf("0");
                    const prefix = maskBits === -1 ? 32 : maskBits;
                    const [ip, len] = ipaddr.parseCIDR(`${ipStr}/${prefix}`);
                    for (const s of seen) {
                        if (ip.kind() !== s.ip.kind()) continue;
                        if (ip.match(s.ip, s.prefix) || s.ip.match(ip, len)) {
                            accept("error", `Overlapping subnet: ${s.cidr} ↔ ${ipStr}/${len}`, { node: address});
                            accept("error", `Overlapping subnet: ${ipStr}/${len} ↔ ${s.cidr}`, { node: s.node});
                        }
                    }
                    seen.push({ ip, prefix: len, cidr: `${ipStr}/${len}`, node: address });
                } catch {
                    accept("error", `Invalid IP or mask: ${ipStr} ${maskStr}`, { node: address.option, property: "ip" });
                }
            }
        }
    }
}