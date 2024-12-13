// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
// import About from './features/about/components/about'
import { useState } from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { Button, Modal, Tooltip } from 'antd'

import { useGetAppVersion } from '@renderer/features/about/api'

function App(): JSX.Element {
  const [show, setShow] = useState<boolean>(false)
  const { appVersion } = useGetAppVersion()

  const closeModal = (): void => {
    setShow(false)
  }
  return (
    <>
      <Tooltip placement="bottom" title={<span className="text-xs m-0 font-light">about</span>}>
        <Button type="primary" onClick={() => setShow(true)} className="px-1.5 text-xl">
          <BsFillInfoCircleFill />
        </Button>
      </Tooltip>

      <Modal title={'about'} open={show} onCancel={closeModal} footer={null}>
        <div className="my-10 px-4 flex items-center justify-center gap-8">
          <div className="text-sm text-ag_dark/50 flex flex-col items-start gap-0.5 pb-8">
            <h1 className="text-2xl text-ag_dark">Autographa Lite</h1>
            <p className="text-center text-gray-500 select-text">
              {'version'} <span className="text-black">{appVersion}</span>
            </p>
            <p>Friends of Agape, Colorado Springs, USA</p>
          </div>
        </div>
      </Modal>
    </>
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <div className="text-center">
    //     <img src={electronLogo} className="h-20 w-auto" alt="Electron logo" />
    //     <div className="text-2xl">Welcome to Electron + React + TypeScript</div>

    //     <div className="text-gray-500">
    //       To get started, create a new project using
    //       <span className="font-bold">
    //         {' '}
    //         <a
    //           href="https://github.com/electron-vite/electron-vite"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           Electron + React + TypeScript
    //         </a>
    //       </span>
    //     </div>
    //   </div>
    // </div>
  )
}
export default App
