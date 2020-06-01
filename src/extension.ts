import * as vscode from 'vscode'

const openSyncPanel = async () => {
  vscode.window.setStatusBarMessage('openSyncPanel')
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
