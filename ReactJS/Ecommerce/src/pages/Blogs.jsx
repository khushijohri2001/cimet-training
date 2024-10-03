import { useLoaderData } from 'react-router-dom'
import BlogCard from '../components/BlogCard';
import { useBlog } from '../context/BlogContext';
import { useEffect } from 'react';

const Blogs = () => {
  const data = useLoaderData();
  const { blogsDataHandler } = useBlog()

  useEffect(() => {
    blogsDataHandler(data)
  }, [])
  
  
  return (
    <div className='flex flex-col gap-6 m-6'>
      {
        data.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      }
    </div>
  )
}

export default Blogs