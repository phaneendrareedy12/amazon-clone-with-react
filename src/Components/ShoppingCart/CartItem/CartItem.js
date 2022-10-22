import React from 'react'
import './CartItem.css'

import { NumericFormat } from 'react-number-format'
import getSymbolFromCurrency from 'currency-symbol-map'

export default function CartItem({ item }) {
    return (
        <div className='cartitem_component'>
            <div>
                <img className='cartitem_image' src={item.image} />
            </div>
            <div className='cartitem_discription'>
                {item.description}
            </div>
            <div className='cartitem_price'>
                <NumericFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={getSymbolFromCurrency('INR')} />
            </div>
        </div>
    )
}
