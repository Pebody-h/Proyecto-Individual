import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './AllActivities.module.css'

function AllActivities({ conexion }) {
    return (
        <div className={style.content}>
            <div className={style.Container}>
                <div className={style.contentLinks}>
                    <NavLink to="/home"> <button className="buttonLink">Regresar a home</button> </NavLink>
                    <NavLink to="/activity"><button className="buttonLink">Crear actividad </button></NavLink>
                </div>
            </div>
            <div className={style.ActivitysContainer}>
                <div className={style.ActivitysList} >
                    {conexion}
                </div>
            </div>
        </div>
    )
}

export default AllActivities