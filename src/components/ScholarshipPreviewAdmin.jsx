import React from 'react'

const ScholarshipPreviewAdmin = ({name = "Title", deadline = "31 January 2024", participant = 300}) => {
  return (
    <div className='flex gap-10 items-center px-8 py-4 rounded-xl shadow-lg w-[49%]'>
      <div>
        <img src="" alt="tes" />
      </div>
      <div className=''>
        <h1 className='font-semibold text-xl'>{name}</h1>
        <p className='text-gray-500'><span className='font-semibold'>Deadline:</span> {deadline}</p>
      </div>
      <div>
        <p>{participant} applicant</p>
        <button className='text-[#EC9B21] font-bold flex gap-2 items-center'>
          <div className='w-4'><img src="icons/pen_yellow.png" alt="" /></div>
          Edit
        </button>
      </div>
    </div>
  )
}

export default ScholarshipPreviewAdmin