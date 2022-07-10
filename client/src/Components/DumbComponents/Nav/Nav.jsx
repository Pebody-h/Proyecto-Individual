import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../../Assets/logo-toro-.png'
import SearchBar from '../../SmartComponents/SearchBar/SearchBar'

import './Nav.css'

function Nav() {
    return (
        <div className='ContainerNav'>
            <div className='Logo' >
                <img src={Logo} alt="Logo" />
            </div>
            <NavLink to='/activities'> <button className='Button'> Ver actividades </button> </NavLink>
            <SearchBar />
        </div>
    )
}

export default Nav