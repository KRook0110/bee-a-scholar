import Calendar from "../components/Calendar";
import { useUser } from "../config/useContext";
import Header from "../components/Header";

const MONTH_NAMES = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

function CalendarPage(
) {
    const importantDates = [{
        date: new Date(),
        title: "Harvard Scholarship Submission",
        message: "Online Submission"
    }]


    const { userId } = useUser();
    return (<>
        <Header login={userId} />
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-start ">
            <div className="h-[70px]"></div>
            <Calendar />

            {
                importantDates.map((data, idx) => {
                    return (
                        <div key={idx} className="w-[800px] h-[110px] bg-[#F8F8F8] flex flex-row justify-start items-center rounded-xl">
                            <div
                                className="h-[80%] rounded-full w-[8px] bg-orange-300 mx-7"
                            />
                            <div className="flex flex-col h-full items-center justify-center font-bold text-[#1C429A]">
                                <h1 className="text-3xl">{data.date.getDate()}</h1>
                                <h1 className="text-l font-extrabold">{MONTH_NAMES[data.date.getMonth()].toUpperCase()}</h1>
                            </div>
                            <div className="flex flex-col h-full items-start justify-center p-4 ml-8 ">
                                <div className="text-xl text-[#1C429A] font-bold leading-6">
                                    {data.title}
                                </div>
                                <div className="text-l text-[#949191] font-extrabold leading-6">
                                    {`${data.date.getDate()} ${MONTH_NAMES[data.date.getMonth()]}`}
                                </div>
                                <div className="text-l text-[#949191] font-bold leading-5">
                                    {data.message}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    </>)
}

export default CalendarPage;
