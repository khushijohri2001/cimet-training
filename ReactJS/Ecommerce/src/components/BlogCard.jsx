/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { id, title, body } = blog;

    return (
        <Link to={`/blogs/${id}`}>
        <div className='border-2 border-black p-4 flex flex-col w-96 h-52'>
            <p>Blog {id}</p>
            <h3>{title}</h3>
            <p>{body.split(" ").slice(0, 10).join(" ")+"..."}</p>
        </div>
        </Link>
    )
}

export default BlogCard