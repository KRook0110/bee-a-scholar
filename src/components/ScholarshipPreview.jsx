import React from 'react'

const ScholarshipPreview = ({title = "Title", deadline = "31/01/2024"}) => {
  return (
    <div className='flex flex-col w-[400px] rounded-lg relative'>
      <div className='w-full h-[220px] bg-white rounded-lg mb-2'>
        <img src="" alt="" />
      </div>

      <div className='flex justify-between px-2'>
        <div>
          <h1 className='font-semibold text-[#1C429A] text-lg'>{title}</h1>
          <p className='text-gray-600'>{deadline}</p>
        </div>

        <div className='flex items-end'>
          <button className='text-[#EC9B21] hover:text-[#FFBD5A] font-semibold'>
            More Details
          </button>
        </div>

        <button className='absolute top-0 left-0 mt-2 ml-2 w-4'>
          <img src="icons/pin.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default ScholarshipPreview