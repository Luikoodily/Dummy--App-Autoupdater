// import { ipcEndpoints } from '@shared/constants'
// import type { Platform } from '@shared/types'

// async function getAppVersion(): Promise<string> {
//   const version = await window.api.invoke(ipcEndpoints.GET_APP_VERSION)
//   console.log('------------------:', version) // Logs the app version
//   return version as string
// }

// async function getPlatform(): Promise<Platform> {
//   const platform = await window.api.invoke(ipcEndpoints.GET_PLATFORM)
//   return platform as Platform
// }

// export { getAppVersion, getPlatform }

import { ipcEndpoints } from '@shared/constants'

async function getAppVersion(): Promise<string> {
  const version = await window.api.invoke(ipcEndpoints.GET_APP_VERSION)
  return version as string
}

export { getAppVersion }
