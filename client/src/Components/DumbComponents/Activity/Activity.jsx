import React from 'react'

import style from './Activity.module.css'

function Activity({ id, name, season, difficulty, duration, flagCountry, handleClick }) {
    return (
        <div className={style.content}>
            <div className={style.container}>
                <div className={style.Content}>
                    <div className={style.Info}>
                        <span> <b>Nombre</b>: {name} </span>
                        <br />
                        <span> <b>Temporada</b>: {season}</span>
                        <br />
                        <span> <b>Dificualtad</b>: {difficulty} </span>
                        <br />
                        <span> <b>Duración</b>: {duration} Horas </span>
                    </div>
                    <div className={style.btn}>
                        <button className={style.destroyElement} onClick={() => handleClick(id)}>X</button>
                    </div>
                </div>
                <div className={style.containerImgIco}>
                    {flagCountry}
                </div>
            </div>
        </div>
    )
}

export default Activity