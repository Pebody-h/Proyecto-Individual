import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './NewActivity.module.css'

function NewActivity({ HandleChange, HandleBlur, HandleSubmit, ListCountries, StateErrors }) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.btn}>
                    <NavLink to="/activities"> <button className="buttonCustom">Regresar</button> </NavLink>
                </div>
                <h2 >CREAR UNA ACTIVIDAD</h2>
                <div className={style.form}>
                    <form className={style.preventStyle} onSubmit={e => HandleSubmit(e)}>
                        <div>
                            <label> NOMBRE ACTIVIDAD:  EJ: Natación</label>
                            <br />
                            <div className={style.contentInput}>
                                <input className={style.title} type="text" name="name" onBlur={e => HandleBlur(e)} onChange={e => HandleChange(e)} placeholder="NOMBRE DE LA ACTIVIDAD" />
                            </div>
                            {StateErrors.name ?? <span className={style.span}>{StateErrors.name}</span>}
                        </div>
                        <div>
                            <label>DIFICULTAD: </label>
                            <br />
                            <div className={style.contentInput1}>
                                <select name="difficulty" onChange={e => HandleChange(e)} onBlur={e => HandleBlur(e)}>
                                    <option value="Select a difficulty">DIFICULTAD</option>
                                    <option value="1">1-(Muy Facil)</option>
                                    <option value="2">2-(Facil)</option>
                                    <option value="3">3-(Medio)</option>
                                    <option value="4">4-(Dificil)</option>
                                    <option value="5">5-(Muy Dificil)</option>
                                </select>
                                <i></i>
                            </div>
                            {StateErrors.difficulty ?? <span className={style.span}>{StateErrors.difficulty}</span>}
                        </div>
                        <div>
                            <label>DURACIÓN: </label>
                            <br />
                            <div className={style.contentInput2}>
                                <select name="duration" onChange={e => HandleChange(e)} onBlur={e => HandleBlur(e)}>
                                    <option value="Select a duration">DURACIÓN</option>
                                    <option value={1}>1 Hora</option>
                                    <option value={2}>2 Horas</option>
                                    <option value={3}>3 Horas</option>
                                    <option value={4}>4 Horas</option>
                                    <option value={5}>5 Horas</option>
                                    <option value={6}>6 Horas</option>
                                </select>
                                <i></i>
                            </div>
                            {StateErrors.duration ?? <span className={style.span}>{StateErrors.duration}</span>}
                        </div>
                        <div>
                            <label>TEMPORADA: </label>
                            <br />
                            <div className={style.contentInput3}>
                                <select name="season" onChange={e => HandleChange(e)} onBlur={e => HandleBlur(e)}>
                                    <option value="Select a season">TEMPORADA</option>
                                    <option value="Verano">Verano</option>
                                    <option value="Otoño">Otoño</option>
                                    <option value="Invierno">Invierno</option>
                                    <option value="Primavera">Primavera</option>
                                </select>
                                <i></i>
                            </div>
                            {StateErrors.season ?? <span className={style.span}>{StateErrors.season}</span>}
                        </div>
                        <div>
                            <label>PAÍS: </label>
                            <br />
                            <div className={style.contentInput4}>
                                <select name="nameCountry" onChange={e => HandleChange(e)}>
                                    {ListCountries}
                                </select>
                                <i></i>
                            </div>
                        </div>
                        <div className={style.contentButton} >
                            <input value='Create' type="submit" className={style.buttonCustom} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewActivity