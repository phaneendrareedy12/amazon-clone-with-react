import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MobileProduct from './Mobile/MobileProduct';
import './RightSideComponent.css'

export default function RightSideComponent() {

    const [mobileList, setMobileList] = useState([]);
    const MOBILE_LIST_URL = 'http://localhost:3500/mobiles';

    useEffect(() => {
        axios.get(MOBILE_LIST_URL)
            .then( res => {
                setMobileList(res.data)
            })
            .catch(err => {
                console.error("unable to fetch mobiles data", err)
            })
    }, [RightSideComponent])

    const linkedStyle = {
        textDecoration: 'none',
        color: '#0F1111'
    }

    return (
        <div className='diplay_mobiles_rightside_component'>
            {
                mobileList.map((item) => (
                    <Link to={`/displayProdcut/` + item.id} style={linkedStyle}>
                        <MobileProduct product={item} />
                    </Link>
                ))
            }

        </div>
    )
}
