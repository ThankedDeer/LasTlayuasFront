import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]

    },
]);

