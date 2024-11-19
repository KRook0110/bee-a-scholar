import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ScholarshipPreview from '../components/ScholarshipPreview';
import Carousel from '../components/Carousel';
import { useUser } from '../config/useContext';
import { getCollection } from '../config/firebase';

const Dashboard = () => {
    const { userId } = useUser();


    /* ------------------------- States for search query ------------------------ */
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [scholarships, setScholarships] = useState([]);
    const [loading, setLoading] = useState(true);


    /* -------------- Fetch scholarships when the component mounts -------------- */
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


    /* ---------- Filter scholarships based on category and title match --------- */
    const filteredScholarships = scholarships.filter((s) => {
        const matchesFilter = filter === "all" || s.category?.includes(filter);
        const matchesSearchQuery = s.title?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearchQuery;
    });


    return (
        <div className='manrope'>
            <Header login={userId} color={false} searchbar={true} onFind={setSearchQuery} />

            <div className='min-h-screen py-10 flex flex-col gap-8 px-20'>
                {/* Highlights */}
                <section>
                    <Carousel />
                </section>

                {/* Categories */}
                <section className='flex flex-col gap-5'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-10'><img src="icons/honey.png" alt="" /></div>
                        <h1 className='font-bold text-2xl'>Categories</h1>
                    </div>

                    <div className='flex gap-10 justify-center'>
                        <button onClick={() => setFilter("all")}>
                            <img src="illustration/all_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                        <button onClick={() => setFilter("Academic")}>
                            <img src="illustration/academic_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                        <button onClick={() => setFilter("Non-academic")}>
                            <img src="illustration/non_academic_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                        <button onClick={() => setFilter("Research")}>
                            <img src="illustration/research_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                        <button onClick={() => setFilter("Career")}>
                            <img src="illustration/career_scholarship.png" alt="" className='w-60 hover:opacity-90' />
                        </button>

                    </div>
                </section>

                {/* Recommended */}
                <section className=''>
                    <div className='flex gap-5 items-center'>
                        <div className='w-10'><img src="icons/honey.png" alt="" /></div>
                        <h1 className='font-bold text-2xl'>Recommended</h1>
                    </div>

                    {/*<div className='flex flex-wrap gap-10 py-10'>*/}
                    <div className='gap-10 grid grid-cols-3 mx-[50px] mt-5'>
                        {filteredScholarships.map((s, idx) => (
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
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;
