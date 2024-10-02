import { ReactNode } from "react"

interface Props {
    height?: string,
    width?: string,
    onClick?: () => void,
    fill?: boolean,
    children: ReactNode,
};

function YellowButton({ height = "45px", width = "215px", onClick, fill = false, children }: Props) {

    return (<>
        <div onClick={onClick}
            className={`cursor-pointer rounded font-display font-bold text-[16px] text-white flex flex-col items-center justify-center border-[3px] border-secondary ${fill?"bg-secondary":"bg-secondary/[0.2]"} active:bg-secondary-dark active:shadow-inner`}
            style={{ width: width, height: height }} >
            {children}
        </div>
    </>)
}

export default YellowButton;
