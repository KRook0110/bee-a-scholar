import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useUser } from '../config/useContext';
import { getCollection } from '../config/firebase';
import ScholarshipPreview from '../components/ScholarshipPreview';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const { userId } = useUser();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  /* ------------------------- States for search query ------------------------ */
  const [filter, setFilter] = useState(location.state?.filter || "");
  const [searchQuery, setSearchQuery] = useState(location.state?.search || "");
  const [scholarships, setScholarships] = useState([]);

  /* -------------- Fetch scholarships when the component mounts -------------- */
  useEffect(() => {
      const fetchScholarships = async () => {
          const data = await getCollection("scholarships");
          setScholarships(data);
      };

      fetchScholarships();
  }, []);

  /* ---------- Filter scholarships based on category and title match --------- */
  const filteredScholarships = scholarships.filter((s) => {
      const matchesFilter = filter === "all" || s.category?.includes(filter);
      const matchesSearchQuery = s.title?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearchQuery;
  });

  return (
    <div className='manrope'>
    
    <Header login={userId} searchbar={true} color={false} onFind={(value) => {setSearchQuery(value)}} searchbarDef={location.state?.search || ""}/>

    <main className='min-h-screen pt-10 pb-40'>
      <section className='px-20' >
        <div className='flex justify-between'>
          <div className='flex gap-5 items-center'>
              <div className='w-10'><img src="icons/honey.png" alt="" /></div>
              <h1 className='font-bold text-2xl'>Scholarships</h1>
          </div>

          <div>
            <select
              className="text-black font-semibold px-2 text-end"
              onChange={(e) => setFilter(e.target.value)}
              value={filter} // To ensure the selected value reflects in the dropdown
            >
              <option value="all">All</option>
              <option value="Academic">Academic</option>
              <option value="Non-academic">Non-academic</option>
              <option value="Research">Research</option>
              <option value="Career">Career</option>
            </select>
          </div>
        </div>

        <div className='gap-10 grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mt-5'>
            {filteredScholarships.map((s, idx) => (
                <div className="w-full flex items-center justify-center">
                    <ScholarshipPreview
                        userId={userId}
                        key={idx}
                        title={s.title}
                        deadline={s.endDate}
                        imgUrl={s.imgUrl}
                        category={s.category}
                        tags={s.tagArray}
                        id={s.id}
                    />
                </div>
            ))}
        </div>
      </section>
    </main>

    <Footer />

    </div>
  )
}

export default SearchPage