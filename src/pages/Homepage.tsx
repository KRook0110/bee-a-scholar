import React, { useState } from "react"
import NavbarDashboard from "../components/NavbarDashboard"
import PhoneInputBox from "../components/PhoneInputBox";
import TextBox from "../components/TextBox";
import Honeycomb from "../../public/images/icons/Honeycomb";

import EmblaCarousel from "@/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import '../EmblaCarousel/embla.css';
import CategoryContainer from "@/components/CategoryContainer";
import ScholarSearchbar from "@/components/ScholarSearchbar";
import ScholarCard from "@/components/ScholarCard";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Homepage() {
    const [value, setValue] = useState('');
    return (
        <>
            <NavbarDashboard type="default"/>

            <div className="flex flex-col items-center justify-start pt-[calc(80px)] space-y-2 bg-white">
                {/* CAROUSEL */}
                <section className="w-full bg-white">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    <svg className="z-0" xmlns="http://www.w3.org/2000/svg" width="100vw" fill="none" viewBox="0 0 1440 89" 
                        style={{
                            position: "absolute",
                            bottom: "160px",
                            width: "100%",
                        }}
                    >
                        <path fill="#fff" d="m0 53.4 80-5.924c80-6.035 240-17.717 400-13.35C640 38.659 800 59.24 960 66.75c160 7.51 320 1.39 400-1.474l80-2.976V89H0V53.4Z"/>
                    </svg>
                </section>
                
                {/* CATEGORIES */}
                <section className="w-full flex flex-col gap-2 z-10 bg-white">
                    <div className="flex items-center space-x-2 px-20" >
                        <Honeycomb height={22} width={22}/>
                        <h3 className="font-display font-semibold text-2xl">Categories</h3>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 34 29">
                                <path fill="#9AA0A6" d="M0 14.266a2.688 2.688 0 0 1 2.688-2.687h21.285l-7.06-7.06A2.687 2.687 0 0 1 20.712.722l11.646 11.646a2.687 2.687 0 0 1 0 3.799L20.712 27.81a2.688 2.688 0 0 1-3.799-3.798l7.06-7.06H2.688A2.688 2.688 0 0 1 0 14.267Z"/>
                            </svg>
                        </span>
                    </div>
                    
                    <div className="flex flex-row justify-center gap-5 w-full">
                        <CategoryContainer imageURL="/images/category_vectors/academic.svg" bodyText="Academic Scholarships"/>
                        <CategoryContainer imageURL="/images/category_vectors/nonacademic.svg" bodyText="Non-Academic Scholarships"/>
                        <CategoryContainer imageURL="/images/category_vectors/research.svg" bodyText="Research & Innovation Scholarships"/>
                        <CategoryContainer imageURL="/images/category_vectors/career.svg" bodyText="Career Scholarships"/>
                    </div>
                </section>

                {/* TOOLS */}
                <section className="w-full flex flex-col gap-2 bg-white pt-8" >
                    <div className="flex items-center space-x-5 px-20" >
                        <h3 className="font-display font-semibold text-[19px] text-black">Tools</h3>
                        <ScholarSearchbar height={"37px"} width={"300px"} onChange={() => {}}/>
                        <div className="flex flex-row items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#747070" fill-opacity=".83" fill-rule="evenodd" d="M16 15c1.306 0 2.418.835 2.83 2H20a1 1 0 0 1 0 2h-1.17a3 3 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17A3 3 0 0 1 16 15Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8 9a3 3 0 0 1 2.762 1.828l.067.172H20a1 1 0 0 1 .117 1.993L20 13h-9.17a3 3 0 0 1-5.592.172L5.17 13H4a1 1 0 0 1-.117-1.993L4 11h1.17A3 3 0 0 1 8 9Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8-8c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3 3 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17A3 3 0 0 1 16 3Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clip-rule="evenodd"/>
                            </svg>
                            <h3 className="font-display font-semibold text-[19px] text-[#747070]">Filter</h3>
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="w-full flex flex-col gap-4 z-10 bg-white pt-8">
                    <div className="flex flex-row justify-between px-20" >
                        <div className="flex items-center space-x-2">
                            <Honeycomb height={22} width={22}/>
                            <h3 className="font-display font-semibold text-2xl">Recommended for You</h3>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 34 29">
                                <path fill="#9AA0A6" d="M0 14.266a2.688 2.688 0 0 1 2.688-2.687h21.285l-7.06-7.06A2.687 2.687 0 0 1 20.712.722l11.646 11.646a2.687 2.687 0 0 1 0 3.799L20.712 27.81a2.688 2.688 0 0 1-3.799-3.798l7.06-7.06H2.688A2.688 2.688 0 0 1 0 14.267Z"/>
                            </svg>
                        </span>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center w-full px-10 z-20">
                        <div className="w-full flex flex-row justify-start overflow-x-auto whitespace-nowrap">
                            <ScholarCard title="CAN YOU SEE ME" stars={100} status="trending" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="trending" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                        </div>
                        <div className="w-full flex flex-row justify-start overflow-x-auto whitespace-nowrap">
                            <ScholarCard title="CAN YOU SEE ME" stars={100} status="trending" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="trending" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                        </div>
                        <div className="w-full flex flex-row justify-start overflow-x-auto whitespace-nowrap">
                            <ScholarCard title="CAN YOU SEE ME" stars={100} status="trending" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="trending" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                            <ScholarCard title="Title" stars={100} status="new" onClick={()=>{}}/>
                        </div>
                    </div>
                </section>

                {/* <TextBox onChange={()=>{}}/>
                <PhoneInputBox onChange={(e)=>{setValue(e.target.value)}} width="400px" title="testing"/>
                <h1>Text : {value}</h1> */}

            </div>
        </>
    )
}
            // <NavbarDashboard />
            // <div className="flex flex-col items-center justify-center h-screen w-[]">
            //     <Testing />
            // <h1>Text : {value}</h1>
            // </div>
