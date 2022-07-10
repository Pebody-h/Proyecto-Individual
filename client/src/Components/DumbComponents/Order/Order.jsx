import React from 'react'

import './Order.css'

function Order({ onSelectChange }) {
    return (
        <div className='containerp'>
            <div className="selecteBy">
                <select name="alphabetical" onChange={e => onSelectChange(e)} >
                    <option value="notOrder">Ordenar Alfabeticamente</option>
                    <option value="ASCENDENT">Ascendente</option>
                    <option value="DESCENDENT">Descendente</option>
                </select>
                <i></i>
            </div>
            <div className='SelecteBy'>
                <select name="poblation" onChange={e => onSelectChange(e)} >
                    <option value="notOrder">Ordenar Por Población</option>
                    <option value="HIGHPOBLATION">Mayor Población</option>
                    <option value="LOWPOBLATION">Menor Población</option>
                </select>
                <i></i>
            </div>
        </div>
    )
}

export default Order