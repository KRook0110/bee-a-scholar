import React, { useState } from "react"

interface Props {
    width?: string,
    height?: string,
}

function NavbarBurgerMenu({
    width = "34px",
    height = " 24px",
}:Props) {
    const [burgerState, setBurgerState] = useState(false);

    return (
        <>
            <div
                className="p-[10px] rounded active:bg-background-100 active:shadow-inner active:outline active:outline-2 outline-background-200 transition-all"
                onClick={()=>{ setBurgerState(!burgerState) }}
            >
                <img
                    style={{
                        width: width,
                        height: height,
                    }}
                    src={window.document.URL + "/images/icons/BurgerMenuIcon.svg"}
                    alt="Burger Menu Icon" />
            </div>

            { /**/ }
            <div
                onClick={()=>{setBurgerState(false);}}
                className={ `transition-all w-dvw h-dvh fixed z-40 right-0 top-0 ${burgerState?"bg-background-900/30":"pointer-events-none bg-background-900/0"}` }>
            </div>
            <div className={ `w-[450px] h-dvh fixed bg-red-800 z-50 transition-all top-0 ${ burgerState?"right-0":"right-[-450px]" }` }>
                testing
            </div>

        </>
    )
}

export default NavbarBurgerMenu
