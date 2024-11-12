import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScholarshipPreviewAdmin from '../components/ScholarshipPreviewAdmin'

const AdminDashboard = () => {
  
  const name = "tes"

  return (
    <div className='poppins'>
      <Header />

      <main className='min-h-screen'>

        <div className='px-20 py-10 flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <h1 className='font-semibold text-3xl'>Welcome, {name}</h1>
            <div className='w-10'><img src="icons/hand.png" alt="" /></div>
          </div>

          <div className='flex gap-5 items-center'>
            <input type="text" placeholder='Search'className='border-2 w-[500px] rounded-full px-4 py-2 text-lg'/>

            <a href="" className='font-semibold text-lg flex gap-3 items-center bg-[#1C429A] text-white px-4 py-2 rounded-full'>
              <div className='w-4 rotate-180'><img src="icons/plus.png" alt=""/></div>
              <p>Add new scholarship</p>
            </a>
          </div>
        </div>

        <div className='px-10 py-10 flex gap-3 flex-wrap'>
          <ScholarshipPreviewAdmin/>
          <ScholarshipPreviewAdmin/>
          <ScholarshipPreviewAdmin/>
          <ScholarshipPreviewAdmin/>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default AdminDashboard