import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import ScholarshipPreview from '../components/ScholarshipPreview'
import { useUser } from '../config/useContext'

const MainPage = () => {
  const { userId } = useUser();

  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='poppins'>
      <Header login={userId}/>

      <div className='bg-[#EEF7FF]'>
        <section className="mb-10 pb-10 pt-24">
          <SearchBar
            filter={filter}
            setFilter={setFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </section>

        <section className='flex flex-wrap gap-5 px-20 pb-10'>
          <ScholarshipPreview />
          <ScholarshipPreview />
          <ScholarshipPreview />
          <ScholarshipPreview />
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default MainPage