//importación de modulos
import React from 'react'
import { NavLink } from 'react-router-dom'

//importación de componentes y recursos


//importación de styles
import './LadingPage.css'

function LadingPage() {
    return (
        <div className='Container'>
            <div className='Text'>
                <h1>Bienvenidos</h1>
                <p>
                    UN PROYECTO DONDE PODRAS VER PAISES DEL MUNDO Y CONOCER ACTIVIDADES QUE SE REALICEN EN ELLOS <br />
                    INCLUSO PODRAS AÑADIR LAS ACTIVIDADES QUE REALIZAS EN TU PAIS
                </p>
            </div>
            <div className='GoHome'>
                <h2> QUE ESPERAS </h2>
                <NavLink to='/home'><button className='ButtonHome'> Vamos </button></NavLink>
            </div>
        </div>
    )
}

export default LadingPage