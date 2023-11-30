import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const Announcement = () => {
    const axiosSecure = useAxiosSecure();


    const handleAddAnnouncement = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const name = form.name.value;
        const image = form.image.value;

        const newAnnouncement = { name, image, title, description }
        // console.log(newAnnouncement);
        axiosSecure.post('/announcement', newAnnouncement)
        .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
                toast.success('Announcement Added Successfully!')

                //refetch post to update the data 
                // refetch();
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>Dashboard | Announcement</title>
            </Helmet>

            <h2 className='text-4xl font-bold text-center mt-10'>Announcement</h2><hr className='border-2 mt-4 md:w-[400px] mx-auto' />
            <div className='px-4 rounded'>
                <div className='text-center rounded p-20 bg-[#86e4a7] mt-10'>

                    <form onSubmit={handleAddAnnouncement}>
                        <div className='mt-3'>
                        
                        <input type="text" name='name' placeholder="Author Name" className="input input-bordered w-full max-w-xs mr-5 mb-3" />

                            <input type="text" name='image' placeholder="Author Image" className="input input-bordered w-full max-w-xs" />
                          
                        </div>

                        <div className='mt-3'>
                            <input type="text" name='title' placeholder="Title" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                            <input type="text" name='description' placeholder="Description" className="input input-bordered w-full max-w-xs" />

                        </div>

                        <div className='mt-3'>


                        </div>

                        <button type='submit' className="btn md:w-[660px] text-white text-center bg-gradient-to-r from-[#4A00E0] to-blue-500 mt-6">Add Post</button>


                    </form>


                </div>
            </div>
        </div>
    );
};

export default Announcement;