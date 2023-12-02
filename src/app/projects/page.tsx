import HeroSection from '../components/Section/HeroSection'

import { PROJECTS_DATA } from '../constants'

const Projects = () => {
  return (
    <div>
      <HeroSection
        title={PROJECTS_DATA.hero.title}
        content={PROJECTS_DATA.hero.content}
      />
    </div>
  )
}

export default Projects
