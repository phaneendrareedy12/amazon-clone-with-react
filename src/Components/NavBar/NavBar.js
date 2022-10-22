import React, { Component } from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom';
import store from '../Redux/Store';

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

        store.subscribe(() => {
            this.setState({
                items: store.getState().cartData
            })
        })
    }

    render() {
        return (
            <div className='navbar_component'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className='navbar_logo'></div>
                </Link>
                <div className='navbar_locator'>
                    <div className='navbar_locator_image'></div>
                    <div className='navbar_location'>Benguluru</div>
                </div>
                <div className='navbar_searchbar'>
                    <div>
                        <select className='navbar_dropdown'>
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div>
                        <input type='text' className='navbar_searchbox' />
                    </div>
                    <div className='navbar_search_image_div'>
                        <div className='navbar_search_image'></div>
                    </div>
                </div>
                <div className='navbar_signin'>
                    <div>Hello,Sign in</div>
                    <div>Accounts & Lists</div>
                </div>
                <div className='navbar_orders'>
                    <div>Returns</div>
                    <div>& Orders</div>
                </div>
                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                    <div className='navbar_cart'>
                        <div className='navbar_cart_image'></div>
                        <div className='navbar_cart_item'>{this.state.items.length}</div>
                        <div className='navbar_cart_text'>Cart</div>
                    </div>
                </Link>
            </div>
        )
    }
}

