import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, getRef } from '../config/firebase';
import { arrayRemove, arrayUnion, updateDoc } from 'firebase/firestore';

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

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/detail', {
      state: {scholarShipId: id}
    });
  };

  
  /* -------------------------------- Pin Logic ------------------------------- */
  const [isPinned, setIsPinned] = useState(pinned);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const userData = await getData('users', userId)

          if (userData) {
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

  const handlePinClick = async () => {
    if (userId) {
      try {
        const userRef = await getRef('users', userId);

        if (isPinned) {
          await updateDoc(userRef, {
            pinnedScholarships: arrayRemove(id)
          });
          setIsPinned(false);
          console.log("Scholarship unpinned successfully!");
        }
        else {
          await updateDoc(userRef, {
            pinnedScholarships: arrayUnion(id)
          });
          setIsPinned(true);
          console.log("Scholarship pinned successfully!");
        }
      }
      catch (error) {
        console.error("Error pinning/unpinning scholarship:", error);
      }
    } else {
      console.error("User not logged in or userId not provided");
    }
  };


  /* ------------------------------- Color Logic ------------------------------ */
  const rainbowColors = [
    "#E63946", // Red
    "#F4A261", // Orange
    "#E9C46A", // Yellow
    "#2A9D8F", // Green
    "#457B9D", // Blue
    "#4C5A9A", // Indigo
    "#9D4EDD", // Violet
  ];

  // Shuffle colors and memoize to ensure they stay the same on re-render
  const shuffledColors = useMemo(() => {
    const colors = [...rainbowColors];
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors;
  }, [tags]);


  /* ------------------------------ Main Content ------------------------------ */
  return (
    <div className='flex flex-col w-[420px] rounded-lg relative'>
      <div className='flex justify-between mb-2'>
        <div className='flex gap-5 text-sm font-semibold text-gray-500'>
          {category.map((c) => (
            <p>{c}</p>
          ))}
        </div>
        
        <button onClick={handlePinClick} className='w-3'>
          <img src={isPinned ? "icons/pin_full.png" : "icons/pin.png"} alt="Pin" />
        </button>
      </div>

      <div className='w-full h-[220px] bg-white rounded-lg mb-2'>
        <img className='h-full w-full object-cover rounded-lg' src={imgUrl} alt="" />
      </div>

      <div className="flex flex-wrap gap-3 mb-2 text-xs font-bold">
        {tags.map((c, index) => (
          <p
            key={index}
            style={{ color: shuffledColors[index % shuffledColors.length] }}
          >
            {c}
          </p>
        ))}
      </div>

      <div className='flex justify-between w-full'>
        <div>
          <h1 className='font-semibold text-[#1C429A] text-sm'>{title}</h1>
          <p className='text-gray-600 text-sm'>{deadline}</p>
        </div>

        <div className='flex items-end text-right'>
          <button className='bg-[#EC9B21] text-white px-2 py-1 rounded-md font-semibold text-xs' onClick={handleNavigate}>
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPreview;
