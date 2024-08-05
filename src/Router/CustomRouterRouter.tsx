import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UserList from "../components/UserList/UserList";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

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
        ],

    },
    {
        path: "users",
        element: <UserList />,
        errorElement: <NotFound />,

    },
    {
        path: "login",
        element: <Login />,
        errorElement: <NotFound />,

    },
    {
        path: "register",
        element: <Register />,
        errorElement: <NotFound />,

    },
]);

