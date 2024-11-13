import React from 'react'
import { useNavigate } from 'react-router-dom'

const ScholarshipPreviewAdmin = (
  {
    id,
    title = "Title",
    deadline = "31 January 2024",
    imgPath = 'beasiswa/tes.png'
  }) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/add-scholarship', {
      state: {scholarShipId: id}
    })
  }

  return (
    <div className='flex gap-10 items-center px-8 py-4 rounded-xl shadow-lg w-[49%]'>
      <div className='w-[148px] h-[148px]'>
        <img src={imgPath} className='rounded-lg h-full object-cover' alt="img" />
      </div>
      <div className='w-[300px] h-full flex flex-col justify-between'>
        <h1 className='font-semibold text-xl'>{title}</h1>
        <p className='text-gray-500'><span className='font-semibold'>Deadline:</span> {deadline}</p>
      </div>
      
      <div className='flex flex-col items-end justify-end h-full w-[150px]'>
        <button onClick={handleNavigate} className='text-[#EC9B21] font-bold flex gap-2 items-center'>
          <div className='w-4'><img src="icons/pen_yellow.png" alt="" /></div>
          Edit
        </button>
      </div>
    </div>
  )
}

export default ScholarshipPreviewAdmin