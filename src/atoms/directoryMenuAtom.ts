import { IconType } from 'react-icons'
import { TiHome } from 'react-icons/ti'
import { atom } from 'recoil'

export type DirectorymenuItem = {
  displayText: string
  link: string
  icon: IconType
  iconColor: string
  imageURL?: string
}

interface DirectoryMenuState {
  isOpen: boolean
  selectedMenuItem: DirectorymenuItem
}

export const defaultmenuItem: DirectorymenuItem = {
  displayText: 'Home',
  link: '/',
  icon: TiHome,
  iconColor: 'black',
}

export const defaultMenuState: DirectoryMenuState = {
  isOpen: false,
  selectedMenuItem: defaultmenuItem,
}

export const directoryMenuState = atom<DirectoryMenuState>({
  key: 'directoryMenuState',
  default: defaultMenuState,
})
