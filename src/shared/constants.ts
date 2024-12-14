export enum AutoUpdaterMessages {
  UPDATE_AVAILABLE = 'update-available',
  UPDATE_DOWNLOADED = 'update-downloaded'
}

export const ipcEndpoints = {
  GET_APP_VERSION: 'GET_APP_VERSION',
  UPDATE_THEME: 'UPDATE_THEME',

  // Auto updater
  AUTO_UPDATER: 'AUTO_UPDATER',
  CHECK_FOR_UPDATES: 'CHECK_FOR_UPDATES',
  INSTALL_UPDATE: 'INSTALL_UPDATE',

  GET_PLATFORM: 'GET_PLATFORM'
} as const
