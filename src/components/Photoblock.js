import React from "react"

const Photoblock = props => {
    console.log(props.planet)

    return (
        <div className="container">
            <h2>{props.planet.date}</h2>
                <div className="photo-card">
                    <h2>{props.planet.title}</h2>
                    <img alt="world" src={props.planet.url} />
                </div>
                    <div className="description">
                        <p>{props.planet.explanation}</p>
                    </div>      
        </div>
    )
}

export default Photoblock