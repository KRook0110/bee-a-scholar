import React from 'react'

const ReviewInstance = ({img = "", name = "John Doe", desc = "...", highlighted = false}) => {

  return (
    <div
      className={`
        flex items-center rounded-xl
        bg-white text-black w-fit`}
    >
      <div className='px-5 py-12 flex flex-col gap-4'>
        <div className='size-28'>
          <img className='w-full h-full bg-gray-500 rounded-full' src=""/>
        </div>

        <div className='text-xl text-center font-semibold'>{name}</div>
      </div>

      <div className={`text-sm w-96 px-3 ${highlighted ? 'block' : 'hidden'}`}>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ReviewInstance