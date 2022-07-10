import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities, getCountries } from '../../../StateManagement/Redux/Actions/Actions'

import NewActivity from '../../DumbComponents/NewActivity/NewActivity';

function CreateActivity() {
    const InitialForm = {
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        nameCountry: "",
    }
    const [form, setForm] = useState(InitialForm);
    const [errors, setErrors] = useState({});
    //console.log( typeof form.nameCountry)
    const Dispatch = useDispatch()
    useEffect(() => Dispatch(getCountries()), [Dispatch])
    const Allcountries = useSelector(state => state.Countries.countries)
    const ValidateForm = form => {
        let errors = {};
        // Esta exprecion regular controla si el nombre es valido
        let necessary = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
        if (!form.name.trim()) errors.name = 'Nombre de actividad es requerido'
        else if (!necessary.test(form.name)) errors.name = 'Nombre de actividad invalido'
        //else if (form.name.trim().length > 30) errors.name = 'El nombre de la actividad es demasiado largo'
        else if (!form.difficulty) errors.difficulty = 'La dificultad es obligatoria'
        else if (!form.duration) errors.duration = 'La duracion es obligatoria'
        else if (form.season === "Select") errors.season = 'La temporada es obligatoria'
        console.log(errors)
        return errors;
    }
    const HandleChange = e => {
        const { name, value } = e.target
        if (name === form.nameCountry && form.nameCountry !== value) {
            setForm({
                ...form,
                nameCountry: value
            })
        }
        setForm({
            ...form,
            [name]: value
        })
    }
    const HandleBlur = e => {
        setErrors(ValidateForm(form))
    }
    const HandleSubmit = e => {
        if (!form.name) {
            e.preventDefault();
            return alert('El Nombre Es Obligatorio')
        } else {
            setErrors(ValidateForm(form));
            if (Object.keys(errors).length === 0) {
                e.preventDefault();
                Dispatch(postActivities(form))
                setForm({
                    name: "",
                    difficulty: "",
                    duration: "",
                    season: "",
                    nameCountry: []
                })
                alert("Actividad Creada")
            } else {
                e.preventDefault();
                alert("Hay Errores En El Formulario")
            }
        }
    }
    const ListCountries = Allcountries.map(c => <option key={c.id} value={c.name}> {c.name}</option>)
    return (
        <NewActivity
            HandleSubmit={HandleSubmit}
            HandleChange={HandleChange}
            HandleBlur={HandleBlur}
            ListCountries={ListCountries}
            StateErrors={errors}
        />
    )
}

export default CreateActivity