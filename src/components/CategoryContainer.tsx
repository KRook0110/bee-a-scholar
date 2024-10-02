import React, { useState } from "react"

interface Props {
    imageURL: string, // relative path to public
    bodyText: string,
    width?: string,
    height?:string,
}

function CategoryContainer({
    imageURL,
    bodyText,
    width = "270px",
    height = "300px",
}: Props) {
   return (
       <div
        className="flex flex-col items-center justify-center relative drop-shadow-lg"
        style={{width: width, height: height}} >
            <div
                className="w-full h-[140px] absolute bg-primary rounded-[30px] z-0 bottom-2"
            ></div>
            <img src={window.document.URL + imageURL} alt={imageURL} className="z-10"/>
            <h1 className="font-display z-10  text-xl font-bold mt-[20px] text-white">{bodyText}</h1>
       </div>
   )
}

export default CategoryContainer
