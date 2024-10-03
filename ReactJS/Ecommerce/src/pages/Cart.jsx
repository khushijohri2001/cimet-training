import React, { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import CartProductCard from '../components/CartProductCard';

const Cart = () => {
  const { productsInCart, totalPrice, totalPriceHandler } = useCart();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsInCart))

    totalPriceHandler()
  }, [productsInCart])
  

  return (
    <>
      {
        productsInCart.length === 0 ?
          (
            <div className='h-screen my-16 flex flex-col items-center gap-20'>
              <h2 className='text-3xl'>No Items in Cart</h2>
              <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" className='h-96 w-96' />
            </div>
          )
          :
          (
            <div className='my-6 min-h-screen w-[70%] mx-auto'>
              <h2 className='mb-8 text-2xl'>Items in Cart: {productsInCart.length}</h2>

              <div className='flex justify-between'>
                <div>
                  {
                    productsInCart.map((product) => <CartProductCard key={product.id} product={product} />)
                  }
                </div>
                <div className='border-2 border-black w-[30%] h-10 p-2'>
                  <p className='text-xl'>Total Price: ${totalPrice}</p>

                </div>
              </div>
            </div>
          )
      }
    </>
  )
}

export default Cart