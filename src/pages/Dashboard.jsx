import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScholarshipPreview from '../components/ScholarshipPreview';
import Carousel from '../components/Carousel';
import { useUser } from '../config/useContext';
import { getCollection } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { userId } = useUser();
    const recommendationRef = useRef(null);

    const navigate = useNavigate();

    /* ------------------------- States for search query ------------------------ */
    const [searchQuery, setSearchQuery] = useState("");
    const [scholarships, setScholarships] = useState([]);

    /* -------------- Fetch scholarships when the component mounts -------------- */
    useEffect(() => {
        const fetchScholarships = async () => {
            const data = await getCollection("scholarships");
            setScholarships(data);
        };
        fetchScholarships();
    }, []);

    const handleNavigate = ({searchVal="", filterVal="all"}) => {
      navigate('/search-page', {
        state: {search: searchVal, filter: filterVal}
      });
    };

    return (
        <div className='manrope overflow-x-hidden'>
            <Header login={userId} searchbar={true} onFind={(value) => {
                handleNavigate({searchVal: value});
            }} />

            <div className='min-h-screen flex flex-col mb-40'>
                {/* Highlights */}
                <section
                  className=
                  'px-80 pt-7 pb-14 bg-gradient-to-b from-[#1C429A] to-[#3089D6] shadow-md relative'>

                    <Carousel />

                    <div className='absolute w-60 z-0 right-[-3%] top-[-20%]'><img src="icons/honey.png" alt="" /></div>

                    <div className='absolute w-60 z-0 left-[-3%] bottom-[-20%]'><img src="icons/honey.png" alt="" /></div>
                </section>

                {/* Categories */}
                <section className='flex flex-col gap-5 py-12 px-20 z-[1] bg-white' ref={recommendationRef}>
                    <div className='flex gap-5 items-center'>
                        <div className='w-10'><img src="icons/honey.png" alt="" /></div>
                        <h1 className='font-bold text-2xl'>Categories</h1>
                    </div>

                    <div className='flex gap-10 justify-center'>
                        <button onClick={() => handleNavigate({filterVal:'all'})}>
                            <img src="illustration/all_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                        <button onClick={() => handleNavigate({filterVal:'Academic'})}>
                            <img src="illustration/academic_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                        <button onClick={() => handleNavigate({filterVal:'Non-academic'})}>
                            <img src="illustration/non_academic_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                        <button onClick={() => handleNavigate({filterVal:'Research'})}>
                            <img src="illustration/research_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                        <button onClick={() => handleNavigate({filterVal:'Career'})}>
                            <img src="illustration/career_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                    </div>
                </section>

                {/* Recommended */}
                <section className='px-20' >
                    <div className='flex gap-5 items-center'>
                        <div className='w-10'><img src="icons/honey.png" alt="" /></div>
                        <h1 className='font-bold text-2xl'>Recommended</h1>
                    </div>

                    <div className='gap-10 grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mt-5'>
                        {scholarships.map((s, idx) => (
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
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;
