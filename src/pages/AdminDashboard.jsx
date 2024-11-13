import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScholarshipPreviewAdmin from '../components/ScholarshipPreviewAdmin';
import { getData, queryCollectionByField } from '../config/firebase';
import { useUser } from '../config/useContext';

const AdminDashboard = () => {
  const { userId } = useUser();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scholarships, setScholarships] = useState([]);

  // Fetch user data and scholarships
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

  // Fetch scholarships related to the user, including document ID
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error: No user data found.</div>;
  }

  return (
    <div className="poppins">
      <Header login={userId} />

      <main className="min-h-screen">
        <div className="px-20 py-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="font-semibold text-3xl">Welcome, {userData.name}</h1>
            <div className="w-10">
              <img src="icons/hand.png" alt="" />
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <input
              type="text"
              placeholder="Search"
              className="border-2 w-[500px] rounded-full px-4 py-2 text-lg"
            />

            <a
              href="/add-scholarship"
              className="font-semibold text-lg flex gap-3 items-center bg-[#1C429A] text-white px-4 py-2 rounded-full"
            >
              <div className="w-4 rotate-180">
                <img src="icons/plus.png" alt="" />
              </div>
              <p>Add new scholarship</p>
            </a>
          </div>
        </div>

        <div className="px-10 py-10 flex gap-3 flex-wrap">
          {scholarships.length === 0 ? (
            <p>You haven't added any scholarship!</p>
          ) : (
            scholarships.map((s) => (
              <ScholarshipPreviewAdmin
                key={s.id}
                id={s.id} // Pass the document ID to ScholarshipPreviewAdmin
                title={s.title}
                deadline={s.endDate}
                imgPath={s.imgPath}
              />
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
