import React from 'react'

import './SearchCountry.css'

function SearchCountry({ handleChange, handleSubmit }) {
    return (
        <form className='Form' onSubmit={e => handleSubmit(e)}>
            <input className='SearchBar' type="text" placeholder='Buscar Cuidad' onChange={e => handleChange(e)} />
            <input className='submit' type="submit" value='Buscar' />
        </form>
    )
}

export default SearchCountry