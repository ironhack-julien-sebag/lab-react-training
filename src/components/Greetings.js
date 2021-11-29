// Imports
import React from "react"

const Greetings = ({ lang, children }) => {
    const message =
        lang === "de"
            ? "Hallo"
            : lang === "en"
            ? "Hello"
            : lang === "es"
            ? "Hola"
            : lang === "fr"
            ? "Bonjour"
            : "WTF"
    return (
        <p className="Card">
            {message} {children}
        </p>
    )
}

export default Greetings
