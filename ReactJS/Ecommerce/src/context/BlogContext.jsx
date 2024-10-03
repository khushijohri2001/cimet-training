import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
    const [blogsData, setBlogsData] = useState();

    const blogsDataHandler = (data) => {
        setBlogsData(data)
    }
    return (
        <BlogContext.Provider value={{blogsData, blogsDataHandler}}>
            {children}
        </BlogContext.Provider>
    )
}

export const useBlog = () => useContext(BlogContext);