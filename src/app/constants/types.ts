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
