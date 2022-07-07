import React from 'react'

import './SearchCountry.css'

function SearchCountry({ handleChange, handleSubmit }) {
    return (
        <form className='Form' onSubmit={e => handleSubmit(e)}>
            <input className='search bar' type="text" placeholder='Buscar Cuidad' onChange={e => handleChange(e)} />
            <input className='submit' type="submit" value='Search' />
        </form>
    )
}

export default SearchCountry