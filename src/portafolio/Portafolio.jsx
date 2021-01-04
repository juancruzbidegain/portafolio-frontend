import React, {useState, useEffect } from 'react'
import axios from "axios"
import "./Portafolio.css"


export default function Portafolio() {
    const[projects, setProjects] = useState([])
    useEffect(() => {
        axios.get('https://backend-portafolio.herokuapp.com/portafolio')
            .then(res => setProjects(res.data))            
    },[setProjects])
    
    return (
        <div className="container-portafolio">
            {projects && projects.map((py) => 
                <div className="card-portafolio">
                    <h1>{py.name}</h1>
                    <img 
                    src={py.image}
                    alt="" 
                    className="img-proyecto"/>
                    <p>{py.descripcion}</p>
                    <button><a href={py.link}>Demo</a></button>
                    
                </div>
            )}  
        </div>
    )
}
