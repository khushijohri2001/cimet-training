import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Search from "../pages/Search";
import { fetchBannerImage } from "./Loader";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: fetchBannerImage
            },
            {
                path: "explore",
                children: [
                    {
                        index: true,
                        path: "movie",
                        element: <Explore/>
                    },
                    {
                        path: "tv",
                        element: <Explore/>
                    },
                ]
            },
            {
                path: "search",
                children: [
                    {
                        path: ":query",
                        element: <Search/>
                    }
                ]
            }
        ]
    }
])