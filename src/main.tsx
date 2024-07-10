import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const CustomRouterRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default CustomRouterRouter
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
