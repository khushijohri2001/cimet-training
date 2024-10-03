import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import DeleteFromCart from './buttons/DeleteFromCartButton';
import AddToCartButton from './buttons/AddToCartButton';
import CartButtons from './buttons/CartButtons';

const CartProductCard = ({product}) => {
    const { id, title, price, image, quantity } = product;

  const { deleteFromCartHandler } = useCart();

  const onDeleteButtonClickHandler = () => {
    deleteFromCartHandler(product)
  }

  return (
    <div className='border-2 p-4 w-64 flex flex-col gap-4 justify-between mb-6'>
       <Link to={`/products/${id}`}>
      <img src={image} alt="" className='h-64 w-64 object-contain' />
      </Link>
      <div className='text-center'>
        <p className='font-bold'>{title.split(" ").slice(0, 3).join(" ") + "..."}</p>
        <p>${price}</p>
      </div>
      <CartButtons onClick={onDeleteButtonClickHandler} quantity={quantity} product={product} />
    </div>
  )
}

export default CartProductCard