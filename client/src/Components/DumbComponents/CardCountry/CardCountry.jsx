import React from 'react'
import { NavLink } from 'react-router-dom'

import './CardCountry.css'

function CardCountry({ id, name, flagImage, continent, population }) {
    return (
        <div className="card">
            <div className="ContentFlag">
                <img className="flagCountry" src={flagImage} alt="Imagen del país" />
            </div>
            <div className="BasicInfo">
                <h2>{name}</h2>
                <h3>Continente: {continent} </h3>
                <h3>Población: {population} </h3>
            </div>
            <div className='btn'>
                <NavLink to={`/country/${id}`}> <button className="ButtonCard"> Detalle del país </button> </NavLink>
            </div>
        </div>
    )
}

export default CardCountry