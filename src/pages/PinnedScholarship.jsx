import React, { useEffect, useState } from 'react';
import { useUser } from '../config/useContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScholarshipPreview from '../components/ScholarshipPreview';
import { getCollection, getData } from '../config/firebase';

const PinnedScholarship = () => {
  const { userId } = useUser();
  
  const [scholarships, setScholarships] = useState([]);
  const [pinnedScholarships, setPinnedScholarships] = useState([]);

  // Fetch scholarships when the component mounts
  useEffect(() => {
    const fetchScholarships = async () => {
      const data = await getCollection("scholarships");
      setScholarships(data);
    };

    const fetchUserPinnedScholarships = async () => {
      if (userId) {
        try {
          const userData = await getData("users", userId)
          setPinnedScholarships(userData.pinnedScholarships || []);
          console.log(userData)

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchScholarships();
    fetchUserPinnedScholarships();
  }, [userId]);

  // Filter scholarships to only show the pinned ones
  const filteredScholarships = scholarships.filter((s) =>
    pinnedScholarships.includes(s.id) // Only show scholarships with matching IDs
  );

  return (
    <div className='poppins'>
      <Header login={userId} />

      <div className='bg-[#EEF7FF] min-h-screen pt-10'>
        <section className='flex flex-wrap gap-5 px-20 pb-10'>
          {/* Map over the filtered scholarships */}
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((s, idx) => (
              <ScholarshipPreview
                key={idx}
                title={s.title}
                deadline={s.endDate}
                imgUrl={s.imgPath}
                category={s.category}
                tags={s.tagArray}
                id={s.id}
                pinned={true}
              />
            ))
          ) : (
            <p>No pinned scholarships available.</p>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PinnedScholarship;
