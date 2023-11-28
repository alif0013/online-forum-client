import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { MdOutlineDelete } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const ManageUser = () => {

    const axiosSecure = useAxiosSecure();

    const {data : users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    return (
        <div>
               <Helmet>
                <title>Dashboard | Manage Users</title>
            </Helmet>

            <h2 className='text-4xl font-bold text-center mt-10'>All Users: {users.length}</h2><hr className='border-2 mt-4 md:w-[400px] mx-auto' />

            <div className='mt-10 lg:w-[800px] mx-auto'>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Membership Status</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user => <>
                                    <tr key={user._id}>

                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td> <div className="btn"><FaUser></FaUser></div> </td>
                                        <td> <button className="btn text-xl text-green-600">Bronze</button> </td>

                                    </tr>
                                </>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageUser;