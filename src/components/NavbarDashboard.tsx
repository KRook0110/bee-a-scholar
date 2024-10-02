import React, { useState } from "react"
import ScholarSearchbar from "@components/ScholarSearchbar"
import NavbarBurgerMenu from "./NavbarBurgerMenu"

function NavbarDashboard() {
   return (
       <div className="fixed bg-background-50 w-full h-[80px] drop-shadow-lg flex flex-row justify-between items-center px-[30px] z-50">
            {/* left */}
            <div className="flex flex-row items-center justify-start gap-[15px]">
                <img src={window.document.URL + "/images/logo/bee-a-scholar-logo.svg"} alt="logo"/>
                <h1 className="font-display text-2xl font-bold">
                    Bee-a-scholar
                </h1>
            </div>
            {/* right */}
            <div className="flex flex-row items-center justify-end gap-[15px]">
                <ScholarSearchbar onChange={()=>{}} width="400px"/>
                <NavbarBurgerMenu />
            </div>
       </div>
   )
}

export default NavbarDashboard
