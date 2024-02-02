import React from 'react'
import Image from 'next/image'
import Header from '../Text/Header'
import Body from '../Text/Body'
import LinkText from '../Text/LinkText'
import { TextSection, Variants } from '@/app/constants/types'

const InfoBlock = ({
  title,
  content,
  background,
  photo,
  variant = 'default',
}: TextSection) => {
  const variants: Variants = {
    default: 'bg-lightgrey h-full text-black',
    photo: 'h-[34rem] text-white',
  }

  return (
    <section
      className={`flex flex-col relative px-6 w-full py-6 ${variants[variant]}`}
    >
      {background && background.bgType === 'Photo' ? (
        <Image
          fill={true}
          className="object-cover pointer-events-none z-[-1] grayscale bg-black opacity-25"
          src={photo || background.imageUrl}
          alt=""
          priority={true}
        />
      ) : null}
      <div className="">
        <Header text={title} />
      </div>
      <div className="pt-4">
        <Body text={content.text} />
        {content.links ? (
          <div className="">
            {content.links.map((link, i) => (
              <div key={i}>
                <LinkText
                  url={link.url}
                  linkText={link.linkText}
                  variant={variant === 'highlight' ? 'highlight' : 'default'}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default InfoBlock
