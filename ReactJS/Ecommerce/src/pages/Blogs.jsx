import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const data = useLoaderData();
  
  return (
    <div className='flex flex-col gap-6 m-6'>
      {
        data.map((blog) => <BlogCard blog={blog} />)
      }
    </div>
  )
}

export default Blogs