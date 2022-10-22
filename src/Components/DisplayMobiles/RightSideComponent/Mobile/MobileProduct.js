import React from 'react'
import './MobileProduct.css'

import Rating from '@mui/material/Rating'
import { NumericFormat } from 'react-number-format'
import getSymbolFromCurrency from 'currency-symbol-map'

const MobileProduct = ({ product }) => {
    return (
        <div className='mobile_component'>
            <div className='mobile_image_div'>
                <img className='mobile_image' src={product.image} />
            </div>
            <div className='mobile_description'>
                {product.description}
            </div>
            <div className='mobile_rating'>
                <Rating name='read-only' value={product.rating} size="small" precision={0.5} readOnly />
            </div>
            <div className='mobile_price'>
                <NumericFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={getSymbolFromCurrency('INR')} />
            </div>
        </div>
    )
}

export default MobileProduct;

