import React, { ReactNode } from "react"

const alertColorScheme = "bg-alert-50 border-alert-400";

interface Props {
    width?: string,
    height?: string, // height for the text box not the title
    title?: string,
    alert?: boolean,
    children: ReactNode,
}

function InputTemplate({
    width = "100%",
    height = "50px",
    title = "",
    alert = false,
    children
}: Props) {

    return (
        <div
            className=""
            style={{ width: width }}
        >
            {title !== undefined && <h1 className="font-display text-[16px] text-primary mb-[8px] font-bold">{title}</h1>}

            <div
                className={`rounded border-2 flex flex-row items-center justify-start ${alert ? alertColorScheme : 'bg-background-50'}`}
                style={{ width: width, height: height }}>

                {children}

            </div>
        </div>
    )
}

export default InputTemplate
