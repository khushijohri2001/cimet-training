import React, { useEffect, useState } from 'react'
import { useBlog } from '../context/BlogContext'
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { blogsData } = useBlog();
  const { blogId } = useParams();


  const [singleBlogData, setSingleBlogData] = useState(null);

  useEffect(() => {
    let blog = blogsData.filter((data) => data.id === Number(blogId))

    setSingleBlogData(blog)
  })


  return (
    <div>
      {
        singleBlogData ? (
          <div className='min-h-screen m-6'>
          <p>Single blog {singleBlogData[0].id}</p>
          <h2>{singleBlogData[0].title}</h2>
          <p>{singleBlogData[0].body}</p>
        </div>
        ) : <div>null</div>
      }
    </div>
  )
}

export default SingleBlog