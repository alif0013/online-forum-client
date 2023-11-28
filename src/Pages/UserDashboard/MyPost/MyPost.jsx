import React from 'react';
import { Helmet } from 'react-helmet-async';
import useMyPost from '../../../hooks/useMyPost';

const MyPost = () => {

    const [myPost] = useMyPost()



    return (
        <div>
            <Helmet>
                <title>Dashboard | My Post</title>
            </Helmet>

            <h2 className='text-4xl'>My Post: {myPost.length}</h2>



        </div>
    )


};

export default MyPost;