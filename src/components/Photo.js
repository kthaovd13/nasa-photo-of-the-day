import React, { useEffect, useState } from "react"
import axios from "axios"
import Photoblock from "./Photoblock"



const Photo = (() => {

    const [planet, setPlanet] = useState([])

    useEffect (() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=BOplO9bKJcc3aIm1ICNCwTXVI9Hi8QugwJwO1Gl8`)
        .then(res => setPlanet(res.data))
        .catch(err => {console.log("The data was not returned", err)})
    }, [])

    return (
        <div className="planetsApi">
            <Photoblock planet={planet} />
        </div>
    )
})

export default Photo