import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddPost = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | Add Post</title>
            </Helmet>
            
            <h2 className='text-4xl'>Add Post</h2>
        </div>
    );
};

export default AddPost;