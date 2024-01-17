import React from 'react'
import Image from 'next/image'
import Header from '../Text/Header'
import Body from '../Text/Body'
import LinkText from '../Text/LinkText'
import { TextSection, Variants } from '@/app/constants/types'

const InfoSection = ({
  title,
  content,
  background,
  variant = 'default',
  photo,
}: TextSection) => {
  const variants: Variants = {
    hero: 'h-[36rem] pt-40 pb-4',
    default: 'h-96 py-6 bg-black',
    highlight: 'h-40 py-6 bg-red',
    resWhite: 'bg-white pb-8',
    resGrey: 'bg-lightgrey pb-8',
  }

  return (
    <section
      className={`grid grid-cols-1 lg:grid-cols-12 relative px-6 w-full ${
        variants[variant]
      } ${
        background && background.bgType === 'Solid'
          ? `bg-${background.color}`
          : null
      }`}
    >
      {background && background.bgType === 'Photo' ? (
        <Image
          fill={true}
          className="object-cover pointer-events-none z-[-1] grayscale bg-black opacity-25"
          src={photo}
          alt=""
          priority={true}
        />
      ) : null}
      <div className="lg:col-span-7 h-full">
        <Header
          text={title}
          variant={variant === 'hero' ? 'hero' : 'default'}
        />
      </div>
      <div className="lg:col-start-8 lg:col-end-13 h-full">
        {content.text ? <Body text={content.text} /> : null}
        {content.links ? (
          <div className="">
            {content.links.map((link, i) => (
              <LinkText
                url={link.url}
                linkText={link.linkText}
                variant={variant === 'highlight' ? 'highlight' : 'default'}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default InfoSection
