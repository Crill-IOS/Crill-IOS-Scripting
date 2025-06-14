import * as path from 'path';
import { workspace, ExtensionContext, commands, window} from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';


let client: LanguageClient;

export function activate(context: ExtensionContext) {

    const disposable = commands.registerCommand('lcs.helloWorld', () => {
        window.showInformationMessage('Hello World from CLS!');
    });

    const serverModule = context.asAbsolutePath(
        path.join('dist','server.js')
    );

    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc},
        debug: { module: serverModule, transport: TransportKind.ipc}
    }

    const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'cls' }],
		synchronize: {
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

    client = new LanguageClient(
		'languageServer',
		'Language Server',
		serverOptions,
		clientOptions
	);

    client.start();
	console.log('Congratulations, your extension "cls" is now active!');
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}