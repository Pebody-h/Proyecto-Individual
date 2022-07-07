import React from 'react'

function Filter({ onSelectChange, options }) {
    return (
        <div className="select-box">
            <select className="selected" onChange={e => onSelectChange(e)}>
                <option value="ALL" > ALL! </option>
                {options}
            </select>
        </div>
    )
}

export default Filter