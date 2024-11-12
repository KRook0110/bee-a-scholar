import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ScholarshipDetail = ({
  title = "Title",
  provider = "Provider",
  tags = ["Tag1", "Tag2"],
  duration = "31/01/2024 - 31/03/2024",
  requirements = ["1", "2", "3"],
  benefits = ["1", "2", "3"],
  desc = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
}) => {
  return (
    <div className='poppins'>
      <Header />

      <div className='flex px-10 py-20 gap-5 bg-[#f7f7f7]'>
        <div className='w-full flex flex-col gap-2 px-5'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-semibold flex gap-3'>
              <h1>{title}</h1>
              <p className='text-[#FEBD5A]'>|</p>
              <h1>{provider}</h1>
            </div>

            <button className='w-4'><img src="icons/pin.png" alt="" /></button>
          </div>

          <div className='bg-blue-200 w-full h-[400px] rounded-lg'>
            <img src="" alt="" />
          </div>

          <div>
            {desc}
          </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <div>
            <h1 className='text-xl font-semibold mb-1'>Tags</h1>

            <div className='flex gap-3 text-lg'>
              {
                tags.map((tag) => (
                  <div className='text-gray-500'>
                    {tag}
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className='flex justify-between items-center text-lg font-semibold'>
              <h1 className='text-[#1C429A]'>Duration: <span className='font-normal'>{duration}</span></h1>

              <button className='text-white flex gap-2 items-center bg-[#1C429A] px-4 py-2 rounded-lg'>
                <div className='w-4 -rotate-45 filter invert'><img src="icons/arrow.png" alt="" /></div>
                <h1>Apply Here</h1>
              </button>
          </div>

          <div className='bg-white shadow-lg rounded-xl p-6 min-h-[200px]'>
            <h1 className='font-semibold text-xl'>Requirements</h1>

            <ul className='list-disc list-inside ml-4 pt-2'>
              {
                requirements.map((req) => (
                  <li>{req}</li>
                ))
              }
            </ul>
          </div>

          <div className='bg-white shadow-lg rounded-xl p-6 min-h-[200px]'>
            <h1 className='font-semibold text-xl'>Benefits</h1>

            <ul className='list-disc list-inside ml-4 pt-2'>
              {
                benefits.map((req) => (
                  <li>{req}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ScholarshipDetail