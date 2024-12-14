import React, { useEffect } from 'react'
import { Modal, notification } from 'antd'
import { FaCog } from 'react-icons/fa'
import { PiCheckCircleFill } from 'react-icons/pi'

import { installUpdates, onAutoUpdaterNotify } from '@renderer/apis/ipc/auto-updater'
import { AutoUpdaterMessages } from '@shared/constants'

const { confirm } = Modal

const AutoUpdater: React.FC = () => {
  const [api, contextHolder] = notification.useNotification({
    top: 64,
    placement: 'topRight',
    duration: 0
  })

  useEffect(() => {
    const unSub = onAutoUpdaterNotify((message) => {
      if (message === AutoUpdaterMessages.UPDATE_AVAILABLE) {
        api.info({
          message: 'software-update-available',
          description: 'software-update-message',
          icon: <FaCog />
        })
      }

      if (message === AutoUpdaterMessages.UPDATE_DOWNLOADED) {
        confirm({
          title: 'software-update-ready',
          content: 'Your software update is ready to be installed.',
          icon: <PiCheckCircleFill />,
          okText: 'install-now',
          cancelText: 'install-on-next-launch',
          centered: true,
          onOk: installUpdates
        })
      }
    })

    return (): void => {
      unSub()
    }
  }, [])

  return <>{contextHolder}</>
}

export default AutoUpdater
