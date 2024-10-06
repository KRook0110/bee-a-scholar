import React, { useState } from "react"
import NavbarDashboard from "../components/NavbarDashboard"
import TextBox from "../components/TextBox";
import Testing from "@components/Testing"

export default function Homepage() {
    const [value, setValue] = useState('');
    return (
        <>
            <NavbarDashboard />
            <div className="flex flex-col items-center justify-center h-screen w-[]">
                <Testing />
            <h1>Text : {value}</h1>
            </div>

        </>
    )
}
