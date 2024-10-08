/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import AddToCartButton from './buttons/AddToCartButton'
import DeleteFromCartButton from './buttons/DeleteFromCartButton';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';

const ProductCard = ({ product }) => {
  const { id, title, price, image } = product;

  const [isInCart, setIsInCart] = useState(false)

  const { addToCartHandler, deleteFromCartHandler, productsInCart } = useCart();
  
  const { convertedPrice, rateSymbolHandler } = useCurrency();


  const onAddButtonClickHandler = () => {
    addToCartHandler(product)
  }

  const onDeleteButtonClickHandler = () => {
    deleteFromCartHandler(product)
  }

  useEffect(() => {
    const inCartProduct = productsInCart.find((productInCart) => productInCart.id === id);

    setIsInCart(inCartProduct)
  }, [productsInCart, id])


  return (

    <div className='border-2 p-4 w-64 flex flex-col gap-4 justify-between'>
      <Link to={`/products/${id}`} state={{ from: product }}>
        <img src={image} alt="" className='h-64 w-64 object-contain' />
      </Link>
      <div className='text-center'>
        <p className='font-bold'>{title.split(" ").slice(0, 3).join(" ") + "..."}</p>
        <p>{rateSymbolHandler()}{convertedPrice(price)}</p>
      </div>
      {
        isInCart ? <DeleteFromCartButton onClick={onDeleteButtonClickHandler} /> : <AddToCartButton onClick={onAddButtonClickHandler} />
      }

    </div>

  )
}

export default ProductCard