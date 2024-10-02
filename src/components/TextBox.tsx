import React, { useState } from "react"
import InputTemplate from "@components/InputTemplate"

interface Props {
    width?: string,
    height?: string, // height for the text box not the title
    title?: string,
    alert?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
}

function TextBox({
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
                <input
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`font w-full h-full px-2 rounded bg-transparent focus:outline-none font-display text-xl`}
                />

            </InputTemplate>
        </>
    )
}

export default TextBox
