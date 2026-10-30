import codeScreen from './code-screen.jpg'
import networkRack from './network-rack.jpg'
import electronicsShop from './electronics-shop.jpg'
import disassembledLaptop from './disassembled-laptop.jpg'
import romanSkyline from './roman-skyline.jpg'
import portrait from './roberto-portrait.jpg'

export const images = {
  codeScreen,
  networkRack,
  electronicsShop,
  disassembledLaptop,
  romanSkyline,
  portrait,
} as const

export type ImageKey = keyof typeof images
