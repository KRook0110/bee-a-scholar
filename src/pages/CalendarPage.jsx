import Calendar from "../components/Calendar";
import { useUser } from "../config/useContext";
import Header from "../components/Header";


function CalendarPage() {
    const {userId} = useUser();
    return (<>
        <Header login={userId} />
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-start">
            <div className="h-[70px]"></div>
            <Calendar />

        </div>
    </>)
}

export default CalendarPage;
