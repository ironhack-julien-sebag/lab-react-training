// Imports
import React from "react"

const cmToM = str => {
    return str.toString().slice(0, 1) + "." + str.toString().slice(1, 3)
}

const convertDate = date => {
    let dateToStr = date.toLocaleDateString("en-EN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    let dateArr = dateToStr.split(", ")

    return dateArr.join(" ")
}

const IdCard = props => {
    return (
        <div className="Card IdCard">
            <img
                src={props.picture}
                alt={`${props.firstName} ${props.lastName}`}
            />

            <div className="ContentIdCard">
                <p>
                    <strong>First name: </strong>
                    {props.firstName}
                </p>

                <p>
                    <strong>Last name: </strong>
                    {props.lastName}
                </p>

                <p>
                    <strong>Gender: </strong>
                    {props.gender}
                </p>

                <p>
                    <strong>Height: </strong>
                    {cmToM(props.height)}m
                </p>

                <p>
                    <strong>Birth: </strong>
                    {convertDate(props.birth)}
                </p>
            </div>
        </div>
    )
}

export default IdCard
