import React from 'react'

import './Filter.css'

function Filter({ onSelectChange, options }) {
    return (
        <div className="select-box">
            <select className="selected" onChange={e => onSelectChange(e)}>
                <option value="ALL" > Todos </option>
                {options}
            </select>
            <i></i>
        </div>
    )
}

export default Filter