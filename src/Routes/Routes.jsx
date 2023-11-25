import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts/MainLayouts';
import ErrorPage from '../errorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import Membership from '../Pages/Membership/Membership';

const  myCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/membership',
                element: <Membership></Membership>
            }
          
        ]
    }
])

export default  myCreatedRoutes;