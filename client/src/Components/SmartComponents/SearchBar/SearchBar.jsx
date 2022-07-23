import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SearchCountry from '../../DumbComponents/SearchCountry/SearchCountry'
import { searchCountry, searching } from '../../../StateManagement/Redux/Actions/Actions'

function SearchBar() {
    const AllCountries = useSelector(state => state.Countries.countries)
    const [input, setInput] = useState('')
    const Filter = AllCountries.filter(e => e.name === input)
    const Dispatch = useDispatch()
    const handleChange = e => setInput(() => e.target.value.toLowerCase())
    const handleSubmit = e => {
        if (input === '') return alert("Ingresa una ciudad")
        else if (Filter.length > 0) {
            e.preventDefault();
            Dispatch(searchCountry(input));
            Dispatch(searching(true))
            setInput(() => '');
        } else {
            return alert("La cuidad no existe")
        }
    }
    return (
        <SearchCountry handleChange={handleChange} handleSubmit={handleSubmit} />
    )
}

export default SearchBar