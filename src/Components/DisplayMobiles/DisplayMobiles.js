import React from 'react'
import './DisplayMobiles.css'
import LeftSideComponent from './LeftSideComponent/LeftSideComponent'
import RightSideComponent from './RightSideComponent/RightSideComponent'

export default function () {
    return (
        <div className='display_mobile_component'>
            <div>
                <LeftSideComponent />
            </div>
            <div>
                <RightSideComponent />
            </div>
        </div>
    )
}
