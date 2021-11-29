// Imports
import React from "react"

// Images
import VisaLogo from "../assets/images/visa.png"
import MastercardLogo from "../assets/images/master-card.svg"

const CreditCard = props => {
    const convertNumber = number => {
        let newNum = ""

        for (let i = 0; i < number.length; i++) {
            if (i < number.length - 4) {
                newNum += "•"
            } else {
                newNum += number[i]
            }
        }

        let spaced = [...newNum]
            .map((d, i) => (i % 4 === 0 ? " " + d : d))
            .join("")
            .trim()

        return spaced
    }

    const addZero = n => {
        return [...n.toString()].length === 1 ? `0${n}` : n
    }

    return (
        <div
            className="CreditCard"
            style={{ backgroundColor: props.bgColor, color: props.color }}
        >
            <img
                src={
                    props.type === "Visa"
                        ? VisaLogo
                        : props.type === "Master Card"
                        ? MastercardLogo
                        : ""
                }
                alt={`Logo ${props.type}`}
                className="logo"
            />

            <h3 className="Number">{convertNumber(props.number)}</h3>

            <div className="Info">
                <div className="Expiration">
                    <p>
                        Expires {addZero(props.expirationMonth)}/
                        {props.expirationYear}
                    </p>

                    <p>{props.bank}</p>
                </div>

                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard
