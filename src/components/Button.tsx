import { ReactNode } from "react"

interface Props {
    height?: string,
    width?: string,
    onClick?: () => void,
    fill?: boolean,
    type?: string,
    children: ReactNode,
};

function Button({ height = "45px", width = "215px", onClick, fill = true, type="yellow", children}: Props) {

    return (<>
        <div onClick={onClick}
            className={`cursor-pointer rounded font-display font-bold text-[16px] text-white flex flex-col items-center justify-center
                ${type==="gold" ?
                    `bg-gradient-to-r from-[#E89110] to-[#FFBD5A] drop-shadow-[1px_6px_7px_rgba(255,214,144,1)] text-white`:"bg-secondary"}                

                ${fill ? "":"text-secondary justify-center border-[3px] border-secondary border-[3] bg-secondary/[0.2]"}

                hover:bg-secondary-dark hover:transition-colors active:bg-secondary-dark active:shadow-inner`}
            style={{ width: width, height: height }} >
            {children}
        </div>
    </>)
}

export default Button;
