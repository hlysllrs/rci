import { ImageRow } from '@/app/constants/types'
import Image from 'next/image'
import React from 'react'

const ImageSection = ({ images }: ImageRow) => {
  return (
    <div>
      {images.map((image) => (
        <Image src={image.url} alt={image.altText} height={100} width={100} />
      ))}
    </div>
  )
}

export default ImageSection
