import React from "react";
import axios from "axios";

const RandomColor = (props) => {

    const [color, setColor] = React.useState("")

    React.useEffect(() => {
        getColor()
    }, [])
    
    const getColor = () => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => setColor(res.data.colors[0].hex))        
    }
    
    return (
        <main>
            <header>
                <h1>React Random Color Component Generator</h1>
            </header>
            <div className="box" style={{background: `#${color}`}}></div>
            <button className="form--button" onClick={getColor}><h2>Pick a New Color</h2></button>
        </main>
    )
}

export default RandomColor;