import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Search from "../pages/Search";
import { homeLoader, movieLoader, singleMovieLoader, singleTvLoader, tvShowLoader } from "./Loader";
import PageNotFound from "../pages/PageNotFound";
import SinglePage from "../pages/SinglePage";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader
            },
            {
                path: "explore",
                children: [
                    {
                        path: "movie",
                        element: <Explore />,
                        loader: movieLoader,

                    },
                    {
                        path: "tv",
                        element: <Explore />,
                        loader: tvShowLoader,
                    },
                ]
            },
            {
                path: "movie/:movieId",
                element: <SinglePage />,
                loader: singleMovieLoader
            },
            ,
            {
                path: "tv/:tvId",
                element: <SinglePage />,
                loader: singleTvLoader
            },
            {
                path: "search",
                children: [
                    {
                        path: ":query",
                        element: <Search />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound />
    }
])