import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useUser } from '../config/useContext';

const AdminForm = () => {
  const { userId } = useUser();

  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [requirement, setRequirement] = useState("");
  const [benefit, setBenefit] = useState("");
  const [tags, setTags] = useState("");
  const [requirementArray, setRequirementArray] = useState([]);
  const [benefitArray, setBenefitArray] = useState([]);
  const [tagArray, setTagArray] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleArrayInput = (setter, arraySetter) => (e) => {
    const value = e.target.value;

    if (value.endsWith("|")) {
      // If the input ends with a comma, update the array and reset the input
      const newValue = value.slice(0, -1).trim(); // Remove the comma
      if (newValue) {
        arraySetter((prev) => [...prev, newValue]); // Add new value to array
      }
      setter(""); // Clear input field
    } else {
      setter(value); // Update the input field
    }
  };

  const handleDelete = (arraySetter) => (index) => {
    arraySetter((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (
      !title ||
      !description ||
      !requirementArray.length || // Check if there are any requirements
      !benefitArray.length || // Check if there are any benefits
      !tagArray.length || // Check if there are any tags
      !startDate ||
      !endDate ||
      !image
    ) {
      setError("Please fill out all fields before submitting.");
      scrollToTop();
      return;
    }

    if (!termsAgreed) {
      setError("You must agree to the Terms and Conditions.");
      scrollToTop();
      return;
    }

    if (!userId) {
      setError("User ID is not available.");
      scrollToTop();
      return;
    }

    setError("");


  };

  return (
    <div className='poppins'>
      <Header login={userId}/>

      <div className="bg-white raleway min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-2xl mx-auto my-10 p-4 mb-10"
        >
          {error && <p className="text-red-500 mb-5">*{error}</p>}
          <div className="mb-4">
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

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="title"
              className="w-full border rounded-lg p-2 h-40 resize-none"
              value={description}
              onChange={handleInputChange(setDescription)}
              placeholder="Give a detailed description"
            ></textarea>
          </div>

          <div className="mb-4">
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

          {/* requirements Input */}
          <div className="mb-4">
            <label
              htmlFor="requirement"
              className="block text-gray-700 font-semibold mb-2"
            >
              What are the requirements?
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 h-12 mb-2"
              value={requirement}
              onChange={handleArrayInput(setRequirement, setRequirementArray)}
              placeholder="Help clean the..."
            />
            <div className="flex flex-wrap">
              {requirementArray.map((act, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2 mb-2 flex items-center"
                >
                  {act}
                  <button
                    type="button"
                    onClick={() => handleDelete(setRequirementArray)(index)}
                    className="ml-2 text-red-500"
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
            <input
              type="text"
              className="w-full border rounded-lg p-2 h-12 mb-2"
              value={benefit}
              onChange={handleArrayInput(setBenefit, setBenefitArray)}
              placeholder="Lower flood chances..."
            />
            <div className="flex flex-wrap">
              {benefitArray.map((g, index) => (
                <span
                  key={index}
                  className="bg-green-200 text-green-800 px-2 py-1 rounded-full mr-2 mb-2 flex items-center"
                >
                  {g}
                  <button
                    type="button"
                    onClick={() => handleDelete(setBenefitArray)(index)}
                    className="ml-2 text-red-500"
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
            <input
              type="text"
              className="w-full border rounded-lg p-2 h-12 mb-2"
              value={tags}
              onChange={handleArrayInput(setTags, setTagArray)}
              placeholder="Enter tags..."
            />
            <div className="flex flex-wrap">
              {tagArray.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full mr-2 mb-2 flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleDelete(setTagArray)(index)}
                    className="ml-2 text-red-500"
                  >
                    &times; {/* X icon for delete */}
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Start Date Input */}
          <div className="mb-4">
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
          <div className="mb-4">
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
              <label htmlFor="terms" className="text-gray-700 font-semibold">
                I agree to the Terms and Conditions
              </label>
            </div>
            <p className="text-gray-700">
              You must agree to the Terms and Conditions before signing up for an
              account.
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
          
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default AdminForm