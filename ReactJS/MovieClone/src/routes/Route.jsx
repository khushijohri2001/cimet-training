import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "explore",
                element: <Outlet />,
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
            }
        ]
    }
])