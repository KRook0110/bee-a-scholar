import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useUser } from '../config/useContext';

const SearchPage = () => {
  const { userId } = useUser();

  return (
    <div className='manrope'>
    
    <Header login={userId} color={false} searchbar={true}/>

    <main className='min-h-screen'>
      
    </main>

    <Footer />

    </div>
  )
}

export default SearchPage