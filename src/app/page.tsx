import Contact from './contact/page'
// import { HOME_DATA } from './constants'
import InfoSection from './components/Section/InfoSection'
import InfoBlock from './components/Section/InfoBlock'
import { TextSection } from './constants/types'
import HomeHeaderImage from 'public/RCI_HOME_1.jpg'
import HomeDrillImage from 'public/RCI_HOME_DRILL.jpg'

interface HomeData {
  [index: string]: TextSection
}

const HOME_DATA: HomeData = {
  // HERO INFO SECTION
  info1: {
    title: 'Prescision Blasting & Contact Drilling',
    content: {
      text: 'Family owned for over 50 years, we specialize in full service drilling and the application of high explosives for controlled blasting in crushing and excavation of hard rock.',
      link: {
        linkText: 'Learn more',
        url: '/about',
      },
    },
    background: {
      bgType: 'Photo',
      imageUrl: 'public/RCI_HOME_1.jpg',
    },
    variant: 'hero',
  },
  // STANDARD INFO SECTION
  info2: {
    title: 'Experience Makes a Difference',
    content: {
      text: [
        'With many years of combined experience in, our team has developed the expertise needed to provide the construction, mining, and aggregate industry with state-of-the-art solutions to unique challenges.',
        'We develop and maintain long term relationships with our clients by actively listening to their needs to strengthen trust and loyalty.',
        "Our industry experience combined with our understanding of client's needs leads to efficient projects and long term relationships.",
      ],
      link: {
        linkText: 'Contact us',
        url: '/contact',
      },
    },
    background: {
      bgType: 'Photo',
      color: 'Black',
    },
    variant: 'default',
  },
  // INFO BLOCK SECTION
  block1: {
    title: 'Precision Blasting',
    content: {
      link: {
        linkText: 'Learn more',
        url: '/services',
      },
    },
    background: {
      bgType: 'Photo',
      imageUrl: 'public/RCI_HOME_DRILL.jpg',
    },
  },
  block2: {
    title: 'Contract Drilling',
    content: {
      link: {
        linkText: 'Learn more',
        url: '/services',
      },
    },
    background: {
      bgType: 'Photo',
      imageUrl: 'public/RCI_HOME_DRILL.jpg',
    },
  },
  // HIGHIGHT INFO SECTION
  info3: {
    title: "We're Hiring!",
    content: {
      text: 'Qualified Heavy Diesel Mechanics, Lube Technicians, Heavy Haul Truck Drivers, Rock Drillers',
      link: {
        linkText: 'Apply Now',
        url: '/employment',
      },
    },
    background: {
      bgType: 'Color',
      color: 'Red',
    },
    variant: 'highlight',
  },
}

export default function Home() {
  return (
    <>
      {/* HERO INFO SECTION */}
      <InfoSection
        title={HOME_DATA.info1.title}
        content={HOME_DATA.info1.content}
        background={HOME_DATA.info1.background}
        variant={HOME_DATA.info1.variant}
        photo={HomeHeaderImage}
      />

      {/* STANDARD INFO SECTION */}
      <InfoSection
        title={HOME_DATA.info2.title}
        content={HOME_DATA.info2.content}
        background={HOME_DATA.info2.background}
        variant={HOME_DATA.info2.variant}
      />

      {/* INFO BLOCK SECTION */}
      <div className="flex flex-row w-full justify-between">
        <InfoBlock
          title={HOME_DATA.block1.title}
          content={HOME_DATA.block1.content}
          background={HOME_DATA.block1.background}
          photo={HomeDrillImage}
        />
        <InfoBlock
          title={HOME_DATA.block2.title}
          content={HOME_DATA.block2.content}
          background={HOME_DATA.block2.background}
          photo={HomeDrillImage}
        />
      </div>

      {/* HIGHLIGHT INFO SECTION */}
      <InfoSection
        title={HOME_DATA.info3.title}
        content={HOME_DATA.info3.content}
        background={HOME_DATA.info3.background}
        variant={HOME_DATA.info3.variant}
      />

      {/* CONTACT */}
      <Contact />
    </>
  )
}
