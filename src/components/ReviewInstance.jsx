import React from 'react'

const ReviewInstance = ({img = "", name = "John Doe", desc = "...", highlighted}) => {

  return (
    <div className={`flex items-center ${highlighted ?
    'box-shadow: 0 4px 10px rgba(255, 255, 0, 0.7)' : ''} rounded-xl bg-white text-gray-600 w-full sm:w-1/3`}>
      <div className='px-5 py-12 flex flex-col gap-4'>
        <div>
          <img className='w-28 h-28' src="" alt="profile picture" />
        </div>
        <div className='text-xl text-center font-bold'>{name}</div>
      </div>

      <div className={`text-base w-96 px-3`}>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ReviewInstance