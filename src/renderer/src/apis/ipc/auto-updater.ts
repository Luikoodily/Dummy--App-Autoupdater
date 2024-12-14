import { AutoUpdaterMessages, ipcEndpoints } from '@shared/constants'

async function checkForAppUpdates(): Promise<void> {
  await window.api.invoke(ipcEndpoints.CHECK_FOR_UPDATES)
}

async function installUpdates(): Promise<void> {
  await window.api.invoke(ipcEndpoints.INSTALL_UPDATE)
}

// Autoupdater Notifications
function onAutoUpdaterNotify(callback: (message: AutoUpdaterMessages) => void): () => void {
  const unsubscribe = window.api.on(ipcEndpoints.AUTO_UPDATER, (message) => {
    if (!Object.values(AutoUpdaterMessages).includes(message as AutoUpdaterMessages)) return
    callback(message as AutoUpdaterMessages)
  })

  return unsubscribe
}

export { checkForAppUpdates, onAutoUpdaterNotify, installUpdates }
