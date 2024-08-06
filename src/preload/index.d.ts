import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    store: {
      get: (key: string) => any
      set: (key: string, val: any) => void
    }
    fs: {
      openFileDialog: () => Promise<string | null>
    }
  }
}
