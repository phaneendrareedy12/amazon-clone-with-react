import React, { Component } from 'react'
import AdvertisementWithFourImg from './Advertisement/AdvertisementWithFourImg/AdvertisementWithFourImg'
import AdvertisementWithOneImg from './Advertisement/AdvertisementWithOneImg/AdvertisementWithOneImg'
import './MainPage.css'

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='mainpage_component'>
                <div className='mainpage_advertisement'>
                    <AdvertisementWithOneImg />
                    <AdvertisementWithFourImg />
                    <AdvertisementWithOneImg />
                    <AdvertisementWithFourImg />
                    <AdvertisementWithOneImg />
                    <AdvertisementWithFourImg />
                    <AdvertisementWithFourImg />
                    <AdvertisementWithOneImg />
                    <AdvertisementWithFourImg />
                </div>
            </div>
        )
    }
}
