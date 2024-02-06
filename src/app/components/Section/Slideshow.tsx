'use client'

import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import image1 from 'public/RCI_HOME_1.jpg'

type PropType = {
  options?: EmblaOptionsType
}

const Slideshow = (props: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="embla__slide">
            <Image src={image1} alt="image1" height={400} />
          </div>
          <div className="embla__slide">
            <Image src={image1} alt="image1" height={400} />
          </div>
          <div className="embla__slide">
            <Image src={image1} alt="image1" height={400} />
          </div>
          <div className="embla__slide">
            <Image src={image1} alt="image1" height={400} />
          </div>
          <div className="embla__slide">
            <Image src={image1} alt="image1" height={400} />
          </div>
        </div>
        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </section>
  )
}

export default Slideshow
