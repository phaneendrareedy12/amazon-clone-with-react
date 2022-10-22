import React from 'react'
import './LeftSideComponent.css'

export default function LeftSideComponent() {
    return (
        <div className='leftside_component'>
            <div className='leftside_component_brand'>Brand</div>
            <div className='leftside_component_brand_names'>
                <label className='brandname'>
                    <input type='checkbox' value='Samsung'/> Samsung
                </label>
                <label className='brandname'>
                    <input type='checkbox' value='MI'/> Redmi
                </label>
                <label className='brandname'>
                    <input type='checkbox' value='Nokia'/> Apple
                </label>
            </div>
        </div>
    )
}
