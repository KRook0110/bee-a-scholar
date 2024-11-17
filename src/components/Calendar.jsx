
import { useState } from "react";

const currentDate = new Date();

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

const DAYS_OF_WEEK = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
]

const AVAILABLE_YEARS = Array.from({ length: 11 }, (_, i) => {
    return currentDate.getFullYear() + i - 5;
})

function countDaysInCurrentMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function Calendar() {
    const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

    return (
        <>
            <div className="flex flex-row justify-start items-center relative w-[800px] h-auto gap-3">
                <select
                    className="bottom-0 bg-transparent text-l"
                    value={selectedMonth}
                    onChange={(event) => {
                        setSelectedMonth(event.target.value);
                    }} >
                    {MONTH_NAMES.map((month, idx) => {
                        return <option key={idx} value={idx}>{month}</option>
                    })}
                </select>
                <select
                    className="bottom-0 bg-transparent text-l pr-[4px]"
                    value={selectedYear}
                    onChange={(event) => {
                        setSelectedYear(event.target.value);
                    }}>
                    {
                        AVAILABLE_YEARS.map((year, idx) => {
                            return <option key={idx} value={year} className="">{year}</option>
                        })
                    }
                </select>
            </div>
            <div className="w-[800px] h-[530px] rounded-3xl border-[#BFBFBF] border-2 bg-white m-5 grid-cols-7 grid text-center items-center">
                {
                    DAYS_OF_WEEK.map((day, idx) => {
                        return <h1 key={idx} className="w-1/7 text-orange-400 font-bold text-l">{day[0]}</h1>
                    })
                }
                {
                    Array.from({ length: countDaysInCurrentMonth(selectedMonth + 1, selectedYear) }, (_, i) => i + 1).map((day, idx) => {
                        return (<h1 key={idx}
                            className={`text-lg rounded-[16px] w-[100%] h-[90%] flex
                                    justify-center items-center text-[#1C429A]
                                    font-bold ${(day === currentDate.getDate()) ? "bg-[#FFBC59]" : ""}`}>
                            {day}
                        </h1>)
                    })
                }
            </div>
        </>)
}

// <h1 className="">{MONTH_NAMES[selectedMonth]}</h1>
// <img src={window.location.origin + "/icons/arrow_down.svg"} alt="" className="w-[24px]" />

export default Calendar;
