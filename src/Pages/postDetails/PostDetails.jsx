import React from 'react';
import { BiUpvote } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { RiShareForwardLine } from "react-icons/ri";


const PostDetails = () => {

    const posts = useLoaderData()
    const { _id, title, tags, currentTime, userImg, date, description, email, name, upvote } = posts;


    return (

        <div className='px-4'>
            <div className="bg-slate-100 rounded p-10 mt-10 md:w-[600px] mx-auto">

                <div className="flex gap-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={userImg} />
                        </div>
                    </div>

                    <div>
                        <h2 className="pb-1 font-bold">{name}</h2>

                        <div className='flex gap-3'>
                            <h3>{date}</h3>
                            <h3>{currentTime}</h3>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h1 className="font-bold">{title}</h1>
                    <h2 className="font-semibold pt-1"># {tags}</h2>
                </div>

                <div className='mt-5'>
                    {description}
                </div>

                <div className="flex items-center gap-5 mt-5">
                    <BiUpvote className="text-xl"></BiUpvote> {upvote}

                    <FaRegCommentAlt className="text-xl"></FaRegCommentAlt> 0
                    <RiShareForwardLine className="text-xl"></RiShareForwardLine>
                </div>

            </div>

            
        </div>
    );
};

export default PostDetails;