import React, { useEffect, useRef, useState } from 'react'
import ReviewInstance from './ReviewInstance'

const Reviews = () => {

  /* ------------------------------- For Scroll ------------------------------- */
  const scrollRef = useRef(null)

  const scrollLeft = (x) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - x,
        behavior: 'smooth'
      });
    }
  }

  const scrollRight = (x) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + x,
        behavior: 'smooth'
      });
    }
  }

  /* ------------------------------- Review List ------------------------------ */
  const[idx, setIdx] = useState(0)

  const[reviewList, setReviewList] = useState([
    <ReviewInstance />,
    <ReviewInstance/>,
    <ReviewInstance />,
    <ReviewInstance />,
    <ReviewInstance />,
    <ReviewInstance />
  ])

  const manageReview = (newIdx) => {
    if(newIdx < reviewList.length && newIdx >= 0){
      setIdx(newIdx)
    }
  }

  /* ----------------------------- Review Buttons ----------------------------- */
  const[buttonList, setButtonList] = useState([])

  const manageButton = (x, curr) => {
    setIdx(curr)

    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: curr * x,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    const temp = []

    for(let i = 0; i < reviewList.length; i++){
      temp.push(React.createElement("button",{
        key: i, onClick:() => {
          manageButton(404, i)
        }, className: `${i == idx ? 'w-10 h-3 bg-[#FFBD5A]' : 'w-3 h-3 bg-white'} rounded-full transition-all ease-in-out`})
      )
    }

    setButtonList(temp)
  }, [idx])


  /* ------------------------------ Main Content ------------------------------ */
  return (
    <div className='raleway flex flex-col gap-5'>
      <div className='flex justify-center items-center gap-5 py-5'>
        <div>
          <button onClick={() => {
            manageReview(idx - 1)
            scrollLeft(305)
          }}>
            <img className='w-8 invert' src="/assets/Icons/Arrow_Reverse.png" alt=""/>
          </button>
        </div>

        <div ref={scrollRef} className='w-3/4 flex gap-3 overflow-hidden'>
          {reviewList}
        </div>

        <div>
          <button onClick={() => {
            manageReview(idx + 1)
            scrollRight(305)
          }}>
            <img className='w-8 invert' src="/assets/Icons/Arrow.png" alt=""/>
          </button>
        </div>
      </div>

      <div className='flex justify-center gap-3'>
          {buttonList}
      </div>
    </div>
  )
}

export default Reviews