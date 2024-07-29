import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../pages/Home";
import UserList from "../components/UserList/UserList";

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
    {
        path: "users",
        element: <UserList />,
        errorElement: <NotFound />,

    },
]);

