import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem/CartItem'
import './ShoppingCart.css'

import { NumericFormat } from 'react-number-format'
import getSymbolFromCurrency from 'currency-symbol-map'

export default function ShoppingCartWithItems() {

    const shoppingCartItems = useSelector((state) => state.cartData)

    const totalCartValue = shoppingCartItems.reduce((accumulator, object) => {
        return accumulator + parseInt(object.price)
      }, 0)

    return (
        <div className='shopping_cart_component'>
            <Grid container>
                <div className='items_grid'>
                    <Grid item xs={10}>
                        <div className='titles_grid'>
                            <div className='titles_cart'>
                                Shopping Cart
                            </div>
                            <div className='titles_price'>
                                Price
                            </div>
                        </div>
                        <div>
                            {
                                shoppingCartItems.map((item) => (
                                    <CartItem item={item} />
                                ))
                            }
                        </div>
                        <div className='subtotal'>
                            Subtotal ({shoppingCartItems.length} items): <NumericFormat value={totalCartValue} displayType={'text'} thousandSeparator={true} prefix={getSymbolFromCurrency('INR')} />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='buy'>
                            <div className='buy_totalcost'>
                                Subtotal ({shoppingCartItems.length} items): <NumericFormat value={totalCartValue} displayType={'text'} thousandSeparator={true} prefix={getSymbolFromCurrency('INR')} />
                            </div>
                            <div>
                                <button className='buy_button'>proceed to buy</button>
                            </div>
                        </div>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}
