import React, { useState } from "react"
import ScholarSearchbar from "@components/ScholarSearchbar"
import NavbarBurgerMenu from "./NavbarBurgerMenu"
import Button from "./Button"

interface Props {
    type?: string
};

function NavbarDashboard( {type = "default"}: Props) {
   return (
       <div className = {`fixed bg-background-50 h-[80px] drop-shadow-lg flex flex-row justify-between items-center px-[30px] z-50 w-full
       ${type === "default" ? "bg-white" : 
            (type === "landing" ? "bg-primary" : 
                (type === "pro" ? "bg-secondary" : "") )
       }`}>
            {/* left */}
            <div className="flex flex-row items-center justify-start gap-[15px]">
                <img src={window.document.URL + "/images/logo/bee-a-scholar-logo.svg"} alt="logo"/>
                <h1 className={`font-display text-2xl font-bold 
                    ${type === "default" ? "text-black" : "text-white"}`}>
                    Bee-a-Scholar <span className={`${type === "pro" ? "visible text-black" : "invisible"}`}>PRO</span>
                </h1>
            </div>
            {/* right */}
            <div className="flex flex-row items-center justify-end gap-[15px]">
                {((type === "default") && (
                    <>
                        <ScholarSearchbar onChange={() => {}} width="400px" />
                        <NavbarBurgerMenu />
                    </>
                ))}
                {((type === "landing") && (
                    <div className="flex flex-row items-center space-x-20 mx-20">
                        <Button children="GET STARTED"></Button>
                        <a className="font-display font-bold text-lg text-white"href="">Contact Us</a>
                    </div>
                ))}
                {((type === "pro") && (
                    <div className="flex flex-row items-center">
                        <a className="font-display font-semibold text-lg text-black"href="">Back to website </a>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17 5-5-5-5"/>
                            </svg>
                        </span>
                    </div>
                ))}
            </div>
       </div>
   )
}

export default NavbarDashboard
