import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UserList from "../components/UserList/UserList";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/menu" replace />,
        errorElement: <NotFound />,
    },
    {
        path: "/menu",
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

    {
        path: "productos",
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <h2>productos</h2>,
            }
        ],

    },
    {
        path: "reserva",
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <h2>reserva</h2>,
            }
        ],

    },
    {
        path: "nosotros",
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <h2>nosotros</h2>,
            }
        ],
    },
]);

