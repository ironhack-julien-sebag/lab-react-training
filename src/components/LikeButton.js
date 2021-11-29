// Imports
import React, { useState } from "react"

const LikeButton = () => {
    const [count, setCount] = useState(0)

    const randomColor = arr => {
        let num = Math.floor(Math.random() * arr.length)
        return arr[num]
    }

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    return (
        <button
            className="LikeButton"
            onClick={() => setCount(count + 1)}
            style={{ backgroundColor: randomColor(colors) }}
        >
            {count} Likes
        </button>
    )
}

export default LikeButton
