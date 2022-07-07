import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../../Assets/Logo.png'
import SearchBar from '../../SmartComponents/SearchBar/SearchBar'

import './Nav.css'

function Nav() {
    return (
        <div className='ContainerNav'>
            <div className='Logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='NavContainer'>
                <h1>Home</h1>
                <NavLink to='/activities'> <button className='Button'> Ver actividades </button> </NavLink>
                <SearchBar />
            </div>
        </div>
    )
}

export default Nav