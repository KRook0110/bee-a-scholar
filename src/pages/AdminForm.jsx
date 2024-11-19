import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useUser } from '../config/useContext'
import { addToDBNoID, getData, updateInDB } from '../config/firebase'
import { useLocation } from 'react-router-dom'

const AdminForm = () => {
  const location = useLocation()
  const scholarshipId = location.state?.scholarShipId ?? null
  const { userId } = useUser()

  /* ---------------------- States for form data & error ---------------------- */
  const [error, setError] = useState("")

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState([])

  const [image, setImage] = useState(null)

  const [requirement, setRequirement] = useState("")
  const [benefit, setBenefit] = useState("")
  const [tags, setTags] = useState("")

  const [requirementArray, setRequirementArray] = useState([])
  const [benefitArray, setBenefitArray] = useState([])
  const [tagArray, setTagArray] = useState([])

  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const [termsAgreed, setTermsAgreed] = useState(false)
  const [imgUrl, setImgUrl] = useState("")

  
  // If location.state includes scholarshipId meaning that this form use for editing
  // an existing scholarship, fetch the current data.
  useEffect(() => {
    if (scholarshipId) {
      const fetchData = async () => {
        const scholarshipData = await getData("scholarships", scholarshipId)
        if (scholarshipData) {
          setTitle(scholarshipData.title || "")
          setDescription(scholarshipData.description || "")
          setCategory(scholarshipData.category || "")

          setRequirementArray(scholarshipData.requirementArray || [])
          setBenefitArray(scholarshipData.benefitArray || [])
          setTagArray(scholarshipData.tagArray || [])

          setStartDate(scholarshipData.startDate || "")
          setEndDate(scholarshipData.endDate || "")
        }
      }
      fetchData()
    }
  }, [scholarshipId])


  /* --------------------------- Functions for form --------------------------- */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const manageCategory = (c) => {
    setCategory((category) => (
      category.includes(c) ? category.filter((item) => item !== c) : [...category, c]
    ))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
    }
  }

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value)
  }

  const requirement_ref = useRef(null);
  const benefit_ref = useRef(null);
  const tag_ref = useRef(null);
  
  const handleArrayInput = (inputSetter, arraySetter, inputRef) => (e) => {
    e.preventDefault(); // Prevent form submission on button click
    const inputValue = inputRef.current?.value?.trim(); // Get trimmed value from the ref
  
    if (inputValue) {
      arraySetter((prevArray) => [...prevArray, inputValue]); // Add to array
      inputSetter(""); // Clear input value
      inputRef.current.value = ""; // Clear input field in the DOM
    }
  };
  
  const handleDelete = (arraySetter) => (indexToDelete) => {
    arraySetter((prevArray) =>
      prevArray.filter((_, index) => index !== indexToDelete)
    );
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if (
      !title ||
      !description ||
      !category ||

      !requirementArray.length ||
      !benefitArray.length ||
      !tagArray.length ||

      !startDate ||
      !endDate
    ) {
      setError("Please fill out all fields before submitting.")
      scrollToTop()
      return
    }
  
    if (!termsAgreed) {
      setError("You must agree to the Terms and Conditions.")
      scrollToTop()
      return
    }
  
    const dataDict = {
      title,
      description,
      category,

      requirementArray,
      benefitArray,
      tagArray,

      startDate,
      endDate,

      userId,
      imgUrl
    }
  
    try {
      if (scholarshipId) {
        // If scholarshipId is present, update the existing document
        await updateInDB("scholarships", scholarshipId, dataDict)
      } else {
        // If no scholarshipId, add a new document
        await addToDBNoID("scholarships", dataDict)
      }
  
      // After successful submission, clear the form
      setTitle("")
      setDescription("")
      setCategory([])

      setRequirementArray([])
      setBenefitArray([])
      setTagArray([])

      setStartDate("")
      setEndDate("")

      setImgUrl("")
      setTermsAgreed(false)
  
      // Show success message
      setError("Scholarship successfully submitted!")
      scrollToTop()
    }
    catch (error) {
      setError("Error occurred while submitting the scholarship.")
      scrollToTop()
    }
  }
  

  /* --------------------------------- Content -------------------------------- */
  return (
    <div className='manrope'>
      <Header login={userId}/>

      <div className="manrope min-h-screen px-20 pt-10 pb-40 bg-gradient-to-b from-[#1C429A] to-[#3089D6]">
        <div className='text-white'>
          <div className='flex items-center gap-3'>
            <div className='w-8'><img src="icons/honey.png" alt="" /></div>
            <h1 className='text-2xl font-bold'>Add Scholarship</h1>
          </div>
        </div>

        <div className='flex'>
          {error && <p className="bg-red-500 bg-opacity-80 text-white my-2 rounded-lg px-4 py-1">*{error}</p>}
        </div>

        <form
          onSubmit={handleSubmit}
          className="py-5 flex flex-col gap-2"
        >
          <div className='flex gap-5 bg-white p-10 rounded-lg shadow-sm'>
            <div className='w-full flex flex-col gap-5 justify-between'>
              <div>
                <label
                  htmlFor="describe"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Title
                </label>

                <input
                  type="text"
                  id="describe"
                  className="w-full border rounded-lg p-2 h-12"
                  value={title}
                  onChange={handleInputChange(setTitle)}
                  placeholder="Give a short title"
                />
              </div>

              {/* Start Date Input */}
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="w-full border rounded-lg p-2"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              {/* End Date Input */}
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="w-full border rounded-lg p-2"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            
            <div className="w-full h-full flex flex-col justify-between">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold mb-2"
              >
                Description
              </label>

              <textarea
                id="title"
                className="w-full border rounded-lg p-2 h-[240px] resize-none"
                value={description}
                onChange={handleInputChange(setDescription)}
                placeholder="Give a detailed description"
              ></textarea>
            </div>
          </div>

          <div className='bg-white p-10 rounded-lg flex gap-5 min-h-[540px]'>
            <div className='w-4/6 flex flex-col justify-between'>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                  <h1 className='block text-gray-700 font-semibold mb-2'>
                    What's the category?
                  </h1>
                  
                  <div className='flex'>
                    <label className='hover:cursor-pointer'>
                      <div className='flex gap-2'>
                        <input
                          type="checkbox" value="Academic"
                          checked={category.includes("Academic")}
                          onClick={() => {manageCategory("Academic")}}
                        />
                        <p>Academic</p>
                      </div>
                    </label>
                  </div>

                  <div className='flex'>
                    <label className='hover:cursor-pointer'>
                      <div className='flex gap-2'>
                      <input
                          type="checkbox" value="Non-academic"
                          checked={category.includes("Non-academic")}
                          onClick={() => {manageCategory("Non-academic")}}
                        />
                        <p>Non-academic</p>
                      </div>
                    </label>
                  </div>

                  <div className='flex'>
                    <label className='hover:cursor-pointer'>
                      <div className='flex gap-2'>
                      <input
                        type="checkbox" value="Research"
                        checked={category.includes("Research")}
                        onClick={() => {manageCategory("Research")}}
                      />
                        <p>Research</p>
                      </div>
                    </label>
                  </div>

                  <div className='flex'>
                    <label className='hover:cursor-pointer'>
                      <div className='flex gap-2'>
                      <input
                        type="checkbox" value="Career"
                        checked={category.includes("Career")}
                        onClick={() => {manageCategory("Career")}}
                      />
                        <p>Career</p>
                      </div>
                    </label>
                  </div>
                  
                </div>

                <div>
                  <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                    Add Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="w-full border rounded-lg p-2"
                    onChange={handleImageChange}
                  />
                  {imgUrl && (
                    <div>
                      <img src={imgUrl} alt="Uploaded" className="mt-2 w-full h-auto" />
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                {/* Terms Checkbox */}
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mr-2"
                      checked={termsAgreed}
                      onChange={() => setTermsAgreed(!termsAgreed)}
                    />
                    <label htmlFor="terms" className="text-gray-700 font-semibold text-sm">
                      I agree to the Terms and Conditions
                    </label>
                  </div>

                  <p className="text-gray-700 text-sm">
                    You must agree to the Terms and Conditions before signing up for an account.
                  </p>
                </div>

                {/* Submit Button */}
                <div className='flex justify-center'>
                  <button
                    type="submit"
                    className="bg-[#FFBD5A] hover:opacity-90 text-white font-semibold py-2 px-10 rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
              
            </div>

            <div className='w-full'>
              {/* requirements Input */}
              <div className="mb-4">
                <label
                  htmlFor="requirement"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  What are the requirements?
                </label>

                <div className='flex'>
                  <input
                    type="text"
                    className="w-full border rounded-l-lg p-2 h-12 mb-2"
                    value={requirement}
                    placeholder="Min GPA is ..."
                    ref={requirement_ref}
                    onChange={() => {setRequirement()}}
                  />

                  <button onClick={
                    handleArrayInput(setRequirement, setRequirementArray, requirement_ref)
                  } className='w-12 px-4 h-12 bg-[#1C429A] rounded-r-lg'><img src="icons/plus.png" alt="" /></button>
                </div>

                <div className="flex flex-wrap">
                  {requirementArray.map((act, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-blue-800 px-4 py-1 rounded-full mr-2 mb-2 flex items-center"
                    >
                      {act}
                      <button
                        type="button"
                        onClick={() => handleDelete(setRequirementArray)(index)}
                        className="ml-2 text-red-500 text-2xl"
                      >
                        &times; {/* X icon for delete */}
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* benefits Input */}
              <div className="mb-4">
                <label htmlFor="benefit" className="block text-gray-700 font-semibold mb-2">
                  List out the benefits!
                </label>
                
                <div className='flex'>
                  <input
                    type="text"
                    className="w-full border rounded-l-lg p-2 h-12 mb-2"
                    value={benefit}
                    placeholder="Full 100% Scholarship for..."
                    ref={benefit_ref}
                    onChange={() => {setBenefit()}}
                  />

                  <button onClick={
                    handleArrayInput(setBenefit, setBenefitArray, benefit_ref)
                  } className='w-12 px-4 h-12 bg-[#1C429A] rounded-r-lg'><img src="icons/plus.png" alt="" /></button>
                </div>

                <div className="flex flex-wrap">
                  {benefitArray.map((g, index) => (
                    <span
                      key={index}
                      className="bg-green-200 text-green-800 px-4 py-1 rounded-full mr-2 mb-2 flex items-center"
                    >
                      {g}
                      <button
                        type="button"
                        onClick={() => handleDelete(setBenefitArray)(index)}
                        className="ml-2 text-red-500 text-2xl"
                      >
                        &times; {/* X icon for delete */}
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags Input */}
              <div className="mb-4">
                <label htmlFor="tags" className="block text-gray-700 font-semibold mb-2">
                  Add Tags
                </label>
                
                <div className='flex'>
                  <input
                    type="text"
                    className="w-full border rounded-l-lg p-2 h-12 mb-2"
                    value={requirement}
                    placeholder="Add some tag to better describe your Scholarship"
                    ref={tag_ref}
                    onChange={() => {setRequirement()}}
                  />

                  <button onClick={
                    handleArrayInput(setTags, setTagArray, tag_ref)
                  } className='w-12 px-4 h-12 bg-[#1C429A] rounded-r-lg'><img src="icons/plus.png" alt="" /></button>
                </div>
                
                <div className="flex flex-wrap">
                  {tagArray.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-200 text-purple-800 px-4 py-1 rounded-full mr-2 mb-2 flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleDelete(setTagArray)(index)}
                        className="ml-2 text-red-500 text-2xl"
                      >
                        &times; {/* X icon for delete */}
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default AdminForm