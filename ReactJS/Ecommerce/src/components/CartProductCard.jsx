import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartButtons from './buttons/CartButtons';
import { useCurrency } from '../context/CurrencyContext';

const CartProductCard = ({product}) => {
    const { id, title, price, image, quantity } = product;

  const { deleteFromCartHandler } = useCart();

  const { convertedPrice, rateSymbolHandler } = useCurrency();

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
        <p>{rateSymbolHandler()}{convertedPrice(price)}</p>
      </div>
      <CartButtons onClick={onDeleteButtonClickHandler} quantity={quantity} product={product} />
    </div>
  )
}

export default CartProductCard