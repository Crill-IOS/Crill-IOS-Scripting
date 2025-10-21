import type { ValidationAcceptor, ValidationChecks } from 'langium';
import {
    BANNER_MESSAGE, CiscoIosAstType, IP, IP_cmd_interface, isIP_cmd_interface, Ip_cmd_option_address,
    isIp_cmd_option_address, Stat, SUBNETMASK, Username_cmd, Generate_cmd
} from './generated/ast.js';
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
        Stat: validator.check_Stat,
        Generate_cmd: validator.checkGenerate_cmd,

    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class CiscoIosValidator {

    /**
     * @description
     * checks if a IPv4 address is a valid address
     * 
     * @example
     * 1.1.256.1
     * ^this throws an error since <1.1.256.1> is not a valid IPv4 address
     * 
     * @param ip an ip from a document
     * @param accept the acceptor
     * @todo
     * implement IPv6 support (or create a new check)
     */
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
    /**
     * @description
     * checks if a IPv4 subentmask is a valid subnetmask
     * 
     * @example
     * 255.255.255.1
     * ^this throws an error since <255.255.255.1> is not a valid subnetmask
     * 
     * @param subnetmask a SUBNETMASK from a document
     * @param accept the acceptor
     * @todo
     * 14.10.2025
     * implement IPv6 support (or create a new check)
     */
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
    /**
     * @description
     * checks if a username has the same option one or more times
     * 
     * @param username_cmd username from a document
     * @param accept the acceptor
     * 
     * @example 
     * "username gustav privilege 15 privilege 0"
     * ^this throws an error since the option <privilege> appears twice
     * 
     * @todo
     * 14.10.2025
     * implement that "secret" or "password" has to
     *  be at the end of the command (or maybe implement it in the grammar)
     */
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

    /**
     * @description
     * checks if the banner message has matching
     * delimiters and if the delimiter is part of the message
     * 
     * @param BANNER_MESSAGE Banner message node from a document
     * @param accept the acceptor
     * 
     * @example
     * 
     * #this is a banner message!
     * ^this throws an error since <#> != <!>
     * 
     * #this is message #2!#
     * ^this thows an error since delim: <#> is inside the message 
     */
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

    checkGenerate_cmd(generate: Generate_cmd, accept: ValidationAcceptor):void {
        //gets all the ip domain name commands
        const ip_domain_name = AstUtils.streamAllContents(AstUtils.findRootNode(generate))
                .filter(e => e.$type === "Domainname_cmd");
        //gets all teh hostname commands
        const hostnames = AstUtils.streamAllContents(AstUtils.findRootNode(generate))
                .filter(e => e.$type === "Hostname_cmd");

        if (hostnames.count() < 1){
            accept("error", `Set a hostname before generating keys!`,{node:generate})
        }
        if (ip_domain_name.count() < 1){
            accept("error", `Set a domain-name before generating keys!`,{node:generate})
        }
        console.log(`hostname: ${hostnames.count()} domain-name ${ip_domain_name.count()}`)
    }


    /**
     * @description
     * contains all checks that need a scope of a whole document
     * 
     * @param script the "Stat" node found in grammar "cisco-ios.langium"
     * @param accept the acceptor
     */
    check_Stat(script: Stat, accept: ValidationAcceptor): void {

        //all checks that care about more than 1 node
        check_double_ips_Interface(script);
        check_overlapping_ips_Interface(script);
        check_if_script_contains_no_ip_domain_lookup(script);



        /**
         * @description
         * checks if the script contains the <no ip domain-lookup> 
         * at least once and not more than once
         * 
         * throws a hint if the scrpt doesnt contain the command
         * throws a waring if the script contains it more than once 
         * 
         * @param script the "Stat" node found in grammar "cisco-ios.langium"
         */
        function check_if_script_contains_no_ip_domain_lookup(script: Stat) {
            const cmds = AstUtils.streamAllContents(AstUtils.findRootNode(script))
                .filter(e => e.$type === "No_ip_cmd_option_domain_lookup");

            if (cmds.count() > 1) {
                for (let cmd of cmds) {
                    accept("warning", "Script contains the <no ip domain-lookup> more than once.", { node: cmd })
                }
            }
            else if (cmds.count() <= 0) {
                accept("hint", "Script does not contain the <no ip domain-lookup> command.", { node: script.lines[0] })
            }
        }



        /**
         * @description
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
                        accept("error", `Duplicate IP address: ${ip}`, { node: address.option, property: "ip" });
                        accept("error", `Duplicate IP address: ${ip}`, { node: existing.option as Ip_cmd_option_address, property: "ip" });
                    } else {
                        seenIPs.set(ip, address);
                    }
                }
            }
        }


        /**
         * @description
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
                            accept("error", `Overlapping subnet: ${s.cidr} ↔ ${ipStr}/${len}`, { node: address });
                            accept("error", `Overlapping subnet: ${ipStr}/${len} ↔ ${s.cidr}`, { node: s.node });
                        }
                    }
                    seen.push({ ip, prefix: len, cidr: `${ipStr}/${len}`, node: address });
                } catch {
                    //no lsp error handling yet (14.10.2025)
                }
            }
        }
    }
}