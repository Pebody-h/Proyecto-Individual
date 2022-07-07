import React from 'react'

import Filter from '../Filter/Filter'
import Order from '../Order/Order'

function CountriesContainer({ contries, listPages, onSelectChange, options }) {
    return (
        <div className="ContainerPaginate">
            <div className="Containefilters">
                <Filter onSelectChange={onSelectChange} options={options} />
                <Order onSelectChange={onSelectChange} />
            </div>
            <div className="ContainerCountries">
                {contries}
            </div>
            <div>
                <ul className="listPages">
                    {listPages}
                </ul>
            </div>
        </div>
    )
}

export default CountriesContainer