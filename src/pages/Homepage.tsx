import React, { useState } from "react"
import NavbarDashboard from "../components/NavbarDashboard"
import PhoneInputBox from "../components/PhoneInputBox";
import TextBox from "../components/TextBox";

export default function Homepage() {
    const [value, setValue] = useState('');
    return (
        <>
            <NavbarDashboard />
            <div className="flex flex-col items-center justify-center h-screen w-[]">
                <TextBox onChange={()=>{}}/>
                <PhoneInputBox onChange={(e)=>{setValue(e.target.value)}} width="400px" title="testing"/>
            <h1>Text : {value}</h1>
            </div>

        </>
    )
}
