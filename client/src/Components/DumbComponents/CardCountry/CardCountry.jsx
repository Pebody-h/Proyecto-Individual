import React from 'react'
import { NavLink } from 'react-router-dom'

function CardCountry({ id, name, flagImage, continent, population }) {
    return (
        <div className="card">
            <div className="ContentFlag">
                <img className="flagCountry" src={flagImage} alt="Imagen del país" />
            </div>
            <div className="BasicInfo">
                <div className="nameCountry">
                    <h3> {name} </h3>
                </div>
                <div className="Info">
                    <label> {continent} </label>
                </div>
                <div className="Info">
                    <span> population: {population} </span>
                </div>
                <div className="ContainerButtonCard">
                    <NavLink to={`/country/${id}`}> <button className="ButtonCard"> Detalle del país </button> </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CardCountry