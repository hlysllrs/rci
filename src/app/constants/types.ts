import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface TextLink {
  linkText: string
  url: string
  variant?: string
}

export interface BodyContent {
  text?: string | string[]
  link?: TextLink
}

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

export interface Variants {
  [key: string]: string
}

export const enum BackgroundType {
  Photo = 'photo',
  Color = 'color',
}

export const enum BackgroundColor {
  Black = 'black',
  Red = 'red',
  LightGrey = 'lightGrey',
}

export interface BlockSection {
  blocks: TextSection[]
}

export interface ImageData {
  url: string
  altText: string
}

export interface ImageRow {
  images: ImageData[]
}
