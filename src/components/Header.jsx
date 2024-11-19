import React, { useEffect, useState } from 'react';
import { link } from '../config/data';
import { getData, handleLogout } from '../config/firebase';
import { useUser } from '../config/useContext';

const Header = ({
  login,
  color=true,
  searchbar=false,
  searchbarPH="Find your opportunity" 
}) => {
  const { userId, setUserId } = useUser();
  const [userData, setUserData] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);


  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const data = await getData('users', userId);
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [userId]);


  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 flex justify-between items-center px-2 md:px-8 py-2 z-10 ${color ? 'bg-[#1C429A] text-white' : 'bg-white text-black border-b shadow-sm'}`}>
        {/* Left side */}
        <a href={link.home} className="flex items-center gap-3">
          <div className="w-12">
            <img src="icons/logo.png" alt="Logo" />
          </div>
        </a>

        {/* SearchBar */}
        <section className={`flex gap-5 px-10 w-full ${searchbar ? 'block' : 'hidden'}`}>
          <div className='w-4 flex items-center justify-center'>
            <img className='w-full' src="icons/search.png" alt="" />
          </div>
          <input 
            placeholder={searchbarPH}
            className='text-gray-600 font-bold text-lg w-full focus:outline-none'
            autoFocus
          />
        </section>

        {/* Right side */}
        <div className="flex gap-6">
          {!login ? (
            <>
              <a href={link.regis} className="font-semibold px-6 py-3 bg-[#EC9B21] rounded-lg flex items-center justify-center text-sm md:text-base">
                Get Started
              </a>
              <a href="" className="font-semibold px-6 py-3 rounded-lg flex items-center justify-center text-sm md:text-base">
                Contact Us
              </a>
            </>
          ) : (
            <>
              <a href="" className={`w-6 ${color ? 'filter invert' : ''}`}>
                <img src="icons/profile.png" alt="Profile" />
              </a>
              
              <button onClick={() => setIsSidebarVisible(true)} className={`w-6 ${color ? 'filter invert' : ''}`}>
                <img src="icons/burger_menu.svg" alt="Menu" />
              </button>
            </>
          )}
        </div>
      </header>
      <div className="h-[55px]"></div> {/* Spacer */}

      {/* Sidebar */}
      <div className={`fixed top-0 bottom-0 w-full md:w-1/4 bg-white px-10 py-5 z-30 transition-all ease-in-out ${isSidebarVisible ? 'right-0' : 'right-[-100%] md:right-[-25%]'}`}>
        {/* Close button */}
        <div className="flex justify-end">
          <button onClick={() => setIsSidebarVisible(false)} className="w-6 mb-10">
            <img src="icons/x.png" alt="Close" />
          </button>
        </div>

        {/* Profile & Name */}
        <div className="flex flex-col items-center gap-2 mb-5">
          <div className="w-24">
            <img src="icons/profile.png" alt="Profile" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8">
              <img src="icons/honey.png" alt="Honey" />
            </div>
            <h1 className="text-2xl">
              Hello, <span className="font-bold text-[#1C429A]">{userData?.firstName || 'User'}!</span>
            </h1>
          </div>
          {/* Edit profile link */}
          <a href="" className="text-[#63B8F6] font-bold flex items-center gap-2">
            <p>Edit profile</p>
            <div className="w-4">
              <img src="icons/pen.png" alt="Edit" />
            </div>
          </a>
        </div>

        {/* Settings */}
        <div className="text-[#5F5F5F] bg-[#EAEAEA] pr-10 pl-5 py-5 rounded-lg flex flex-col gap-3">
          <a href="" className="flex items-center gap-3">
            <div className="w-5 flex justify-center items-center">
              <img src="icons/wrench.png" alt="Settings" />
            </div>
            <p>Settings</p>
          </a>

          <a href="/pinned-scholarships" className="flex items-center gap-3">
            <div className="w-5 flex justify-center items-center">
              <img className="h-5" src="icons/pin_gray.png" alt="Pinned" />
            </div>
            <p>Pinned Scholarships</p>
          </a>

          <a href="/calendar" className="flex items-center gap-3">
            <div className="w-5 flex justify-center items-center">
              <img src="icons/calendar.png" alt="Calculator" />
            </div>
            <p>Calendar</p>
          </a>
        </div>

        {/* About & Contact Us */}
        <div className="flex flex-col gap-2 mt-5 px-4">
          <a href="" className="flex gap-3 items-center">
            <div className="w-6">
              <img src="icons/honey.png" alt="Honey" />
            </div>
            <p>About Us</p>
          </a>
          <a href="" className="flex gap-3 items-center">
            <div className="w-6">
              <img src="icons/phone.png" alt="Phone" />
            </div>
            <p>Contact Us</p>
          </a>
          <button
            onClick={() => {
              handleLogout();
              setUserId(false);
            }}
            className="flex gap-3 items-center"
          >
            <div className="w-6">
              <img src="icons/logout.png" alt="Logout" />
            </div>
            <p>Log Out</p>
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      <div className={`fixed top-0 right-0 left-0 bottom-0 bg-black transition-all ease-in-out delay-500 ${isSidebarVisible ? 'block opacity-20 z-20' : 'hidden opacity-0 z-[-1]'}`}></div>
    </>
  );
};

export default Header;
