import React from "react"

const alertColorScheme = "bg-alert-50 border-alert-400";

interface Props {
    width?: string,
    height?: string, // height for the text box not the title
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    title?: string,
    phoneNumber?: boolean,
    alert?: boolean,
}

function TextBox({
    width = "100%",
    height = "50px",
    onChange,
    placeholder,
    title = "",
    phoneNumber = false,
    alert = false,
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

                {
                    phoneNumber &&
                    <>
                            <img className="w-[35px] h-[23px] ml-2" src={window.document.URL + '/images/icons/indonesiaflag.png'} alt="indonesianflag.png"></img>
                    <span className="mx-2 text-background-400"> +62 </span>
                    <div className={`h-4/5 w-0 border-[1px] rounded-full` }></div>
                    </>
                }
                <input
                    onChange={onChange}
                    placeholder={placeholder}
                    className={ `font w-full h-full px-2 rounded bg-transparent focus:outline-none font-body text-xl` }
                >

                </input>
            </div>
        </div>
    )
}

export default TextBox
