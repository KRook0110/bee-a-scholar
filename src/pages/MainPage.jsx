import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ScholarshipPreview from '../components/ScholarshipPreview';
import { useUser } from '../config/useContext';
import { getCollection } from '../config/firebase';

const MainPage = () => {
  const { userId } = useUser();  // Get userId from context

  const [filter, setFilter] = useState("all"); // "all" could mean no filtering based on category
  const [searchQuery, setSearchQuery] = useState("");
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch scholarships when the component mounts
  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      const data = await getCollection("scholarships");
      setScholarships(data);
      setLoading(false);
    };

    fetchScholarships();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter scholarships based on category and title match
  const filteredScholarships = scholarships.filter((s) => {
    const matchesFilter = filter === "all" || s.category?.includes(filter);
    const matchesSearchQuery = s.title?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearchQuery;
  });

  return (
    <div className='poppins'>
      <Header login={userId} />  {/* Ensure userId is passed to Header */}

      <div className='bg-[#EEF7FF] min-h-screen'>
        <section className="mb-10 pb-10 pt-24">
          <SearchBar
            filter={filter}
            setFilter={setFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </section>

        <section className='flex flex-wrap gap-5 px-20 pb-10'>
          {/* Map over the filtered scholarships */}
          {filteredScholarships.map((s, idx) => (
            <ScholarshipPreview
              userId={userId}  // Pass userId to ScholarshipPreview
              key={idx}
              title={s.title}
              deadline={s.endDate}
              imgUrl={s.imgPath}
              category={s.category}
              tags={s.tagArray}
              id={s.id}
            />
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
