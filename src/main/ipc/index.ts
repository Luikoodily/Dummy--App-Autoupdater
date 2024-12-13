import { app, BrowserWindow, ipcMain } from 'electron'
import handleAutoUpdater from './auto-updater'
import type { Platform } from '@shared/types'
import { ipcEndpoints } from '@shared/constants'
import { isLinux, isMac, isWindows } from '@main/utils/helpers/platform'

function handleIpc(mainWindow: BrowserWindow): void {
  // GET APP VERSION
  ipcMain.handle(ipcEndpoints.GET_APP_VERSION, () => app.getVersion())

  // GET PLATFORM
  ipcMain.handle(ipcEndpoints.GET_PLATFORM, (): Platform => {
    if (isWindows) return 'windows'
    if (isMac) return 'mac'
    if (isLinux) return 'linux'
    return 'unknown'
  })

  handleAutoUpdater(mainWindow)
}

export default handleIpc
