// Imports
import React from "react"

const Rating = ({ children, driver }) => {
    return (
        <p className={driver ? "Rating RatingDriver" : "Rating"}>
            {parseFloat(children) < 0.5
                ? "☆☆☆☆☆"
                : parseFloat(children) >= 0.5 && parseFloat(children) < 1.5
                ? "★☆☆☆☆"
                : parseFloat(children) >= 1.5 && parseFloat(children) < 2.5
                ? "★★☆☆☆"
                : parseFloat(children) >= 2.5 && parseFloat(children) < 3.5
                ? "★★★☆☆"
                : parseFloat(children) >= 3.5 && parseFloat(children) < 4.5
                ? "★★★★☆"
                : "★★★★★"}
        </p>
    )
}

export default Rating
