interface Link {
  linkText: string
  url: string
}

interface BodyContent {
  text: string | string[]
  link?: Link
}

interface Section {
  title: string
  backgroundImage?: string
  content: BodyContent
}
