import React from "react";

const RandomColor = (props) => {
    const currentcolor = (
        {"colors": [
            {
                "timestamp": 1187574800, 
                "hex": "dcebd2", 
                "id": 50162, 
                "tags": [
                    {
                        "timestamp": 1108110850, 
                        "id": 2561, 
                        "name": "green"
                    },
                    {
                        "timestamp": 1109629706, "id": 5943, "name": "vision"
                    }]}], 
        "schemes": [], 
        "schemes_history": {}, 
        "success": true, "colors_history": {
            "dcebd2": [
                {
                    "d_count": 0, 
                    "id": "2561", 
                    "a_count": 1, 
                    "name": "green"
                },
                {
                    "d_count": 0, 
                    "id": "5943", 
                    "a_count": 1, 
                    "name": "vision"
                }]}, 
        "messages": [],
        "new_color": "dcebd2"}
    )

    const [color, setColor] = React.useState({
        randomColor: currentcolor 
    })

    
    const [allColors, setAllColors] = React.useState([])

    React.useEffect(() => {
        fetch("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
            .then(res => res.json())
            .then(data => setAllColors(data))
    }, [])
    
    const getColor = () => {
        const randomNumber = Math.floor(Math.random() * allColors.length)
        const url = allColors[randomNumber].url
        setColor(prevColor => ({
            ...prevColor,
            randomColor: url
        }))
        
    }
    
    return (
        <main style={{backgroundColor: color.randomColor}}>
            <button className="form--button" onClick={getColor}>Pick a New Color</button>
        </main>
    )
}

export default RandomColor;