import React, { useEffect, useRef, useState } from 'react'
import { reviews } from '../config/data'
import ReviewInstance from './ReviewInstance'

const Reviews = () => {

  /* ------------------------------- Review List ------------------------------ */
  const[idx, setIdx] = useState(1)

  const manageReview = (newIdx) => {
    if(newIdx < reviews.length && newIdx >= 0){
      setIdx(newIdx)
    }
  }

  const[buttonList, setButtonList] = useState([])

  useEffect(() => {
    const temp_button = []

    for(let i = 0; i < reviews.length; i++){
      temp_button.push(React.createElement("button",{
        key: i, onClick:() => {
          manageReview(i)
        }, className: `${i == idx ? 'w-10 h-3 bg-[#FFBD5A]' : 'w-3 h-3 bg-white'} rounded-full transition-all ease-in-out`})
      )
    }

    setButtonList(temp_button)
    
  }, [idx])


  return (
    <div className='raleway flex flex-col gap-5 px-20'>
      <div className='flex justify-center items-center gap-5 py-5'>
        <div>
          <button onClick={() => {
            manageReview(idx - 1)
          }}>
            <img className='w-8 invert' src="icons/Arrow_Reverse.png" alt=""/>
          </button>
        </div>

        <div className='w-full flex gap-3 overflow-hidden justify-center'>
          {
            reviews.map((r, i) => (
              i >= idx-1 && i <= idx+1 ?
              <ReviewInstance name={r.name} desc={r.review} highlighted={idx === i ? true : false}/> : <></>
            ))
          }
        </div>

        <div>
          <button onClick={() => {
            manageReview(idx + 1)
          }}>
            <img className='w-8 invert' src="icons/Arrow.png" alt=""/>
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