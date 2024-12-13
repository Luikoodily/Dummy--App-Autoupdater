import { useQuery } from '@tanstack/react-query'
import { getAppVersion } from '@renderer/apis/ipc/app'
// import { queryKeys } from '@renderer/utils/constants/query-keys'

export const useGetAppVersion = (): { appVersion: string; isLoading: boolean } => {
  const { isLoading, data: appVersion } = useQuery({
    queryKey: ['ipc', 'GET_APP_VERSION'],
    queryFn: getAppVersion
  })

  return { appVersion: appVersion || '', isLoading }
}
