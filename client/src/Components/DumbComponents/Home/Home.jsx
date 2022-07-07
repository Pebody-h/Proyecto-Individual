import React from 'react'
import { useSelector } from 'react-redux'

import Nav from '../Nav/Nav'
import Paginate from '../../SmartComponents/Paginate/Paginate'
import DetailCountry from '../../SmartComponents/DetailCountry/DetailCountry'

function Home() {
    const detailCountry = useSelector(state => state.countryDetail)
    return (
        <div className='container'>
            <Nav />
            <div className='containerPaginate'>
                {detailCountry === undefined ? <Paginate /> : <DetailCountry />}
            </div>
        </div >
    )
}

export default Home