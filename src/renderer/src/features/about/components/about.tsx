import { Modal } from 'antd'

import useAboutStore from '..//../store/about-store'
import { useGetAppVersion } from '../api/index'

const details = {
  COMPANY_NAME: 'Geneza Solutions Pvt. Ltd.'
}

const About = (): JSX.Element => {
  const isOpen = useAboutStore((s) => s.isOpen)
  const closeAboutModal = useAboutStore((s) => s.closeAboutModal)

  const { appVersion } = useGetAppVersion()

  return (
    <Modal title={'about'} open={isOpen} onCancel={closeAboutModal} footer={null}>
      <div className="px-4 py-8">
        <div className="flex flex-col items-center gap-4"></div>

        <div className="mt-8 flex flex-col items-center gap-1">
          <p className="text-center text-gray-500 select-text">
            {'version'} <span className="text-black">{appVersion}</span>
          </p>
          <p className="text-center text-black select-text">{details.COMPANY_NAME}</p>
        </div>
      </div>
    </Modal>
  )
}

export default About
