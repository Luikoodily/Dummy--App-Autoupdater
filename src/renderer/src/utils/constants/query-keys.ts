const queryKeys = {
  // ipc
  ipc: {
    all: ['ipc.invoke'] as const,
    getAppVersion: () => [...queryKeys.ipc.all, 'GET_APP_VERSION'] as const,
    getPlatform: () => [...queryKeys.ipc.all, 'GET_PLATFORM'] as const
  } as const
}

export { queryKeys }
