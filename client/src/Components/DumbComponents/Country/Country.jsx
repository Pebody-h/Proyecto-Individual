import React from 'react'
import { Link } from 'react-router-dom'

import style from './Country.module.css'
import Logo from '../../../Assets/logo-toro-.png'


function Country({ flagImage, name, id, continent, capital, area, subregion, population, Activities }) {
    return (
        <div className={style.container}>
            <div className={style.CountryContainer}>
                <div className={style.nav}>
                    <div className='Logo' >
                        <img src={Logo} alt="Logo" />
                    </div>
                    <Link to="/home"> <button className={style.buttonReturn} >Regresa a home</button> </Link>
                </div>
                <div className={style.Container}>
                    <div className={style.Card}>
                        <div className={style.containesFlag} >
                            <img className={style.flagImg} src={flagImage} alt="bandera" />
                        </div>
                        <div className={style.detailInfo}>
                            <h1 className={style.detailInfo_Name}>{name}</h1>
                            <p>ID: {id}</p>
                            <p> CONTINENT: {continent}</p>
                            <p> CAPITAL: {capital}</p>
                            <p> AREA: {area}</p>
                            <p> SUBREGIÓN: {subregion}</p>
                            <p> POBLACIÓN: {population} </p>
                            <div className={style.DivActivities}>
                                ACTIVIDADES:
                                <ul>
                                    {Activities}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country