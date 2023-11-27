import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyPost = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | My Post</title>
            </Helmet>

            <h2 className='text-4xl'>My Post</h2>

          
        </div>
    );
};

export default MyPost;