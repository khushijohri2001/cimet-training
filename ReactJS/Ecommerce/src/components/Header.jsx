import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const {productsInCart} = useCart();
  
  return (
    <header className='flex justify-between items-center p-6 bg-blue-gray-700 text-white'>
        <h1 className='text-2xl font-bold'><Link to="/">Ecommerce</Link></h1>
        <ul className='flex items-center gap-4 text-lg'>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart ({productsInCart.length})</Link></li>
            <li><Link to="/blogs">Blogs </Link></li>
            <li><Link to="/contact">Contact </Link></li>
            <li><Link>User </Link></li>
        </ul>
    </header>
  )
}

export default Header