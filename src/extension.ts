import * as vscode from 'vscode'

const getWebviewContent = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sync! Sync!</title>
    </head>
    <body>
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="500" />
    </body>
    </html>`;
}

const openSyncPanel = async () => {
  const panel = vscode.window.createWebviewPanel(
    'sync-sync',
    'Sync! Sync!',
    vscode.ViewColumn.One,
    {}
  );

  panel.webview.html = getWebviewContent();
}

const renameWithSync = async () => {
  vscode.window.setStatusBarMessage('renameWithSync')
}

const deleteWithSync = async () => {
  vscode.window.setStatusBarMessage('deleteWithSync')
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('sync-sync-vscode.openSyncPanel', () => openSyncPanel()),
    vscode.commands.registerCommand('sync-sync-vscode.rename', () => renameWithSync()),
    vscode.commands.registerCommand('sync-sync-vscode.delete', () => deleteWithSync()),
  )
}

export function deactivate() {}
