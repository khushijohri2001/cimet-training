import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useBlog } from "../context/BlogContext";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import PageButton from "../components/buttons/PageButton";

const Blogs = () => {
  const data = useLoaderData();
  const { blogsDataHandler } = useBlog();

  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("blogPage")
      ? Number(localStorage.getItem("blogPage"))
      : 1
  );

  const blogsPerPage = 10;
  const totalPages = Math.ceil(data.length / blogsPerPage);

  const blogsToDisplay = () => {
    let startIndex = (currentPage - 1) * blogsPerPage;
    let endIndex = startIndex + blogsPerPage;
    return data.slice(startIndex, endIndex);
  };

  useEffect(() => {
    blogsDataHandler(data);
  }, [data, blogsDataHandler]);

  useEffect(() => {
    localStorage.setItem("blogPage", currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center gap-16 m-10">
      <div className="flex flex-wrap gap-6 justify-between">
        {blogsToDisplay().map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Pagination
        PageButton={PageButton}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Blogs;
