import InfoSection from '../components/Section/InfoSection'
import Timeline from '../components/Section/Timeline'
import AboutHeroImage from 'public/RCI_ABOUT_1.jpg'
import AboutImage2 from 'public/RCI_ABOUT_2.jpg'
import { PageData } from '../constants/types'
import Image from 'next/image'
// import { ABOUT_DATA } from '../constants'

const ABOUT_DATA: PageData = {
  // HERO INFO SECTION
  info1: {
    title: 'We Have the Experience',
    content: {
      text: 'Ryan Construction, Inc. has had 54 continuous years of successful operation and expansion in the drilling and blasting field. Our goal is to provide superior service through up to date methods and equipment.',
    },
    background: {
      bgType: 'Photo',
      imageUrl: 'public/RCI_ABOUT_1.jpg',
    },
    variant: 'hero',
  },
  // TIMELINE SECTION
  // timeline: {
  //   title: 'Our Story',
  // },
}

const About = () => {
  return (
    <>
      {/* HERO INFO SECTION */}
      <InfoSection
        title={ABOUT_DATA.info1.title}
        content={ABOUT_DATA.info1.content}
        background={ABOUT_DATA.info1.background}
        variant={ABOUT_DATA.info1.variant}
        photo={AboutHeroImage}
      />
      <div className="flex flex-row justify-between h-full w-full bg-lightgrey">
        <div className="w-1/3 ml-6 my-6 mr-2">
          <Image src={AboutImage2} alt="" priority={true} />
        </div>
        <div className="w-1/3 my-6 mx-2">
          <Image src={AboutImage2} alt="" priority={true} />
        </div>
        <div className="w-1/3 ml-2 mr-6 my-6">
          <Image src={AboutImage2} alt="" priority={true} />
        </div>
      </div>
      <Timeline />
    </>
  )
}

export default About
