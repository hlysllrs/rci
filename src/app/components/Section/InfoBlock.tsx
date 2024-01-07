import React from 'react'
import Image from 'next/image'
import Header from '../Text/Header'
import Body from '../Text/Body'
import LinkText from '../Text/LinkText'
import { TextSection } from '@/app/constants/types'

const InfoBlock = ({ title, content, background, photo }: TextSection) => {
  return (
    <section
      className={`flex flex-col relative px-6 w-full h-[34rem] py-6 ${
        background && background.bgType === 'Color'
          ? `bg-${background.color}`
          : null
      }`}
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
      <div className="">
        <Body text={content.text} />
        {content.link && (
          <LinkText url={content.link.url} linkText={content.link.linkText} />
        )}
      </div>
    </section>
  )
}

export default InfoBlock
