//importación de modulos
import React from 'react'
import { NavLink } from 'react-router-dom'

//importación de styles
import style from './LadingPage.module.css'

function LadingPage() {
    return (
        <div className={style.containerp}>
            <div className={style.Container}>
                <div className={style.ContainerHijo}>
                    <div>
                        <h1 className={style.text1}>PI CON</h1>
                    </div>
                    <div className={style.text2}>
                        {/* <img className={style.text2} src={img} alt="" /> */}
                    </div>
                    <div>
                        <h1 className={style.text3}>PAÍSES</h1>
                    </div>
                </div>
                <p>
                    UN PROYECTO DONDE PODRAS VER PAÍSES DEL MUNDO Y CONOCER ACTIVIDADES QUE SE REALICEN EN ELLOS<br />
                    INCLUSO PODRAS AÑADIR LAS ACTIVIDADES QUE REALIZAS EN TU PAIS
                </p>
                <div className={style.psprite}>
                    <div className={style.sprit}></div>
                </div>
                <h2>COMENCEMOS</h2>
                <NavLink to='/home'><button className={style.ButtonHome}> Vamos </button></NavLink>
            </div>
        </div>
    )
}

export default LadingPage