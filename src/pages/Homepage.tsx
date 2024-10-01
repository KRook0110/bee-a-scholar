import {useState} from "react"

import ScholarSearchbar from "@components/ScholarSearchbar"

export default function Homepage() {
    const [text, setText] = useState("");
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <ScholarSearchbar onChange={(e) => {setText(e.target.value)}}/>
                <h1>Text : {text}</h1>
            </div>
        </>
    )
}
