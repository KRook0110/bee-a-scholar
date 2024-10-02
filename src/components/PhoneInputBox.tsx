import React, { useState } from "react"
import InputTemplate from "@components/InputTemplate"

// tolong kalo ada yang ngerti ganti input tagnya supaya coman bs ketik nomor sama maxnya brp digit gitu

interface Props {
    width?: string,
    height?: string, // height for the text box not the title
    title?: string,
    alert?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
}

function PhoneInputBox({
    width,
    height,
    title,
    alert,
    onChange,
    placeholder = "Input"
}:Props) {
    return (
        <>
            <InputTemplate
                width={width}
                height={height}
                title={title}
                alert={alert}>

                <div className="flex flex-row items-center mx-[10px] gap-[10px] h-full">
                    <img
                        className="w-[40px]"
                        src={window.document.URL + "/images/icons/indonesiaflag.png"}
                        alt=""/>
                    <h1>+62</h1>
                    <div className="rounded-full h-[80%] w-0 border-[1px] border-background-200 mr-[20px]"></div>
                </div>

                <input
                    type="tel"
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`font-dislpay w-full h-full px-2 rounded bg-transparent focus:outline-none  text-xl`}
                />

            </InputTemplate>
        </>
    )
}

export default PhoneInputBox

