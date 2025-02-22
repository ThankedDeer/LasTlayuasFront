import PublicLayout from "@/Layouts/PublicLayout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        index: true,
        element: <Home />,
      },
    ],
  },
]);
