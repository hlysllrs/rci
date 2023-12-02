export interface TextLink {
  linkText: string
  url: string
}

export interface BodyContent {
  text?: string | string[]
  link?: TextLink
}

export interface TextSection {
  title: string
  backgroundImage?: string
  content: BodyContent
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
