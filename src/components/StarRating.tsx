import React, { useState } from "react"

interface Props {
    ratingPercentage: string, // out of 100
    width?: string,
    height?: string,
}

// style number 1
function StarRating({
    ratingPercentage = "0%",
    width = "144px",
    height = "auto",
}: Props) {
    return (
        <div
            className="relative"
            style={{width: width, height: height}} >

            <div className="w-full h-full overflow-hidden">
                <img src="images/icons/RatingStarsInactive.svg" alt=""/>
            </div>
            <div
                className="h-full overflow-hidden absolute top-0"
                style={{width:ratingPercentage}}>
                <img src="images/icons/RatingStars.svg" alt="" className="objct-none min-w-[144px]"/>
            </div>
        </div>
    )
}

export default StarRating;
