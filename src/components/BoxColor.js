// Imports
import React from "react"

const colorToHex = c => {
    let hex = c.toString(16)
    return hex.length === 1 ? "0" + hex : hex
}

const convertRGB = (r, g, b) => {
    return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b)
}

const BoxColor = ({ r, g, b }) => {
    return (
        <div
            className="Card BoxColor"
            style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
            }}
        >
            <p>
                rgb({r}, {g}, {b})
            </p>

            <p>{convertRGB(r, g, b)}</p>
        </div>
    )
}

export default BoxColor
