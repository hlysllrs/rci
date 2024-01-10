import { StaticImport } from 'next/dist/shared/lib/get-img-props'

// Data Format Types
export interface PageData {
  [index: string]: TextSection
}

// Section Types
export interface Section {
  background: {
    bgType: keyof typeof BackgroundType
    imageUrl?: string
    color?: keyof typeof BackgroundColor
  }
  variant?: string
  photo?: any
}

export interface TextSection extends Section {
  title: string
  content: BodyContent
}

// Component Data Types
export interface TextLink {
  linkText: string
  url: string
  variant?: string
}

export interface BodyContent {
  text?: string | string[]
  links?: TextLink[]
}

export interface Variants {
  [key: string]: string
}

// Enum Types
export const enum BackgroundType {
  Photo = 'photo',
  Solid = 'solid',
}

export const enum BackgroundColor {
  Black = 'black',
  Red = 'red',
  LightGrey = 'lightgrey',
}

// export interface ImageData {
//   url: string
//   altText: string
// }

// export interface ImageRow {
//   images: ImageData[]
// }
