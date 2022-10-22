import React from 'react'
import './AdvertisementWithOneImg.css'

export default function AdvertisementWithOneImg() {
    return (
        <div className='advertisement_one_component'>
            <div className='advertisement_one_header'>
                Up to 60% off | Last chance to grab offers on Laptops
            </div>
            <div className='advertisement_one_body'>
                <img className='advertisement_one_body_img' src='https://ik.imagekit.io/n7nfu6861/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__BFYRapbUyd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665925749036'></img>
            </div>
            <div className='advertisement_one_footer'>
                See all offers
            </div>
        </div>
    )
}
