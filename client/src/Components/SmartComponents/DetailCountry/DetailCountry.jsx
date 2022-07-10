import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getDetail } from '../../../StateManagement/Redux/Actions/Actions'

import Country from '../../DumbComponents/Country/Country'

function DetailCountry() {
    const { id } = useParams()
    const Dispatch = useDispatch()
    useEffect(() => Dispatch(getDetail(id)), [Dispatch, id])
    const DetailOfCountry = useSelector(state => state.Countries.countryDetail)
    const ListActivities = DetailOfCountry.Activities?.map(a => { return <li className="ListStyle" key={a.id}>{a.name}</li> })
    return (
        <Country
            flagImage={DetailOfCountry.flagImage}
            name={DetailOfCountry.name}
            id={DetailOfCountry.id}
            continent={DetailOfCountry.continent}
            capital={DetailOfCountry.capital}
            area={DetailOfCountry.area}
            subregion={DetailOfCountry.subRegion}
            population={DetailOfCountry.population}
            Activities={ListActivities}
        />
    )
}

export default DetailCountry