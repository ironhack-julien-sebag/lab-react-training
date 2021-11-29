// Imports
import React, { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {
    const [isClicked, setIsClicked] = useState(false)
    const clicked = isClicked ? imgClicked : img

    return (
        <img
            src={clicked}
            alt="Maxence"
            onClick={() => setIsClicked(!isClicked)}
            className="PictureMaxence"
        />
    )
}

export default ClickablePicture
