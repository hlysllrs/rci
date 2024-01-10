import Image from 'next/image'
import InfoSection from '../components/Section/InfoSection'
import InfoBlock from '../components/Section/InfoBlock'
import ServicesHeroImage from 'public/RCI_SERVICES_1.jpg'
import { PageData } from '../constants/types'
// import { SERVICES_DATA } from '../constants'

const SERVICES_DATA: PageData = {
  // HERO INFO SECTION
  info1: {
    title: 'Services',
    content: {
      text: 'Hire Ryan Construction for your precision drilling and blasting needs.',
    },
    background: {
      bgType: 'Photo',
      imageUrl: 'public/RCI_SERVICES_1.jpg',
    },
    variant: 'hero',
  },
  // INFO BLOCK SECTION
  block1: {
    title: 'Precision Blasting',
    content: {
      text: [
        'Ryan Construction Inc. approaches each blast differently. With decades of experience we understand that many factors come into play when approaching a blast site, from the materials used, quantity, and the geological area that the job is performed in; all these factors come into play and more. RCI starts each job by coordinating with safety and site supervisors to lay out the shot pattern to meet the exact needs of our clients.',
        'Ryan Construction Inc. and many of our employees are members of the International Society of Explos ive Engineers (ISEEE), the largest professional association of explosive engineers. ',
      ],

      links: [
        {
          linkText: 'Learn more',
          url: 'https://isee.org/',
        },
        {
          linkText: 'Contact us',
          url: '/contact',
        },
      ],
    },
    background: {
      bgType: 'Solid',
      color: 'LightGrey',
    },
    variant: 'default',
  },
  // INFO BLOCK SECTION
  block2: {
    title: 'Contract Drilling',
    content: {
      text: [
        'At RCI, we understand the importance of precision and efficiency in drilling. That is why we offer top-of-the-line Drilling Services to mining companies all across the state of Texas. Our team of experienced professionals use the latest technology and equipment to ensure that each job is completed safely, efficiently, and with the highest level of accuracy.',
        'Ryan Construction Inc. is your reliable partner for all your drilling needs. We are a trusted name in the drilling industry, providing top-notch services to our clients for Rock Aggregate, Mining, and Construction drilling.',
      ],
      links: [
        {
          linkText: 'Contact us',
          url: '/contact',
        },
      ],
    },
    background: {
      bgType: 'Solid',
      color: 'LightGrey',
    },
    variant: 'default',
  },
}

const Services = () => {
  return (
    <>
      <InfoSection
        title={SERVICES_DATA.info1.title}
        content={SERVICES_DATA.info1.content}
        background={SERVICES_DATA.info1.background}
        variant={SERVICES_DATA.info1.variant}
        photo={ServicesHeroImage}
      />
      <div className="grid grid-cols-1 md:grid-cols-12 w-full justify-between">
        <div className="md:col-span-6">
          <InfoBlock
            title={SERVICES_DATA.block1.title}
            content={SERVICES_DATA.block1.content}
            background={SERVICES_DATA.block1.background}
            variant={SERVICES_DATA.block1.variant}
          />
        </div>
        <Image
          className="md:col-start-7 md:col-end-13 object-cover pointer-events-none grayscale bg-black opacity-95"
          src={ServicesHeroImage}
          alt=""
          priority={true}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 w-full justify-between">
        <div className="md:col-span-6">
          <InfoBlock
            title={SERVICES_DATA.block2.title}
            content={SERVICES_DATA.block2.content}
            background={SERVICES_DATA.block2.background}
            variant={SERVICES_DATA.block2.variant}
          />
        </div>
        <Image
          className="md:col-start-7 md:col-end-13 object-cover pointer-events-none grayscale bg-black opacity-95"
          src={ServicesHeroImage}
          alt=""
          priority={true}
        />
      </div>
    </>
  )
}

export default Services
