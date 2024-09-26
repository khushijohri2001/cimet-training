import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Search from "../pages/Search";
import { homeLoader } from "./Loader";
import PageNotFound from "../pages/PageNotFound";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: homeLoader
            },
            {
                path: "explore",
                children: [
                    {
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