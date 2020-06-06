import * as vscode from 'vscode'
import * as path from 'path'
import { generateNonce } from './utils'

const getWebviewContent = (webview: vscode.Webview, extensionPath: string) => {
  // Load local (extension) resource.
  const scriptPathOnDisk = vscode.Uri.file(
    path.join(extensionPath, 'dist', 'views.js')
  );
  // Load resource with `vscode-resource:` scheme URI.
  const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
  // Generate nonce for CSP.
  const nonce = generateNonce();
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">
        <title>Sync! Sync!</title>
    </head>
    <body>
        <div id="root"></div>
        <script nonce="${nonce}" src="${scriptUri}"></script>
    </body>
    </html>`;
}

const openSyncPanel = async (extensionPath: string) => {
  const panel = vscode.window.createWebviewPanel(
    'sync-sync',
    'Sync! Sync!',
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.file(path.join(extensionPath, 'dist')),
      ],
    },
  );

  panel.webview.html = getWebviewContent(panel.webview, extensionPath);
}

const renameWithSync = async () => {
  vscode.window.setStatusBarMessage('renameWithSync')
}

const deleteWithSync = async () => {
  vscode.window.setStatusBarMessage('deleteWithSync')
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('sync-sync-vscode.openSyncPanel', () => openSyncPanel(context.extensionPath)),
    vscode.commands.registerCommand('sync-sync-vscode.rename', () => renameWithSync()),
    vscode.commands.registerCommand('sync-sync-vscode.delete', () => deleteWithSync()),
  )
}

export function deactivate() {}
