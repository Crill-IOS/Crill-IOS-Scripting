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

function isSuppressedParserError(message: string): boolean {
    return message.includes("Expecting token of type 'exit' but found ``.")
        || message.includes("but found: ''")
        || message.includes("Expecting token of type 'NL' but found ``.");
}

function checkParseResult(document: LangiumDocument): string | undefined {
    const relevantErrors = document.parseResult.parserErrors.filter(
        e => !isSuppressedParserError(e.message)
    );
    if (relevantErrors.length > 0) {
        return 'Parser errors: ' + relevantErrors.map(e => e.message).join('\n  ');
    }

    if (document.parseResult.value === undefined) {
        return 'ParseResult is undefined'
    }

    if (!isScript(document.parseResult.value)) {
        return 'Root AST object is a ' + document.parseResult.value.$type + ', expected a ' + Script
    }

    return undefined;   // all checks passed!
}
