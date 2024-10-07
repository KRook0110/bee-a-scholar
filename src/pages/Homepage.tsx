import React, { useState } from "react"
import NavbarDashboard from "../components/NavbarDashboard"
import PhoneInputBox from "../components/PhoneInputBox";
import TextBox from "../components/TextBox";
import Honeycomb from "../../public/images/icons/Honeycomb";

export default function Homepage() {
    const [value, setValue] = useState('');
    return (
        <>
            <NavbarDashboard type="default"/>

            <div className="flex flex-col items-center justify-start h-screen pt-[calc(80px+12px)]">
                
                {/* <section>CAROUSEL!!!!!!!!</section> */}
                
                <section className="w-full bg-red-200 flex flex-col gap-6">
                    <div className="flex items-center space-x-2 bg-green-200 px-20" >
                        <Honeycomb height={22} width={22}/>
                        <h3 className="font-display font-semibold text-lg">Categories</h3>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 34 29">
                                <path fill="#9AA0A6" d="M0 14.266a2.688 2.688 0 0 1 2.688-2.687h21.285l-7.06-7.06A2.687 2.687 0 0 1 20.712.722l11.646 11.646a2.687 2.687 0 0 1 0 3.799L20.712 27.81a2.688 2.688 0 0 1-3.799-3.798l7.06-7.06H2.688A2.688 2.688 0 0 1 0 14.267Z"/>
                            </svg>
                        </span>
                    </div>
                    <div className="h-96 w-full bg-blue-200">

                    </div>
                </section>
                <TextBox onChange={()=>{}}/>
                <PhoneInputBox onChange={(e)=>{setValue(e.target.value)}} width="400px" title="testing"/>
                <h1>Text : {value}</h1>
            </div>

=======
            <h1>Test</h1>
        </>
    )
}
            // <NavbarDashboard />
            // <div className="flex flex-col items-center justify-center h-screen w-[]">
            //     <Testing />
            // <h1>Text : {value}</h1>
            // </div>
