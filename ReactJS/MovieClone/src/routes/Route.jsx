import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])