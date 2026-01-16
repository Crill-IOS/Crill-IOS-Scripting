import { beforeAll, describe, expect, test } from "vitest";
import { EmptyFileSystem, type LangiumDocument } from "langium";
import { parseHelper } from "langium/test";
import { createCiscoIosServices } from "../../src/language/cisco-ios-module.js";
import { Script, isScript } from "../../src/language/generated/ast.js";

let services: ReturnType<typeof createCiscoIosServices>;
let parse:    ReturnType<typeof parseHelper<Script>>;
let document: LangiumDocument<Script> | undefined;

beforeAll(async () => {
    services = createCiscoIosServices(EmptyFileSystem);
    parse = parseHelper<Script>(services.CiscoIos);
});

describe('Parsing tests', () => {

    test('parse simple configure terminal mode', async () => {
        document = await parse(`
            configure terminal
            exit

        `);

        expect(checkParseResult(document)).toBeUndefined();
    });

    test('parse interface configuration', async () => {
        document = await parse(`
            configure terminal
            interface GigabitEthernet 0/0
            ip address 192.168.1.1 255.255.255.0
            no shutdown
            exit
            
        `);
        
        expect(checkParseResult(document)).toBeUndefined();
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
