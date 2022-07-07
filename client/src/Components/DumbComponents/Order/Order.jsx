import React from 'react'

function Order({ onSelectChange }) {
    return (
        <div>
            <select className="selecteBy" name="alphabetical" onChange={e => onSelectChange(e)} >
                <option value="notOrder">Order A-Z</option>
                <option value="ASCENDENT">Ascendent</option>
                <option value="DESCENDENT">Descendent</option>
            </select>
            <select className="selecteBy" name="poblation" onChange={e => onSelectChange(e)} >
                <option value="notOrder">Order by poblation</option>
                <option value="HIGHPOBLATION">High Poblation</option>
                <option value="LOWPOBLATION">Low Poblation</option>
            </select>
        </div>
    )
}

export default Order