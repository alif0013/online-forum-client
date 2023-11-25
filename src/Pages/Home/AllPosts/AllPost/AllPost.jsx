import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import usePosts from '../../../../hooks/usePosts';

const AllPost = () => {
   const [posts] = usePosts()


    return (
        <div>
            <h1 className='my-10 text-xl font-bold text-center md:text-4xl'>Post Of Our Comunity</h1>

           <div className='text-center  mb-5'>
           <button className='btn btn-outline'>Sort By Popularity</button>
           </div>
        
               
                    {
                        posts.map(post => <PostCard post={post} key={post._id}></PostCard>)
                    }
          

        </div>
    );
};

export default AllPost;