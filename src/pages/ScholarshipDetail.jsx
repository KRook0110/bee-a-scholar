import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { getData } from '../config/firebase';
import { useUser } from '../config/useContext';

const ScholarshipDetail = () => {
  const { userId } = useUser();

  const location = useLocation();
  const scholarshipId = location.state?.scholarShipId || null;

  // State to store scholarship data
  const [scholarshipData, setScholarshipData] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch scholarship data from Firestore
  useEffect(() => {
    const fetchScholarshipData = async () => {
      if (!scholarshipId) {
        setError('Scholarship ID is missing.');
        setLoading(false);
        return;
      }

      try {
        const data = await getData('scholarships', scholarshipId);
        if (data) {
          setScholarshipData(data);
        } else {
          setError('No such document!');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchScholarshipData();
  }, [scholarshipId]);

  if (loading) {
    return <div>Loading...</div>; // Display loading state until data is fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error message if there's an error
  }

  // Destructure data from the scholarshipData object
  const {
    title = 'Title',
    provider = 'Provider',
    tagArray = ['Tag1', 'Tag2'],
    startDate = "",
    endDate = "",
    requirementArray = ['1', '2', '3'],
    benefitArray = ['1', '2', '3'],
    description = 'description is not available',
    imgUrl = 'beasiswa/global.png', // Default empty image if not provided
  } = scholarshipData;

  return (
    <div className='manrope min-h-screen'>
      <Header login={userId} color={false} searchbar={true}/>

      <div className='flex px-10 pt-14 pb-40 gap-5 bg-[#f7f7f7]'>
        <div className='w-full flex flex-col gap-2 px-5'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-semibold flex gap-3'>
              <h1>{title}</h1>
              {/* <p className='text-[#FEBD5A]'>|</p>
              <h1>{provider}</h1> */}
            </div>

            <button className='w-4'>
              <img src='icons/pin.png' alt='pin' />
            </button>
          </div>

          <div className='bg-blue-200 w-full h-[400px] rounded-lg'>
            <img className='h-full w-full object-cover rounded-lg' src={imgUrl || ''} alt='Scholarship' />
          </div>

          <div className='flex justify-between items-center text-lg font-semibold'>
            <h1 className='text-[#1C429A] font-bold text-lg'>
              Duration: <span className='font-semibold'>{startDate} - {endDate}</span>
            </h1>

            <button className='text-white flex gap-2 items-center bg-[#1C429A] px-4 py-2 rounded-lg'>
              <div className='w-4 -rotate-45 filter invert'>
                <img src='icons/arrow.png' alt='arrow' />
              </div>
              <h1>Apply Here</h1>
            </button>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <div className='flex gap-5 text-lg font-bold'>
            {tagArray.map((tag, index) => (
              <div key={index} className='text-gray-500'>
                {tag}
              </div>
            ))}
          </div>

          <div className='font-semibold'>{description}</div>
          <hr /> 

          <div>
            <div className='flex gap-5 text-[#1C429A] font-bold border-b-2'>
              <h1>Requirements</h1>
            </div>

            <ul className='list-disc list-inside ml-4 pt-2'>
              {requirementArray.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className='flex gap-5 text-[#1C429A] font-bold border-b-2'>
              <h1>Benefits</h1>
            </div>

            <ul className='list-disc list-inside ml-4 pt-2'>
              {benefitArray.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ScholarshipDetail;