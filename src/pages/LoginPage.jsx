import React, { useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getData, loginEmailPass } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../config/useContext';

const LoginPage = () => {
  const { userId, setUserId } = useUser();
  const navigate = useNavigate();


  /* -------------------------- States for form data -------------------------- */
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  /* ------------------------- Handle submit function ------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(null);
    setLoading(true)

    try {
        const userCredential = await loginEmailPass(email, password);
        const data = await getData("users", userCredential.user.uid)
        
        setUserId(userCredential.user.uid);

        if(data.role === "user"){
          navigate("/dashboard")
        }
        else{
          navigate("/admin-dashboard")
        }

    } catch (error) {
        setError("Login failed: " + error.message);
        console.log("Login error:", error.message);
    } finally {
        setLoading(false);
    }
  };


  /* --------------------------------- Content -------------------------------- */
  return (
    <div className="poppins flex flex-col min-h-screen w-full">
      <Header login={userId}/>

      <main className="flex items-center justify-center bg-gradient-to-b from-[#1C429A] to-[#3089D6]">
        <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full">
          
          {/* Left Side - Text and Logo */}
          <div className="hidden w-full h-full md:text-left mb-6 md:mb-0 lg:flex flex-col gap-3 px-20 text-white justify-center relative">
            <h1 className="text-6xl font-semibold">
              Welcome back, old friend.
            </h1>

            <h2 className="text-3xl">
              We’re glad that you’d have us in your academic adventures again.
            </h2>

            <div className='absolute w-80 right-[-35%] bottom-0 z-0'>
              <img className='w-full' src="icons/honey.png" alt="" />
            </div>

            <div className='absolute w-80 left-[-25%] top-[-20%] z-0'>
              <img className='w-full' src="icons/honey.png" alt="" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full bg-white md:rounded-xl px-8 py-40 mx-20 z-[5]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div>
                      <label htmlFor="email" className="font-semibold text-[#1C429A]">Email</label>
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
                      <label htmlFor="password" className="font-semibold text-[#1C429A]">Password</label>
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
                  
                  {error && <p className="text-red-500">{error}</p>}
                  
                  <a href="forgot" className="text-[#63B8F6] font-semibold">
                      I forgot my password {'>'}
                  </a>

                  <div className='flex justify-center'>
                    <button
                        type="submit"
                        className={`bg-[#FFBD5A] text-white py-3 font-semibold rounded-md hover:opacity-90 transition ${loading ? "opacity-50" : ""} px-20`} // Disable button when loading
                        disabled={loading} // Disable button during loading
                    >
                        {loading ? "Logging in..." : "LOGIN"} {/* Change button text during loading */}
                    </button>
                  </div>

                  <p className="text-center text-gray-600 font-semibold">
                      No Account Yet?{" "}
                      <a href="/register" className="text-[#63B8F6]">
                          Sign up for an account!
                      </a>
                  </p>
              </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    );
}

export default LoginPage