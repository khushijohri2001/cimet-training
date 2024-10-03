import React from 'react'
import ProductCard from './ProductCard'
import { useLoaderData } from 'react-router-dom'

const FeaturedProducts = () => {
    const products = useLoaderData();
    
  return (
    <section className='flex flex-col items-center gap-8 my-16'>
        <h2 className='text-3xl font-bold'>Featured Products</h2>
        <div className='flex gap-4'>
            {
                products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </section>
  )
}

export default FeaturedProducts