import React, { useState } from "react"
import Honeycomb from "../../public/images/icons/Honeycomb"
import Button from "./Button"

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
            
            <div className={ 
                `w-[450px] h-dvh fixed bg-white z-50 transition-all top-0 
                ${ burgerState?"right-0":"right-[-450px]" } 
                flex flex-col items-center py-10 space-y-3` }
            >

                <div className="flex flex-row items-center right-8 top-8 absolute" onClick={()=>{setBurgerState(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 42 42">
                        <path fill="#69695D" d="M7.77 7.77a2.625 2.625 0 0 1 3.71 0L21 17.287l9.52-9.517a2.623 2.623 0 0 1 3.71 3.71L24.714 21l9.516 9.52a2.624 2.624 0 0 1-3.71 3.71L21 24.714l-9.52 9.516a2.623 2.623 0 1 1-3.71-3.71L17.287 21 7.77 11.48a2.625 2.625 0 0 1 0-3.71Z"/>
                    </svg>
                </div>

                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="none" viewBox="0 0 106 106">
                        <path fill="#000" fill-rule="evenodd" d="M72 38.75a19 19 0 1 1-38 0 19 19 0 0 1 38 0Zm-9.5 0a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Z" clip-rule="evenodd"/>
                        <path fill="#000" fill-rule="evenodd" d="M53 .75C24.144.75.75 24.144.75 53S24.144 105.25 53 105.25 105.25 81.856 105.25 53 81.856.75 53 .75ZM10.25 53a42.588 42.588 0 0 0 9.063 26.325A42.701 42.701 0 0 1 53.309 62.5a42.655 42.655 0 0 1 33.687 16.425 42.748 42.748 0 0 0-20.314-66.421A42.75 42.75 0 0 0 10.25 53ZM53 95.75a42.56 42.56 0 0 1-26.942-9.557A33.201 33.201 0 0 1 53.308 72a33.203 33.203 0 0 1 27.024 13.87A42.56 42.56 0 0 1 53 95.75Z" clip-rule="evenodd"/>
                    </svg>
                    
                    <h3 className="font-display flex flex-row space-x-1.5 mt-3">
                        <Honeycomb height={22} width={22}/>
                        <span className="font-medium">Hello, </span><span className="font-bold">Derren Malaka!</span>
                    </h3>

                    <a href="https://google.com" className="flex flex-row font-display font-bold text-sm text-lightBlue">Edit Profile 
                        <span className="ml-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                            <path fill="#63B8F6" fill-rule="evenodd" d="M15.098 2.37a2.25 2.25 0 0 0-3.181 0l-.53.531 3.712 3.713.53-.53a2.25 2.25 0 0 0 0-3.183l-.53-.531Zm-1.06 5.304-3.713-3.712-6.817 6.818c-.15.149-.254.337-.301.543l-.772 3.341a.75.75 0 0 0 .9.9l3.342-.771c.206-.047.393-.152.542-.3l6.819-6.819Z" clip-rule="evenodd"/>
                        </svg>
                        </span>
                    </a>

                    <div className="my-3">
                        <Button type="gold" children={
                            <div className="flex flex-row items-center space-x-1">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" fill="none" viewBox="0 0 24 30">
                                        <path fill="#fff" d="M21 19.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 19.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9ZM5 12v6h1.25v-2H7a2 2 0 1 0 0-4H5Zm1.25 3v-2h.5a1 1 0 0 1 0 2h-.5Zm3.5-3v6H11v-2h.75l.66 2h1.32l-.79-2.39A2 2 0 0 0 11.75 12h-2ZM11 15v-2h.5a1 1 0 0 1 0 2H11Zm6-3c-1.38 0-2.5 1.34-2.5 3s1.12 3 2.5 3 2.5-1.34 2.5-3-1.12-3-2.5-3Zm0 1.25c.76 0 1.38.78 1.38 1.75s-.62 1.75-1.38 1.75c-.76 0-1.37-.78-1.37-1.75s.61-1.75 1.37-1.75Z"/>
                                    </svg>
                                </span>
                                <h3>Bee-a-Scholar PRO</h3>
                            </div>}/>
                    </div>
                    
                    <div className="flex flex-col bg-gray-200 px-10 py-5 rounded-lg mt-3">
                        <ul className="space-y-1.5">
                            <li>
                                <a className="flex flex-row space-x-2 items-center font-display font-medium text-[#5F5F5F]" href="">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" fill="none" viewBox="0 0 24 30">
                                            <path fill="#69695D" fill-rule="evenodd" d="M7.527 5.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7 7 0 0 1-9.35-8.26 1.01 1.01 0 0 1 1.72-.432l3.045 3.307 2.297-.845.847-2.3-3.309-3.04a1.01 1.01 0 0 1 .433-1.723Z" clip-rule="evenodd"/>
                                        </svg>
                                    </span>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex flex-row space-x-2 items-center font-display font-medium text-[#5F5F5F]" href="">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" fill="none" viewBox="0 0 24 30">
                                            <path fill="#69695D" d="M8 15V7.4H7V5.5h10v1.9h-1V15l2 1.9v1.9h-5.2v5.7h-1.6v-5.7H6v-1.9L8 15Z"/>
                                        </svg>
                                    </span>
                                    <span>Pinned Scholarships</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex flex-row space-x-2 items-center font-display font-medium text-[#5F5F5F]" href="">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" fill="none" viewBox="0 0 24 29">
                                            <g clip-path="url(#a)">
                                                <path fill="#69695D" d="M20.156 2.719H3.844A1.813 1.813 0 0 0 2.03 4.53v19.94a1.812 1.812 0 0 0 1.813 1.812h16.312a1.812 1.812 0 0 0 1.813-1.812V4.53a1.813 1.813 0 0 0-1.813-1.812ZM7.47 22.656a1.36 1.36 0 1 1 0-2.72 1.36 1.36 0 0 1 0 2.72Zm0-4.531a1.36 1.36 0 1 1 0-2.718 1.36 1.36 0 0 1 0 2.718ZM12 22.656a1.36 1.36 0 1 1 0-2.719 1.36 1.36 0 0 1 0 2.72Zm0-4.531a1.359 1.359 0 1 1 0-2.718 1.359 1.359 0 0 1 0 2.718Zm4.531 4.531a1.36 1.36 0 1 1 0-2.72 1.36 1.36 0 0 1 0 2.72Zm0-4.531a1.36 1.36 0 1 1 0-2.719 1.36 1.36 0 0 1 0 2.719Zm1.813-6.344a.906.906 0 0 1-.907.906H6.563a.906.906 0 0 1-.906-.906V7.25a.906.906 0 0 1 .907-.906h10.875a.906.906 0 0 1 .906.906v4.531Z"/>
                                            </g>
                                            <defs>
                                                <clipPath id="a">
                                                <path fill="#fff" d="M0 0h24v29H0z"/>
                                                </clipPath>
                                            </defs>
                                        </svg>          
                                    </span>
                                    <span>
                                        Compatibility Scorer
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col mt-5 mr-20">
                        <ul className="space-y-1.5">
                            <li>
                                <a className="flex flex-row space-x-2 items-center font-display" href="">
                                    <span>
                                        <Honeycomb height={22} width={22}/>       
                                    </span>
                                    <span>
                                        About Us
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="flex flex-row space-x-2 items-center font-display" href="">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" fill="none" viewBox="0 0 24 29">
                                            <path fill="#1C429A" d="M6.857 4.945C8 5.778 8.89 6.915 9.65 8.003l.442.644.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899.9.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.469 1.469 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017-.233-.02-.258-.03-.281-.038-.305-.05-.16-.03-.336-.072-.176-.04-.366-.094-.385-.11-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402-.11-.385-.094-.366-.078-.346a11.936 11.936 0 0 1-.063-.326l-.05-.305-.04-.281-.029-.258-.02-.233-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159Zm8.135 3.595.116.013a3.5 3.5 0 0 1 2.858 2.96 1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .232-1.983ZM15 5.5a6 6 0 0 1 6 6 1 1 0 0 1-1.993.117L19 11.5a4 4 0 0 0-3.738-3.991L15 7.5a1 1 0 0 1 0-2Z"/>
                                        </svg>       
                                    </span>
                                    <span>
                                        Contact Us
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            
            </div>

        </>
    )
}

export default NavbarBurgerMenu
