// Imports
import React from "react"

const Random = ({ min, max }) => {
    const randomize = Math.floor(Math.random() * (max - min) + min)
    return (
        <p className="Card">
            Random value between {min} and {max}: {randomize}
        </p>
    )
}

export default Random
