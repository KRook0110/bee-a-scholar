import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ScholarshipPreview from '../components/ScholarshipPreview';
import { useUser } from '../config/useContext';
import { getCollection } from '../config/firebase';

const MainPage = () => {
  const { userId } = useUser();

  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [scholarships, setScholarships] = useState([]); // Store the scholarships in state
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch scholarships when the component mounts
  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      const data = await getCollection("scholarships");
      setScholarships(data); // Set the state with the fetched scholarships
      setLoading(false); // Stop loading once data is fetched
    };

    fetchScholarships(); // Call the function to fetch scholarships
  }, []); // Empty dependency array to run the effect only once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

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
          {/* Map over the fetched scholarships */}
          {scholarships.map((s, idx) => (
            <ScholarshipPreview key={idx} title={s.title} deadline={s.endDate}/>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
