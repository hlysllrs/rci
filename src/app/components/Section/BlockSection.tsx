import React from 'react'
import InfoBlock from '../Card/InfoBlock'
import { BlockSection } from '@/app/constants/types'

const BlockSection = ({ blocks }: BlockSection) => {
  return (
    <section className="flex w-full h-60">
      {blocks.map((block) => (
        <InfoBlock title={block.title} content={block.content} />
      ))}
    </section>
  )
}

export default BlockSection
