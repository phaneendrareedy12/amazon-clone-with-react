import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartEmpty from './ShoppingCartEmpty'
import ShoppingCartWithItems from './ShoppingCartWithItems'

export default function ShoppingCart() {
    const shoppingCartItems = useSelector((state) => state.cartData)
    return (
        <>
            {
                shoppingCartItems.length > 0 ? <ShoppingCartWithItems /> : <ShoppingCartEmpty />
            }
        </>
    )
}
