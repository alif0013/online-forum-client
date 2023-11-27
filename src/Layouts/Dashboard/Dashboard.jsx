import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { MdAdd } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='md:flex'>
            <div className='md:48 md:min-h-screen lg:w-64 bg-green-400'>
                <ul className='menu p-5'>
                    <li className='bg-white my-2 rounded-lg'>
                        <NavLink to="/dashboard/myProfile">
                          <FcBusinessman className='text-xl'></FcBusinessman> My Profile
                        </NavLink>
                    </li>
                    <li className='bg-white my-1 rounded-lg'>
                        <NavLink to="/dashboard/addPost">
                          <MdAdd className='text-xl'></MdAdd> Add Post
                        </NavLink>
                    </li>
                    <li className='bg-white my-2 rounded-lg'>
                        <NavLink to="/dashboard/myPost">
                          <CiCircleList className='text-xl'></CiCircleList> My Post
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;