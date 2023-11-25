import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoutes from './Routes/Routes.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={myCreatedRoutes}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
