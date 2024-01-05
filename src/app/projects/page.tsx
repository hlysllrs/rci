import InfoSection from '../components/Section/InfoSection'

import { PROJECTS_DATA } from '../constants'

const Projects = () => {
  return (
    <div>
      <InfoSection
        title={PROJECTS_DATA.hero.title}
        content={PROJECTS_DATA.hero.content}
      />
    </div>
  )
}

export default Projects
