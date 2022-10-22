import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavFooter.css'

export default class NavFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const linkedStyle = {
            textDecoration: 'none',
            color: '#FFFFFF'
        }
        return (
            <div className='navfooter_component'>
                <div className='navfooter_text'>All</div>
                <div className='navfooter_text'>Sell</div>
                <div className='navfooter_text'>Best Sellers</div>
                <div className='navfooter_text'>Today's Deals</div>
                <div className='navfooter_text'>
                    <Link to='/mobiles' style={linkedStyle}>Mobiles</Link>
                </div>
                <div className='navfooter_text'>Customer Service</div>
                <div className='navfooter_text'>Electronics</div>
                <div className='navfooter_text'>Books</div>
                <div className='navfooter_text'>Fashion</div>
                <div className='navfooter_text'>Home & Kitchen</div>
                <div className='navfooter_text'>Prime</div>
            </div>
        )
    }
}
