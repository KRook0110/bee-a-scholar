import React, { useState } from "react"
import StarRating from "./StarRating";

interface Props {
    imageURL?: string,
    imageHeight?: string,
    status?: 'none' | 'new' | 'trending',
    isPinned?: boolean,
    stars?: number, // percent 0% - 100%
    width?: string,
    height?: string,
    title: string,
    lastUpdated?: Date,
    deadline?: Date,
    onClick: ()=>void,
    onClickPin?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void,
}

function handlePinToggle(pinState: boolean) {

}

function ScholarCard({
    imageURL = "/images/placeholders/card_placeholder.svg",
    imageHeight = "180px",
    status = 'none',
    isPinned,
    stars = 0,
    width = "300px",
    height = "270px",
    title,
    onClick,
    lastUpdated = new Date(), // gets the current date
    deadline = new Date(),
    onClickPin,
}: Props) {

    const [pinned, setPinned] = useState(isPinned);
    const deadlineToday = (deadline.setHours(0, 0, 0, 0) == (new Date()).setHours(0, 0, 0, 0));
    const updatedToday = (lastUpdated.setHours(0, 0, 0, 0) == (new Date()).setHours(0, 0, 0, 0));
    return (
        <div className="relative">
            <div
                className="rounded-lg bg-background-50 drop-shadow-xl overflow-hidden"
                style={{ width: width, height: height }}
            >
                {/* Scholar Poster/Image */}
                <img
                    src={window.document.URL + imageURL}
                    alt=""
                    style={{ height: imageHeight }}
                    onClick={onClick}
                    className="cursor-pointer w-full rounded-lg object-cover bg-background-300" />

                {/* Information */}
                <div className="flex flex-col items-start justify-start w-full h-full px-[20px] py-[15px]">

                    <h1 className="font-display font-medium text-[14px]">{title}</h1>
                    <h1 className="font-body font-light text-background-500 text-[12px]">
                        {updatedToday ?
                            "Updated Today" :
                            "Updated on " + lastUpdated.getDate() + '/' + lastUpdated.getMonth() + '/' + lastUpdated.getFullYear()
                        }
                    </h1>
                    <h1 className="font-body font-light text-primary-light/70 text-[12px]">

                        {deadlineToday ?
                            "Deadline: Today" :
                            "Deadline: " + lastUpdated.getDate() + '/' + lastUpdated.getMonth() + '/' + lastUpdated.getFullYear()
                        }
                    </h1>
                    {/* Right Side */}
                    <div className="absolute right-[15px] mt-[-2px] ">
                        <StarRating ratingPercentage={stars + "%"} /></div>
                        <h1 onClick={onClick}
                            className="cursor-pointer absolute font-light font-body text-primary-dark/50 text-sm right-[17px] bottom-[20px]">
                            Click to read more
                    </h1>
                </div>

                {/* Pin Image */}
                <img
                    onClick={(e)=>{
                        setPinned(!pinned);
                        if(onClickPin !== undefined) onClickPin(e);
                        handlePinToggle((pinned === undefined)?false: pinned);
                    }}
                    className="cursor-pointer absolute top-[15px] left-[15px] w-[20px]"
                    src={window.document.URL + (pinned ? "/images/icons/Pinned.svg" : "/images/icons/Unpinned.svg")}
                    alt="" />

            </div>
            {/* Status */}
            {
                status === 'new' &&
                <h1 className="w-[75px] h-[40px] text-xl font-display text-background-50 font-bold bg-alert-800/80 absolute right-0 top-0 rounded flex items-center justify-center">
                    NEW
                </h1>
            }
            {
                status === 'trending' &&
                <img
                        className="absolute top-[-35px] right-[-35px]" src={window.document.URL + "/images/icons/Trending.svg"}
                        alt=""
                    />
            }
        </div>
    )
}

            export default ScholarCard
