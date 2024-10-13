import React, { useCallback, useEffect } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Honeycomb from '../../public/images/icons/Honeycomb'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
  //   emblaApi,
  //   onNavButtonClick
  // )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla bg-[#1c5acb]">
      <div className='absolute space-x-2 px-20 py-7 flex flex-row items-center z-20'>
        <Honeycomb height={22} width={22}/>
        <h3 className="font-display font-semibold text-2xl text-white">Featured</h3>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number z-0">
                <img className="embla__img" src="https://www.doubledtrailers.com/wp-content/uploads/2023/10/random-horse-facts-shareable.png" alt="" />
                
                <div className='absolute flex flex-row gap-3 left-[8vw] bottom-[5vw] z-20'>
                  <p className="font-display text-white text-3xl">
                    Beasiswa Goofy Ahh
                  </p>
                  <p className="font-display text-white text-2xl">
                    |
                  </p>
                  <p className="font-display text-white text-2xl">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              
              </div>
            </div>
          ))}
        </div>

        <div className="embla__controls relative">
          <div className={`absolute top-[calc(-470px/2)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full`}>
            <div className="flex flex-row justify-between">
                <PrevButton onClick={onPrevButtonClick} disabled={false} />
                <NextButton onClick={onNextButtonClick} disabled={false} />
            </div>
          </div>
        </div>
      </div>

      

        {/* <div className="embla__dots bg-blue-200">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      {/* </div> */}

    </section>
  )
}

export default EmblaCarousel
