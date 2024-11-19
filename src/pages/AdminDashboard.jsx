import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getData, queryCollectionByField } from '../config/firebase';
import { useUser } from '../config/useContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { userId } = useUser();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scholarships, setScholarships] = useState([]);
  
  const navigate = useNavigate();

  /* ----------------------------- Fetch user data ---------------------------- */
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getData('users', userId);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);


  /* ------ Fetch scholarships whose "userId" column == userId ----- */
  useEffect(() => {
    const fetchScholarships = async () => {
      if (userId) {
        try {
          const data = await queryCollectionByField('scholarships', 'userId', userId);
          setScholarships(data);
        } catch (error) {
          console.error('Error fetching scholarships:', error);
        }
      }
    };

    fetchScholarships();
  }, [userId]);


  /* ------------------------- Error / Loading Message ------------------------ */
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error: No user data found.</div>;
  }

  const handleNavigate = (id) => {
    navigate('/add-scholarship', {
      state: {scholarShipId: id}
    })
  }

  /* --------------------------------- Content -------------------------------- */
  return (
    <div className="manrope">
      <Header login={userId} color={false} searchbarPH={"Manage your posts!"}/>

      <main className="min-h-screen bg-slate-100">
        
        <section className="px-20 py-10">
          <div className="font-bold text-2xl flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="w-8"><img src="icons/honey.png" alt="" /></div>
              <h1>Scholarships List</h1>
            </div>
            
            <a href="/add-scholarship" className="flex gap-3 bg-[#1C429A] items-center text-white px-2 py-1 rounded-lg">
              <div className="w-4"><img src="icons/plus.png" alt="" /></div>
              <h1 className="text-lg">Add Scholarship</h1>
            </a>
          </div>

          <div className="bg-white mt-5 rounded-lg">
            <div className="flex gap-10 justify-between text-base font-semibold border-b px-5 py-4">
              <div className='flex gap-2 text-[#1C429A] font-bold w-1/3'>
                <button className='bg-[#1C429A] text-white px-2 py-2 rounded-md w-full'>All Scholarship</button>

                <button className='px-2 py-2 rounded-md w-full'>Active</button>

                <button className='px-2 py-2 rounded-md w-full'>Non-active</button>
              </div>
              
              <section className={`flex gap-5 px-10 w-2/3`}>
                <div className='w-4 flex items-center justify-center'>
                  <img className='w-full' src="icons/search.png" alt="" />
                </div>
                <input 
                  placeholder='Filter your scholarships'
                  className='text-gray-600 font-bold text-lg w-full focus:outline-none'
                  autoFocus
                />
              </section>
            </div>

            <div className="flex font-bold px-5 py-4 border-b text-gray-700">
              <div className="w-1/3">
                Scholarship Info
              </div>

              <div className="w-2/3 flex">
                <div className="w-full">End Date</div>
                <div className="w-full">Category</div>
                <div className="w-full">Participant</div>
              </div>

              <div className='w-20'></div>
            </div>

            {
              scholarships.map((scholarship, idx) => (
                <div key={idx} className="flex px-5 py-4 border-b items-center">
                  <div className="w-1/3 flex gap-3 items-center">
                    <div className='size-12'>
                      <img className='size-full object-cover rounded-sm' src={scholarship.imgUrl} alt="" />
                    </div>

                    <h1 className='font-semibold'>{scholarship.title}</h1>
                  </div>

                  <div className="w-2/3 flex text-gray-500">
                    <div className="w-full">{scholarship.endDate}</div>
                    <div className="w-full">{scholarship.category[0]}</div>
                    <div className="w-full">100</div>
                  </div>

                  <button onClick={() => {handleNavigate(scholarship.id)}} className='bg-[#FFBD5A] text-white flex items-center justify-center gap-3 px-2 py-1 rounded-md w-20'>
                    <div className='w-4'><img src="icons/plus.png" alt="" /></div>
                    <h1>Edit</h1>
                  </button>
                </div>
              ))
            }
          </div>

          {/* <div className="py-10 flex gap-3 flex-wrap">
            {scholarships.length === 0 ? (
              <p>You haven't added any scholarship!</p>
            ) : (
              scholarships.map((s) => (
                <ScholarshipPreviewAdmin
                  key={s.id}
                  id={s.id} // Pass the document ID to ScholarshipPreviewAdmin
                  title={s.title}
                  deadline={s.endDate}
                  imgUrl={s.imgPath}
                  tags={s.tagArray}
                  category={s.category}
                />
              ))
            )}
          </div> */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
