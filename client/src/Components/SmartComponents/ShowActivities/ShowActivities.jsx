import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getActivities, putActivity } from '../../../StateManagement/Redux/Actions/Actions'

import AllActivities from '../../DumbComponents/AllActivities/AllActivities'
import Activity from '../../DumbComponents/Activity/Activity'

function ShowActivities() {
    const Dispatch = useDispatch()
    useEffect(() => Dispatch(getActivities()), [Dispatch])
    const Activities = useSelector(state => state.Activities.activities)
    const HandleClick = (id) => {
        Dispatch(putActivity(id))
        Dispatch(getActivities())
        alert(`Eliminada exitosamente : ${id}`)
    }
    const ActivityList = Activities.map(act =>
        <Activity
            key={act.id}
            id={act.id}
            handleClick={HandleClick}
            name={act.name}
            season={act.season}
            difficulty={act.difficulty}
            duration={act.duration}
            flagCountry={act.Countries.map(c => <NavLink key={c.id} to={`/country/${c.id}`}><img className="imgIco" src={c.flagImage} alt="Imagen" /></NavLink>)}
        />)
    return (
        <AllActivities conexion={ActivityList} />
    )
}

export default ShowActivities