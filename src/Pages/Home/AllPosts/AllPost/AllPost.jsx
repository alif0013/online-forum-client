import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

const AllPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])


    return (
        <div>
            <h1 className='my-10 text-xl font-bold text-center md:text-4xl'>Post Of Our Comunity</h1>

           <div className='text-center  mb-5'>
           <button className='btn btn-outline'>Sort By Popularity</button>
           </div>
        
                <div>
                    {
                        posts.map(post => <PostCard post={post} key={post._id}></PostCard>)
                    }
                </div>

            
        



        </div>
    );
};

export default AllPost;