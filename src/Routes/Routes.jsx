import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts/MainLayouts';
import ErrorPage from '../errorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import Membership from '../Pages/Membership/Membership';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PostDetails from '../Pages/postDetails/PostDetails';
import Dashboard from '../Layouts/Dashboard/Dashboard';
import MyProfile from '../Pages/UserDashboard/MyProfile/MyProfile';
import MyPost from '../Pages/UserDashboard/MyPost/MyPost';
import AddPost from '../Pages/UserDashboard/AddPost/AddPost';

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
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <PostDetails></PostDetails> ,
                loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'addPost',
                element: <AddPost></AddPost>
            },
            {
                path: 'myPost',
                element: <MyPost></MyPost>
            }
        ]
    }
])

export default  myCreatedRoutes;