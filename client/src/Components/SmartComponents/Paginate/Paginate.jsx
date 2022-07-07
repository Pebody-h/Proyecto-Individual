import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    getCountries,
    filterByContinent,
    orderByName,
    orderBypopulation,
    searching
} from '../../../StateManagement/Redux/Actions/Actions'

import CountriesContainer from '../../DumbComponents/CountriesContainer/CountriesContainer'
import CardCountry from '../../DumbComponents/CardCountry/CardCountry'
import Loading from '../../DumbComponents/Loading/Loading'

function Paginate() {
    const Dispatch = useDispatch()
    useEffect(() => Dispatch(getCountries()), [Dispatch])
    //estados cuidades
    const AllCountries = useSelector(state => state.Countries.countries)
    const DetailOfCountry = useSelector(state => state.Countries.country)
    // estados filtros
    const FilterContinent = useSelector(state => state.Filters.continent)
    const SearchCountry = useSelector(state => state.Filters.searching)
    const FilterOrder = useSelector(state => state.Filters.order)
    //alert buscando cuidad
    if (DetailOfCountry.name !== undefined && SearchCountry === true) Dispatch(searching(false))
    // Funcion disparadora de aciones
    const OnSelectChange = (e) => {
        const { name, value } = e.target
        if (name === 'alphabetical') {
            Dispatch(orderByName(value))
            SetCurrentPage(1)
        } else if (name === 'poblation') {
            Dispatch(orderBypopulation(value))
            SetCurrentPage(1)
        }
        else {
            Dispatch(filterByContinent(value))
            SetCurrentPage(1)
        }
    }
    //lógica para filtrar países según el alfabeto o su población
    const SortCountriesByName = FilterOrder === 'DESCENDENT' ? AllCountries.sort((a, b) => b.name.LocaleCompare(a.name)) : FilterOrder === 'ASCENDENT' ? AllCountries.sort((a, b) => a.name.LocaleCompare(b.name)) : AllCountries
    const SortCountries = FilterOrder === 'HIGHPOBLATION' ? SortCountriesByName.sort((a, b) => b.population - a.population) : FilterOrder === 'LOWPOBLATION' ? SortCountriesByName.sort((a, b) => a.population - b.population) : AllCountries
    //Mapeo de paises segun el filtro
    const CurrentCountries = FilterContinent !== '' ? SortCountries.filter(c => c.continent === FilterContinent).map(c =>
        <CardCountry
            key={c.id}
            id={c.id}
            name={c.name}
            flagImage={c.flagImage}
            continent={c.continent}
            population={c.population}
        />
    ) : AllCountries.map(c =>
        <CardCountry
            key={c.id}
            id={c.id}
            name={c.name}
            flagImage={c.flagImage}
            continent={c.continent}
            population={c.population}
        />
    )
    // logica para la paginación de los páises
    const ContinentFilter = AllCountries.map(c => c.continent)
    const Options = ContinentFilter.filter((c, i) => ContinentFilter.indexOf(c) === i).map((c, i) => <option key={i} name="filter" value={c}> {c} </option>)
    const [CurrentPage, SetCurrentPage] = useState(1);
    const [CountriesPage, SetCountriesPage] = useState(9);
    const LastCountries = CurrentPage * CountriesPage; // 9
    const FirstCountries = LastCountries - CountriesPage; // 0 30 / 10
    const Current = CurrentCountries.slice(FirstCountries, LastCountries)
    const Paginate = (PageNum) => {
        SetCurrentPage(PageNum);
        PageNum === 1 ? SetCountriesPage(9) : SetCountriesPage(10)
    }
    const NumberPage = []
    for (let i = 1; i <= Math.ceil(CurrentCountries.length / 10); i++) { NumberPage.push(i) }
    const ListPages = NumberPage.map(num => <li key={num}> <button className="ButtonPaginate" onClick={() => Paginate(num)}>{num}</button> </li>)

    return (
        <> {SearchCountry === true ? <Loading />
            : DetailOfCountry.name === undefined ? (SortCountries.length ?
                <CountriesContainer contries={Current} listPages={ListPages} onSelectChange={OnSelectChange} options={Options} /> : <Loading />)
                : <CardCountry
                    id={DetailOfCountry.id}
                    name={DetailOfCountry.name}
                    flagImage={DetailOfCountry.flagImage}
                    continent={DetailOfCountry.continent}
                    population={DetailOfCountry.population}
                />
        }</>
    )
}

export default Paginate