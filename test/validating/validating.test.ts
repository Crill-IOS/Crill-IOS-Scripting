import { beforeAll, describe, expect, test } from "vitest";
import { EmptyFileSystem, type LangiumDocument } from "langium";
import { parseHelper } from "langium/test";
import type { Diagnostic } from "vscode-languageserver-types";
import { createCiscoIosServices } from "../../src/language/cisco-ios-module.js";
import { Script, isScript } from "../../src/language/generated/ast.js";

let services: ReturnType<typeof createCiscoIosServices>;
let parse:    ReturnType<typeof parseHelper<Script>>;
let document: LangiumDocument<Script> | undefined;

beforeAll(async () => {
    services = createCiscoIosServices(EmptyFileSystem);
    const doParse = parseHelper<Script>(services.CiscoIos);
    parse = (input: string) => doParse(input, { validation: true });
});

describe('Validating tests', () => {
    test('validate simple configure terminal mode without no ip domain-lookup', async () => {
        document = await parse(`
            configure terminal
            exit
            
        `);

        expect(
            checkParseResult(document) || document?.diagnostics?.map(diagnosticToString)?.join('\n')
        ).toContain(
            "Script does not contain the <no ip domain-lookup> command."
        );
    });

    test('validate simple configure terminal mode', async () => {
        document = await parse(`
            configure terminal
            no ip domain-lookup
            exit

        `);

        expect(
            checkParseResult(document) || document?.diagnostics?.map(diagnosticToString)?.join('\n')
        ).toHaveLength(0);
    });

    test('check capital letter validation', async () => {
        document = await parse(`
            configure terminal
            interface GigabitEthernet 0/0
            ip address 192.168.1.256 255.255.255.0
            no shutdown
            exit

        `);

        expect(
            checkParseResult(document) || document?.diagnostics?.map(diagnosticToString)?.join('\n')
        ).toContain(
            "This is not a valid IP-Address!"
        );
    });
});

function checkParseResult(document: LangiumDocument): string | undefined {
    if (document.parseResult.parserErrors.length > 0) {
        return 'Parser errors: ' + document.parseResult.parserErrors.map(e => e.message).join('\n  ')
    }

    if (document.parseResult.value === undefined) {
        return 'ParseResult is undefined'
    }

    if (!isScript(document.parseResult.value)) {
        return 'Root AST object is a ' + document.parseResult.value.$type + ', expected a ' + Script
    }

    return undefined;   // all checks passed!
}

function diagnosticToString(d: Diagnostic) {
    return d.message;
}
