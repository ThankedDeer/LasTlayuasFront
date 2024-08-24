import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './Router/CustomRouterRouter'
import LoginCompo from './context/LoginCompo'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <LoginCompo>
        <RouterProvider router={router} />
      </LoginCompo >
    </NextUIProvider>
  </React.StrictMode>,
)
