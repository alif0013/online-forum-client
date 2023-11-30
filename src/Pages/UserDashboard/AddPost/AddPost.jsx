import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import usePosts from '../../../hooks/usePosts';

const AddPost = () => {
    const { user } = useAuth();
    const [selectedTags, setSelectedTags] = useState(''); // Initialize state for the selected level
    const axiosSecure = useAxiosSecure()
    const [ , refetch] = usePosts()

    const handleAddPost = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const upvote = 0;
        const downvote = 0;
        const email = user.email;  //useAuth theke asa user email
        const name = user.displayName;  //useAuth theke asa user email
        const userImg = user.photoURL;
        const tags = selectedTags; // Use the selectedLevel from state
        const photo = form.photo.value;
        // Get the current time and format it as "hr:min:sec"
        // const currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
        // Get the current time and format it as "hr:min"
        const currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });

        // Get the current date and format it as "YYYY-MM-DD"
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const date = new Date().toLocaleDateString('en-US', options);


        const newPost = { title, currentTime,userImg, date, description, email, name, upvote, downvote, tags, photo }
        // console.log(newPost);
        axiosSecure.post('/posts', newPost)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Posted Successfully!')

                    //refetch post to update the data 
                    refetch();
                }
            })
    }


    const handleSelectTags = e => {
        setSelectedTags(e.target.value); // Update selectedLevel state when the select value changes
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Add Post</title>
            </Helmet>

            <h2 className='text-4xl font-bold text-center mt-10'>Add Post</h2><hr className='border-2 mt-4 md:w-[400px] mx-auto' />

            <div className='px-4 rounded'>
                <div className='text-center rounded p-20 bg-[#ffe69c] mt-10'>

                    <form onSubmit={handleAddPost}>
                        <div className='mt-3'>
                            <input type="text" name='title' placeholder="Title" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                            <input type="text" name='description' placeholder="Description" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className='mt-3'>
                            <input type="text"  name='upvote' placeholder="Up Vote" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                            <input type="text"  name='downvote' placeholder="Down Vote" className="input input-bordered w-full max-w-xs" />


                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}

                        </div>
                        <div className='mt-3'>
                            {/* <input type="text" name='level' placeholder="Easy, Medium, Hard" className="input input-bordered w-full max-w-xs mr-5 mb-3" /> */}
                            <select
                                className="select input select-bordered w-full max-w-xs mr-5"
                                onChange={handleSelectTags} // Handle select change
                                value={selectedTags} // Set the selected value from state
                            >
                                <option value="" disabled selected>Select Tags</option>
                                <option value="health">health</option>
                                <option value="election">election</option>
                                <option value="science">science</option>
                                <option value="story">story</option>
                                <option value="personal">personal</option>
                                <option value="trending">trending</option>
                            </select>

                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered w-full max-w-xs" />

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

export default AddPost;