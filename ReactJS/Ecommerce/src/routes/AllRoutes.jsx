import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import Blogs from "../pages/Blogs";
import SingleBlog from "../pages/SingleBlog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { fetchApis } from "./loaders";
import { getBlogsAPI, getFeaturedProductsAPI, getProductsAPI } from "../utils/constants";

export const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetchApis(getFeaturedProductsAPI)
            },
            {
                path: "products",
                children: [
                    {
                        index: true,
                        element: <Products />,
                        loader: () => fetchApis(getProductsAPI)
                    },
                    {
                        path: ":productId",
                        element: <SingleProduct/>
                    }
                ]
            },
            {
                path: "cart",
                element: <Cart/>
            },
            {
                path: "blogs",
                children: [
                    {
                        index: true,
                        element: <Blogs/>,
                        loader: () => fetchApis(getBlogsAPI)
                    },
                    {
                        path: ":blogId",
                        element: <SingleBlog/>
                    }
                ]
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])