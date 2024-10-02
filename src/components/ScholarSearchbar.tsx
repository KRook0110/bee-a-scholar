
import React from "react"

// todo : Auto complete on searh

interface Props {
    placeHolder?: string,
    width?: string,
    height?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
}

function ScholarSearchbar({
    placeHolder = "Search",
    width = "300px",
    height = "40px",
    onChange
}:Props) {

   return (
       <div
            className="bg-background-100 rounded-full shadow-[inset_2px_2px_4px_0_rgba(0_0_0/0.25)] flex flex-row items-center justify-between"
            style={{width: width, height: height}}>
            <input
                placeholder={placeHolder}
                type="text"
                className="bg-transparent w-full h-full rounded-full font-body text-xl pl-[20px] focus:outline-none"
                onChange={onChange} />
            <img
                src={window.document.URL + "/images/icons/Searchicon.svg"}
                alt=""
                className="w-[16px] h-[16px] mx-[20px]" />

       </div>
   )
}

export default ScholarSearchbar
