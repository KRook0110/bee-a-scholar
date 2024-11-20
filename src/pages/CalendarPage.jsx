import { useUser } from "../config/useContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { getCollection, getData, getRef } from "../config/firebase"
import { useNavigate } from "react-router-dom"
import { arrayRemove, arrayUnion, updateDoc } from "firebase/firestore"

/* ----------------------------- Date Functions ----------------------------- */
const currentDate = new Date()

const SHORT_MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

const DAYS_OF_WEEK = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
]

const AVAILABLE_YEARS = Array.from({ length: 11 }, (_, i) => {
    return currentDate.getFullYear() + i - 5
})

function countDaysInCurrentMonth(month, year) {
    return new Date(year, month, 0).getDate()
}


/* ----------------------------- Main Component ----------------------------- */
function CalendarPage() {
  const { userId } = useUser()
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate('/detail', {
      state: {scholarShipId: id}
    })
  }
  const handleSearchbar = ({searchVal="", filterVal="all"}) => {
    navigate('/search-page', {
      state: {search: searchVal, filter: filterVal}
    });
  };
  
  const [scholarships, setScholarships] = useState([])
  const [pinnedScholarships, setPinnedScholarships] = useState([])


  /* -------------- Fetch scholarships when the component mounts -------------- */
  useEffect(() => {
    const fetchScholarships = async () => {
      const data = await getCollection("scholarships")
      setScholarships(data)
    }

    const fetchUserPinnedScholarships = async () => {
      if (userId) {
        try {
          const userData = await getData("users", userId)
          setPinnedScholarships(userData.pinnedScholarships || [])
          console.log(userData)

        } catch (error) {
          console.error("Error fetching user data:", error)
        }
      }
    }

    fetchScholarships()
    fetchUserPinnedScholarships()
  }, [userId])


  /* -------------------------------- Pin Logic ------------------------------- */
  const handlePinClick = async (id) => {
    if (userId) {
      try {
        const userRef = await getRef("users", userId)
        await updateDoc(userRef, {
          pinnedScholarships: arrayRemove(id)
        });
        window.location.reload();
      } catch (error) {
        console.error("Error pinning/unpinning scholarship:", error)
      }
    } else {
      console.error("User not logged in or userId not provided")
    }
  }

  
  /* ------------ Filter scholarships to only show the pinned ones ------------ */
  const filteredScholarships = scholarships.filter((s) =>
    pinnedScholarships.includes(s.id)
  )

  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth())
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear())

  const importantDates = filteredScholarships.map((s) => (
    {
      date: new Date(s.endDate).getDate(),
      month: new Date(s.endDate).getMonth(),
      year:new Date(s.endDate).getFullYear()}
  ))

  const checkDate = (d, m, y) => {
    return(importantDates.some((i) => i.date == d && i.month == m && i.year == y))
  }

  return (
  <div className="manrope">
      <Header login={userId} color={false} searchbar={true} onFind={(value) => {
          handleSearchbar({searchVal: value});
      }}/>
      <main className="px-20 py-10 flex flex-col gap-5">
        <div className='flex gap-5 items-center justify-between'>
          <div className="flex gap-5 items-center">
            <div className='w-10'><img src="icons/honey.png" alt="" /></div>
            <h1 className='font-bold text-2xl'>Pinned Scholarships</h1>
          </div>
          
          <div className="flex flex-row justify-start items-center relative h-auto gap-3 font-semibold">
            <select
                className="bottom-0 bg-transparent text-lg"
                value={selectedMonth}
                onChange={(event) => {
                    setSelectedMonth(Number(event.target.value))
                }} >
                {MONTH_NAMES.map((month, idx) => {
                    return <option key={idx} value={idx}>{month}</option>
                })}
            </select>

            <select
                className="bottom-0 bg-transparent text-lg"
                value={selectedYear}
                onChange={(event) => { setSelectedYear(event.target.value) }}>
                {
                    AVAILABLE_YEARS.map((year, idx) => {
                        return <option key={idx} value={year} className="">{year}</option>
                    })
                }
            </select>
          </div>
        </div>

        <hr />

        <div className="min-h-screen flex gap-5">
          {/* Important Dates */}
          <div className="w-2/3 flex flex-col gap-2">
            {
              filteredScholarships.map((data, idx) => {
                  return (
                      <div key={idx} className="w-full h-[110px] bg-[#F8F8F8] flex flex-row justify-start items-center rounded-xl relative">
                          <div
                              className="h-[80%] rounded-full w-[8px] bg-orange-300 mx-7"
                          />

                          <div className="flex flex-col h-full items-center justify-center font-bold text-[#1C429A]">
                              <h1 className="text-3xl">{new Date(data.endDate).getDate()}</h1>
                              <h1 className="text-lg font-extrabold">{SHORT_MONTH_NAMES[new Date(data.endDate).getMonth()]}</h1>
                          </div>

                          <div className="flex flex-col h-full items-start justify-center p-4 ml-8 gap-2">
                              <div className="text-xl text-[#1C429A] font-bold leading-6">
                                  {data.title}
                              </div>

                              <div className="text-l text-[#949191] font-bold leading-5 flex gap-5">
                                  {data.tagArray.map((t) => (
                                    <p>{t}</p>
                                  ))}
                              </div>

                              <button className="font-semibold bg-[#EC9B21] px-2 py-1 rounded-lg text-sm text-white" onClick={() => {handleNavigate(data.id)}}>
                                See Detail
                              </button>
                          </div>

                          <button className="w-4 absolute right-4 top-4" onClick={() => {
                            handlePinClick(data.id)
                          }}>
                            <img src="icons/pin_full.png" alt="" />
                          </button>
                      </div>
                  )
              })
            }
          </div>
          
          {/* Calendar */}
          <div className="w-1/3">
            <div className="w-full h-[400px] rounded-xl border-2 border-[#1C429A] bg-[#1C429A] grid-cols-7 grid text-center items-center px-4 py-2">
              {
                  DAYS_OF_WEEK.map((day, idx) => {
                      return <h1 key={idx} className="w-1/7 h-full text-[#FFBD5A] border-[#FFBD5A] border-b-2 font-bold text-2xl flex items-center justify-center">{day[0]}</h1>
                  })
              }
              {
                  Array.from({ length: countDaysInCurrentMonth(selectedMonth + 1, selectedYear) }, (_, i) => i + 1).map((day, idx) => {
                      return (<h1 key={idx}
                          className={
                            `text-xl rounded-md w-[100%] h-[90%] flex
                            justify-center items-center text-white font-bold
                            ${(checkDate(day, selectedMonth, selectedYear)) ? "bg-orange-400" : ""}`}>
                          {day}
                      </h1>)
                  })
              }
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
  </div>
  )
}

export default CalendarPage
