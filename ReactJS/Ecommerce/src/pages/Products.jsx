import { useLoaderData } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = useLoaderData(); 

  return (
    <section className='flex flex-wrap gap-16 items-center justify-center my-8'>
      {
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </section>
  )
}

export default Products