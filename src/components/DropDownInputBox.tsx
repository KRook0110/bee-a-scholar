

import React, { useState } from "react"
import InputTemplate from "@components/InputTemplate"

interface Option {
    label: string,
    value: string,
}
interface Props {
    width?: string,
    height?: string, // height for the text box not the title
    title?: string,
    alert?: boolean,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    options: Option[],
}

function DropDownInputBox({
    width,
    height,
    title,
    alert,
    onChange,
    options
}: Props) {

    const [dropDownValue, setDropDrownValue] = useState('');

    return (
        <>
            <InputTemplate
                width={width}
                height={height}
                title={title}
                alert={alert}
            >
                <select
                    className="w-full h-full rounded bg-transparent font-body text-lg mx-[15px]"
                    value={dropDownValue}
                    onChange={(e) => {
                        setDropDrownValue(e.target.value);
                        onChange(e);
                    }}>

                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                                {option.label}
                        </option>
                    ))}
                </select>


            </InputTemplate>
        </>
    )
}

export default DropDownInputBox
