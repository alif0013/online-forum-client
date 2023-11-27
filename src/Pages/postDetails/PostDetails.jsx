import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {

    const posts = useLoaderData()
    // const { _id, title } = posts;
    
    console.log(posts);
    return (
        <div>
            details: {_id}
        </div>
    );
};

export default PostDetails;