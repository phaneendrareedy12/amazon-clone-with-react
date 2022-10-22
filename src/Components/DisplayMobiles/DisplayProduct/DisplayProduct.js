import axios from 'axios';
import { Grid } from '@material-ui/core'
import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './DisplayProduct.css'

import { NumericFormat } from 'react-number-format'
import getSymbolFromCurrency from 'currency-symbol-map'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/actions/ProductAction';

export default function DisplayProduct() {

    const dispatch = useDispatch()

    const [product, setProduct] = useState({});
    let { id } = useParams();
    const MOBILE_PRODUCT_URL = `http://localhost:3500/mobiles/` + id

    const fetchData = async () => {
        await axios.get(MOBILE_PRODUCT_URL)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
                console.error("unable to fetch mobiles data", err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [DisplayProduct])

    return (
        <Grid container>
            <Grid item xs={5}>
                <img className='displayproduct_image' src={product.image} />
            </Grid>
            <Grid item xs={3}>
                <div className='displayproduct_description'>
                    <div className='displayproduct_title'>
                        {product.description}
                    </div>
                    <div className='textgap displayproduct_rating'>
                        <Rating name='read-only' value={product.rating || 3.2} size="large" precision={0.5} readOnly />
                    </div>
                    <div className='textgap'>
                        <NumericFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={getSymbolFromCurrency('INR')} />
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div className='add_to_cart_grid'>
                    <div>
                        <button className='add_to_cart' onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                    <div>
                        <button className='buy_now'>Buy Now</button>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
