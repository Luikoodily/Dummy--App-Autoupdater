import { autoUpdater } from 'electron-updater'
import { BrowserWindow, ipcMain } from 'electron'

import { log } from '@main/utils/logger'
import { ipcEndpoints, AutoUpdaterMessages } from '@shared/constants'

autoUpdater.logger = log
// @ts-ignore - Set the log level for the autoUpdater
autoUpdater.logger.transports.file.level = 'info'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const handleAutoUpdater = (mainWindow: BrowserWindow) => {
  ipcMain.handle(ipcEndpoints.INSTALL_UPDATE, () => {
    autoUpdater.quitAndInstall()
  })

  ipcMain.handle(ipcEndpoints.CHECK_FOR_UPDATES, () => {
    autoUpdater.checkForUpdatesAndNotify()
  })

  // Auto updater events
  autoUpdater.on('update-available', () => {
    mainWindow?.webContents.send(ipcEndpoints.AUTO_UPDATER, AutoUpdaterMessages.UPDATE_AVAILABLE)
  })

  autoUpdater.on('update-downloaded', () => {
    mainWindow?.webContents.send(ipcEndpoints.AUTO_UPDATER, AutoUpdaterMessages.UPDATE_DOWNLOADED)
  })
}

export default handleAutoUpdater
