import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase'; // Firebase config import
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from 'firebase/firestore';

const ScholarshipPreview = ({
  userId,
  id,
  title = "Title",
  deadline = "31/01/2024",
  imgUrl = "beasiswa/tes.png",
  category = [],
  tags = [],
  pinned = false
}) => {

  console.log(userId)
  const navigate = useNavigate();
  const [isPinned, setIsPinned] = useState(pinned);

  // Fetch user data to check if the scholarship is pinned
  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const userRef = doc(db, 'users', userId);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            // Check if the scholarship ID is in the pinnedScholarships array
            if (userData.pinnedScholarships && userData.pinnedScholarships.includes(id)) {
              setIsPinned(true);
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [userId, id]);

  const handleNavigate = () => {
    navigate('/detail', {
      state: {scholarShipId: id}
    });
  };

  const handlePinClick = async () => {
    if (userId) {
      try {
        const userRef = doc(db, 'users', userId);

        if (isPinned) {
          // If already pinned, remove the ID from the array
          await updateDoc(userRef, {
            pinnedScholarships: arrayRemove(id)
          });
          setIsPinned(false);
          console.log("Scholarship unpinned successfully!");
        } else {
          // If not pinned, add the ID to the array
          await updateDoc(userRef, {
            pinnedScholarships: arrayUnion(id)
          });
          setIsPinned(true);
          console.log("Scholarship pinned successfully!");
        }
      } catch (error) {
        console.error("Error pinning/unpinning scholarship:", error);
      }
    } else {
      console.error("User not logged in or userId not provided");
    }
  };

  return (
    <div className='flex flex-col w-[400px] rounded-lg relative'>
      <div className='flex justify-between mb-3'>
        <div className='flex gap-3'>
          {category.map((c) => (
            <p className='text-black bg-[#FFBD5A] px-2 rounded-full'>{c}</p>
          ))}
        </div>
        
        <button onClick={handlePinClick} className='w-4'>
          <img src={isPinned ? "icons/pin_full.png" : "icons/pin.png"} alt="Pin" />
        </button>
      </div>

      <div className='w-full h-[220px] bg-white rounded-lg mb-2'>
        <img className='h-full w-full object-cover rounded-lg' src={imgUrl} alt="" />
      </div>

      <div className='flex justify-between w-full'>
        <div>
          <h1 className='font-semibold text-[#1C429A] text-sm'>{title}</h1>
          <p className='text-gray-600 text-sm'>{deadline}</p>
        </div>

        <div className='flex items-end text-right'>
          <button className='text-[#EC9B21] hover:text-[#FFBD5A] font-semibold text-sm' onClick={handleNavigate}>
            More Details
          </button>
        </div>
      </div>

      <div className='flex gap-3 mt-3'>
        {tags.map((c) => (
          <p className='text-white bg-[#1c9a55] px-2 rounded-full'>{c}</p>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipPreview;
