import React from 'react'

import Filter from '../Filter/Filter'
import Order from '../Order/Order'

import './CountriesContainer.css'

function CountriesContainer({ contries, listPages, onSelectChange, options }) {
    return (
        <div>
            <div className="ContainerPaginate">
                <div className="Containefilters">
                    <Filter onSelectChange={onSelectChange} options={options} />
                    <Order onSelectChange={onSelectChange} />
                </div>
                <div className="ContainerCountries">
                    {contries}
                </div>
            </div>
            <div className='Paginate'>
                <ul className="listPages">
                    {listPages}
                </ul>
            </div>
        </div>
    )
}

export default CountriesContainer