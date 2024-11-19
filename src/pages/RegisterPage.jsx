import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { link } from '../config/data';
import { addToDB, createNewUser } from '../config/firebase';
import { useUser } from '../config/useContext';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { userId, setUserId } = useUser();
  const navigate = useNavigate();


  /* -------------------------------- Form data ------------------------------- */
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$|^.{1,128}$/
  const nameRegex = /^[a-zA-Z\s]+$/
  const passRegex = /^[a-zA-Z0-9]{8,128}$/


  /* -------------------------- Form submit function -------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!nameRegex.test(firstName) || !nameRegex.test(lastName)){
      setError('Name can only be alphabets!')
      return
    }
    else if(!emailRegex.test(email)){
      setError('Invalid Email!')
      return
    }
    else if(!passRegex.test(password)){
      setError('Password must be alphanumeric and be 8-128 long!')
      return
    }
    else if(!termsAgreed){
      setError('You must agree to the T&C to continue!')
      return
    }
    else{
      setError(false)
    }

    try{
      const authCredential = await createNewUser(email, password);

      const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        role: "user"
      };

      await addToDB("users", authCredential.user.uid, userData)
      setUserId(authCredential.user.uid);
      navigate("/dashboard")
    }
    catch (err){
      setError(err)
    }
  };
  

  /* --------------------------------- Content -------------------------------- */
  return (
    <div className="manrope">

      {/* Content */}
      <Header login={userId}/>

      <div className="flex items-center justify-center bg-gradient-to-b from-[#1C429A] to-[#3089D6]">
        <div className="flex flex-col md:flex-row items-center justify-center h-screen">
          
          {/* Left Side - Text and Logo */}
          <div className="hidden w-full h-full md:text-left mb-6 md:mb-0 lg:flex flex-col gap-3 px-20 text-white justify-center relative">
            <h1 className="text-6xl font-extrabold">
              Sign-up for an account for free.
            </h1>

            <h2 className="text-3xl font-bold">
              Begin your path to opportunity with us today, free of charge.
            </h2>

            <div className='absolute w-80 right-[-35%] bottom-0 z-0'>
              <img className='w-full' src="icons/honey.png" alt="" />
            </div>

            <div className='absolute w-80 left-[-25%] top-[-20%] z-0'>
              <img className='w-full' src="icons/honey.png" alt="" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full bg-white md:rounded-xl px-8 py-10 mx-20 z-[5]">
            {error && <p className="text-red-500 mb-5">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="font-semibold text-[#1C429A]" htmlFor="first-name">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border rounded-md"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="w-full">
                  <label className="font-semibold text-[#1C429A]" htmlFor="first-name">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border rounded-md"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#1C429A]" htmlFor="number">Phone Number</label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    id="number"
                    placeholder="XXXX-XXXX-XXXX"
                    className="w-full p-3 border rounded-md font-mono"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#1C429A]" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="font-semibold text-[#1C429A]" htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                    checked={termsAgreed}
                    onChange={() => setTermsAgreed(!termsAgreed)}
                    required
                  />
                  <label htmlFor="terms" className="text-gray-700 font-semibold">
                    I agree to the Terms and Conditions
                  </label>
                </div>
                <p className="text-gray-700">
                  You must agree to the Terms and Conditions before signing up
                  for an account.
                </p>
              </div>

              <div className='flex justify-center'>
                <button
                  type="submit"
                  className="bg-[#FFBD5A] font-semibold text-white rounded-md hover:opacity-90 transition px-12 py-3"
                >
                  Sign Up
                </button>
              </div>
              

              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <a href={link.login} className="text-[#63B8F6] font-semibold">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default RegisterPage