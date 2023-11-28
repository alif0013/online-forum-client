import { FaComments } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";


const PostCard = ({ post }) => {

    const { _id, img, title, tags, time, comment, vote } = post;

    return (
        <div>
            <h1 className="text-6xl">All Post Cart</h1>
        </div>
    );
};

export default PostCard;