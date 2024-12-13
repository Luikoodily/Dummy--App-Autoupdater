import { create } from 'zustand'

interface AboutState {
  // State
  isOpen: boolean

  // Actions
  openAboutModal: () => void
  closeAboutModal: () => void
}

const useAboutStore = create<AboutState>()((set) => ({
  isOpen: false,
  openAboutModal: (): void => set(() => ({ isOpen: true })),
  closeAboutModal: (): void => set(() => ({ isOpen: false }))
}))

export default useAboutStore
