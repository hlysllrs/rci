import HeroSection from '../components/Section/HeroSection'

import { PROJECTS_DATA } from '../constants'

const Projects = () => {
  return (
    <div>
      <HeroSection
        title={PROJECTS_DATA.hero.title}
        description={PROJECTS_DATA.hero.description}
      />
    </div>
  )
}

export default Projects
