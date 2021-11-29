// Imports
import React from "react"

import Rating from "./Rating"

const DriverCard = ({ name, rating, img, car }) => {
    return (
        <div className="DriverCard">
            <img src={img} alt={`Profile ${name}`} />

            <div className="CardContent">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>
                    {car.model} - {car.licensePlate}
                </p>
            </div>
        </div>
    )
}

export default DriverCard
