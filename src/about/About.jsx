import React, {useState, useEffect} from 'react'
import axios from "axios"
import "./About.css"

export default function About() {

    const [information, setInformation] = useState({})
    useEffect(() => {
        axios.get('https://backend-portafolio.herokuapp.com/about')
            .then(
                res => setInformation(res.data[0])
                )},[setInformation])
    

    return (
        <div className="about">
            <div className="cont-img">
                <img className="img-perfil" src={information.photo} alt=""/>
            </div>
            <div className="cont-datos">
                <h1>{information.name}</h1>
                <h2>{information.profession}</h2>   
                <h3>{information.about_me}</h3>
                <ul className="skilsss">
                    {information.skills && information.skills.map((sk, i) => 
                        <p className="sk" key={i}>{sk}</p>
                    )}
                </ul>
            </div>
        </div>
    )
}

