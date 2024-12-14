import { contextBridge, ipcRenderer, type IpcRendererEvent } from 'electron'

// Custom APIs for renderer
const api = {
  send(channel: string, value?: unknown): void {
    ipcRenderer.send(channel, value)
  },
  on(channel: string, callback: (...args: unknown[]) => void): () => void {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]): void => callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
  async invoke(channel: string, ...args: unknown[]): Promise<unknown> {
    return await ipcRenderer.invoke(channel, ...args)
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.api = api
}
