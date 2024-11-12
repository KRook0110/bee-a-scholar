import Footer from "../components/Footer"
import Header from "../components/Header"
import Reviews from "../components/Header"
import { link } from "../config/data"


const LandingPage = () => {
  
  return (
    <div className="poppins">
      <Header />

      <div>

      {/* Jumbotron */}
      <section className={`flex flex-row items-center justify-center w-full sm:px-[5%] raleway`}
        style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${"./images/jumbotron.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden"
        }}
      >
        <section className="flex w-full h-full sm:h-auto bg-gradient-to-b from-blue-600 to-blue-900 sm:bg-none justify-end items-center px-[5%] sm:px-0">
          <div className='w-full sm:w-1/2 flex flex-col gap-5'>
            <h3 className="font-bold text-[50px] leading-[65px] text-white">
              Ready to elevate your academic experience?
            </h3>

            <h4 className="font-medium text-[30px] leading-[40px] text-white">
              Find, apply for, and win the scholarship of your dreams with Bee-a-Scholar.
            </h4>

            <div className="flex flex-row space-x-3 pt-5 text-lg font-semibold gap-4 text-white">
                <a href={link.regis} className="px-8 py-2 bg-[#EC9B21] rounded-lg flex items-center justify-center">GET STARTED</a>
                <a href="" className="px-8 py-2 bg-[rgba(236,155,33,0.5)] rounded-lg border-4 border-[#EC9B21] flex items-center justify-center">LEARN MORE</a>
            </div>
          </div>
        </section>

        <svg className='hidden sm:block' xmlns="http://www.w3.org/2000/svg" width="100vw" fill="none" viewBox="0 0 1440 89" 
            style={{
                position: "absolute",
                bottom: -10,
                left: -40,
                width: "130%"
            }}
        >
            <path fill="#fff" d="m0 53.4 80-5.924c80-6.035 240-17.717 400-13.35C640 38.659 800 59.24 960 66.75c160 7.51 320 1.39 400-1.474l80-2.976V89H0V53.4Z"/>
        </svg>
      </section>
        
      {/* Welcome */}
      <section className="flex flex-col sm:flex-row columns-2 items-center w-full py-10 px-[10vw] space-x-10 raleway">
          <div className="flex flex-col w-full justify-start space-y-[3vh]">
              <div className="flex flex-row items-center space-x-7">
                  <div className="w-24"><img src="icons/honey.png" alt="" /></div>
                  <h3 className="flex flex-col font-display font-[600] text-[40px]">Welcome to
                    <span className="font-bold text-primary leading-[40px] text-[#1C429A]">Bee-a-Scholar!</span>
                  </h3>
              </div>

              <p className="font-display font-regular text-black leading-[20px]">
                  At <b className='text-[#1C429A]'>Bee-a-Scholar,</b> we simplify the scholarship search for university students.<br/><br/>
                  Whether you're excelling in academics, thriving in organizations, or pursuing unique talents, we match you with scholarships that recognize your potential.<br/><br/>
                  <span className="font-bold text-primary text-[#1C429A]">No more endless searching—just opportunities designed for you.</span>
              </p>
          </div>
          <div className="hidden sm:block w-full h-auto">
              <img src="images/phone.png" alt="" />
          </div>                        
      </section>
      
      {/* Why Choose Us */}
      <section className="flex flex-col items-center justify-center pt-10 pb-20 raleway px-[5%]">
        <img className='w-10' src="icons/honey.png" alt="" />

        <h3 className="font-display font-[600] text-[40px]">Why choose us?</h3>

        <p className="font-display text-center text-black">
            <span className="font-[500]">Finding a scholarship is hard.</span><br/>  
            That’s why Bee-a-Scholar does the heavy lifting for you with our range of powerful features.
        </p>

        <div className="flex flex-col sm:flex-row columns-3 pt-3 px-20 mx-10 gap-10 text-center">
            <div className="flex flex-col items-center justify-start pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none" viewBox="0 0 72 72">
                    <path fill="#63B8F7" stroke="#63B8F7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.667 13.375h44.666a2.791 2.791 0 0 1 2.792 2.792v4.427c0 .74-.294 1.45-.818 1.974L44.401 40.474a2.792 2.792 0 0 0-.818 1.973V60.05a2.791 2.791 0 0 1-3.467 2.708l-5.583-1.396a2.792 2.792 0 0 1-2.116-2.708V42.447c0-.74-.295-1.45-.818-1.973L13.693 22.568a2.792 2.792 0 0 1-.818-1.974v-4.427a2.791 2.791 0 0 1 2.792-2.792Z"/>
                </svg>
                <h3 className="font-display font-[600] text-[24px] text-primary">Sophisticated Filtering</h3>
                <p className="font-display text-center text-sm text-black">Find scholarships tailored to your academic background, interests, and activities.</p>
            </div>

            <div className="flex flex-col items-center justify-start pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="none" viewBox="0 0 75 75">
                    <path fill="#63B8F6" d="M60.938 9.375h-7.032V7.031a2.344 2.344 0 1 0-4.687 0v2.344H25.78V7.031a2.344 2.344 0 1 0-4.687 0v2.344h-7.032a4.688 4.688 0 0 0-4.687 4.688v46.874a4.688 4.688 0 0 0 4.688 4.688h46.874a4.688 4.688 0 0 0 4.688-4.688V14.063a4.688 4.688 0 0 0-4.688-4.688ZM32.811 53.906a2.343 2.343 0 1 1-4.687 0V38.947l-1.295.65a2.346 2.346 0 0 1-2.098-4.195l4.688-2.343a2.343 2.343 0 0 1 3.392 2.097v18.75Zm16.407-2.343a2.343 2.343 0 1 1 0 4.687h-9.375a2.344 2.344 0 0 1-1.875-3.75L46.4 41.259a2.342 2.342 0 0 0-1.458-3.714 2.344 2.344 0 0 0-2.441 1.127 2.345 2.345 0 1 1-4.058-2.344 7.031 7.031 0 0 1 13.12 3.516 6.96 6.96 0 0 1-1.419 4.233l-5.613 7.486h4.688ZM14.062 23.436v-9.375h7.032v2.344a2.344 2.344 0 1 0 4.687 0v-2.343H49.22v2.343a2.344 2.344 0 1 0 4.687 0v-2.343h7.032v9.374H14.062Z"/>
                </svg>
                <h3 className="font-display font-[600] text-[24px] text-primary">Scholarship Calendar</h3>
                <p className="font-display text-center text-sm text-black">Never miss a deadline with a personalized scholarship deadline calendar.</p>
            </div>

            <div className="flex flex-col items-center justify-start pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="73" height="72" fill="none" viewBox="0 0 73 72">
                    <g clip-path="url(#a)">
                        <path fill="#63B8F7" d="M46.756 32.622c-2.961-3.491-4.44-5.237-6.144-4.97-1.701.269-2.496 2.375-4.086 6.588l-.414 1.088c-.45 1.199-.678 1.796-1.119 2.237-.438.44-1.044.675-2.25 1.142l-1.101.423c-4.251 1.642-6.378 2.464-6.621 4.142-.243 1.677 1.56 3.103 5.163 5.949l.93.74c1.026.807 1.539 1.212 1.833 1.766.3.553.345 1.195.438 2.476l.087 1.165c.33 4.506.498 6.76 2.049 7.53 1.551.768 3.462-.46 7.281-2.909l.987-.636c1.086-.695 1.629-1.044 2.25-1.145.624-.097 1.26.065 2.523.39l1.155.297c4.455 1.141 6.684 1.715 7.887.511 1.203-1.204.579-3.384-.663-7.75l-.324-1.125c-.351-1.242-.528-1.863-.441-2.476.09-.615.435-1.154 1.122-2.236l.63-.982c2.421-3.802 3.63-5.701 2.82-7.213-.807-1.512-3.099-1.636-7.686-1.878l-1.188-.066c-1.302-.068-1.956-.103-2.523-.384-.57-.281-.99-.778-1.83-1.772l-.765-.902Z"/>
                        <path fill="#63B8F7" d="M31.993 13.579c3.948-4.657 5.922-6.985 8.19-6.627 2.268.358 3.33 3.166 5.451 8.783l.549 1.453c.603 1.598.906 2.396 1.491 2.982.588.589 1.392.9 3.003 1.52l1.467.569c5.67 2.189 8.505 3.283 8.826 5.52.324 2.24-2.079 4.136-6.882 7.934l-1.242.982c-1.365 1.08-2.049 1.618-2.445 2.358-.396.74-.456 1.592-.582 3.299l-.114 1.556c-.444 6.008-.666 9.014-2.733 10.037-2.07 1.027-4.614-.61-9.708-3.878l-1.317-.846c-1.446-.93-2.169-1.39-3-1.524-.831-.133-1.674.083-3.363.518l-1.539.393c-5.94 1.527-8.913 2.287-10.515.684-1.602-1.604-.774-4.515.885-10.33l.426-1.507c.471-1.653.708-2.479.591-3.298-.12-.82-.579-1.538-1.497-2.982l-.834-1.31c-3.231-5.068-4.845-7.603-3.771-9.615 1.08-2.018 4.137-2.18 10.254-2.509l1.581-.083c1.74-.091 2.607-.139 3.366-.514.756-.376 1.317-1.036 2.439-2.361l1.023-1.204Z" opacity=".5"/>
                    </g>
                    <defs>
                        <clipPath id="a">
                        <path fill="#fff" d="M.5 0h72v72H.5z"/>
                        </clipPath>
                    </defs>
                </svg>
                <h3 className="font-display font-[600] text-[24px] text-primary">Compatibility Calculator</h3>
                <p className="font-display text-center text-sm text-black">Instantly discover your best scholarship matches based on your unique qualifications.</p>
            </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="flex flex-col-reverse md:flex-row columns-2 items-center justify-center pt-10 pb-20 raleway px-[5%] gap-10">
        <div className='flex flex-wrap w-full md:w-3/4 justify-center items-center px-[10%] gap-10'>
          <img className='size-20 lg:size-28 bg-gray-500 rounded-full' src="" alt="" />
          <img className='size-20 lg:size-28 bg-gray-500 rounded-full' src="" alt="" />
          <img className='size-20 lg:size-28 bg-gray-500 rounded-full' src="" alt="" />
          <img className='size-20 lg:size-28 bg-gray-500 rounded-full' src="" alt="" />
          <img className='size-20 lg:size-28 bg-gray-500 rounded-full' src="" alt="" />
          <img className='size-20 lg:size-28 bg-gray-500 rounded-full' src="" alt="" />
        </div>

        <div className="flex flex-col w-full space-y-8">
            <div className="flex flex-row space-x-2 items-center ">
                <img className='w-10' src="icons/honey.png" alt="" />
                <h3 className="text-[30px] font-display font-semibold">Our partners</h3>
            </div>
            <p className="font-display text-black leading-[20px]">
              We collaborate with leading universities, organizations, and scholarship providers to bring you exclusive opportunities.<br/><br/>
              These partnerships ensure that every scholarship listed is not only credible but also designed to help you succeed.<br/><br/>
              <span className="font-semibold">Together, we're opening doors to brighter futures.</span>
            </p>
            <a href="" className="flex flex-row items-center font-display font-bold text-[#63B8F6]">See all partners
              <span className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" fill="none" viewBox="0 0 9 16">
                    <g clip-path="url(#a)">
                        <path fill="#23A6F0" fill-rule="evenodd" d="M.18.18a.615.615 0 0 1 .872 0l7.384 7.385a.615.615 0 0 1 0 .87L1.052 15.82a.616.616 0 0 1-.871-.872L7.13 8 .18 1.052a.615.615 0 0 1 0-.871Z" clip-rule="evenodd"/>
                    </g>
                    <defs>
                        <clipPath id="a">
                        <path fill="#fff" d="M0 0h9v16H0z"/>
                        </clipPath>
                    </defs>
                </svg>
              </span>
            </a>
        </div>
      </section>

      <section style={{
        backgroundImage: `url(${"./images/review.png"})`
      }} className='raleway py-20'>

        {/* Carousel Headline */}
        <div className='px-[10%]'>
          <div className='flex items-center justify-center gap-4'>
            <img className='w-10' src="./assets/Icons/honey.png" alt="" />
            <h1 className='text-white font-bold text-2xl sm:text-4xl'>What Students have to say</h1>
          </div>

          <div className='text-white flex justify-center'>
            <p>Spoiler alert: <span className='font-bold'>A lot of good things!</span></p>
          </div>
        </div>

        {/* Carousel */}
        <div className='px-[10%]'>
          <Reviews />
        </div>

        {/* Banner */}
        <div className='bg-white relative flex justify-end my-20'>
          <div className='hidden relative w-1/2 lg:flex justify-end items-center'>
            <img className='absolute w-[60%] right-[5%]' src="icons/logo.png" alt="" />
          </div>

          <div className='w-full lg:w-1/2 px-[5%] py-10 flex justify-center lg:justify-start gap-10'>
            <div className="w-20">
              <img className='' src="icons/honey.png" alt="" />
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-2xl sm:text-4xl font-bold'>Unlock Your Future<br />with Bee-a-Scholar</h1>

              <div className="flex flex-col items-center justify-center">
                <h2 className='sm:text-base font-bold'>Start your scholarship search today!</h2>
                <p className='text-sm sm:text-base'>Sign up for an account now, for completely free.</p>
              </div>

              <a  className='bg-[#FFBD5A] sm:text-lg font-semibold py-2 px-8 rounded-lg text-white'>GET STARTED</a>
            </div>
          </div>
        </div>
      </section>

      </div>

      <Footer/>
    </div>
  )
}

export default LandingPage