import React from 'react'
import DeleteFromCart from './DeleteFromCartButton'
import { useCart } from '../../context/CartContext'

const CartButtons = ({ onClick, quantity, product }) => {
    const { incrementQuantity, decrementQuantity } = useCart();

    return (
        <div className='flex flex-col items-center gap-6'>
            <div className='flex gap-4 text-xl'>
                <button className='border-2 px-2 disabled:bg-red-100' onClick={() => decrementQuantity(product)} disabled={quantity === 1} >-</button>
                <p>{quantity}</p>
                <button className='border-2 px-2' onClick={() => incrementQuantity(product)}>+</button>
            </div>

            <DeleteFromCart onClick={onClick} />

        </div>
    )
}

export default CartButtons