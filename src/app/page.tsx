import Contact from './contact/page'
import { HOME_DATA } from './constants'
import InfoSection from './components/Section/InfoSection'
import BlockSection from './components/Section/BlockSection'
import HighlightSection from './components/Section/HighlightSection'

export default function Home() {
  return (
    <>
      <InfoSection
        title={HOME_DATA.hero.title}
        content={HOME_DATA.hero.content}
      />
      <InfoSection
        title={HOME_DATA.infoSection.title}
        content={HOME_DATA.infoSection.content}
      />
      <BlockSection blocks={HOME_DATA.blockSection} />
      <InfoSection
        title={HOME_DATA.highlight.title}
        content={HOME_DATA.highlight.content}
      />
      <Contact />
    </>
  )
}
