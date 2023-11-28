import { FaRegCommentAlt } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


const PostCard = ({ post }) => {
    const { user } = useAuth()
    const { _id, title, tags, currentTime, userImg, date, description, email, name, upvote } = post;

    return (
  
           
                <div className="bg-slate-100 rounded p-10 mb-2 md:w-[600px] mx-auto">

                    <div className="flex gap-5">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={userImg} />
                            </div>
                        </div>

                        <div>
                            <h2 className="pb-1">{name}</h2>
                            <h3>{date}</h3>
                        </div>
                    </div>

                    <div className="mt-5">
                       <Link to={`/details/${_id}`}> <h1 className="font-bold">{title}</h1></Link>
                    </div>

                    <div className="flex items-center gap-5 mt-5">
                        <BiUpvote className="text-xl"></BiUpvote> {upvote}

                        <FaRegCommentAlt className="text-xl"></FaRegCommentAlt> 0
                        <h2 className="font-semibold"># {tags}</h2>
                    </div>

                </div>
         
       
    );
};

export default PostCard;