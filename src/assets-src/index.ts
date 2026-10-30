import circuitMacro from './circuit-macro.jpg'
import switchAndNest from './switch-and-nest.jpg'
import electronicsShop from './electronics-shop.jpg'
import disassembledLaptop from './disassembled-laptop.jpg'
import romanSkyline from './roman-skyline.jpg'
import portrait from './roberto-portrait.jpg'

export const images = {
  circuitMacro,
  switchAndNest,
  electronicsShop,
  disassembledLaptop,
  romanSkyline,
  portrait,
} as const

export type ImageKey = keyof typeof images
