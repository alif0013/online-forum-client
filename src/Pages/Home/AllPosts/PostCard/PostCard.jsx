import { FaComments } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";


const PostCard = ({ post }) => {

    const { _id, img, title, tags, time, comment, vote } = post;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">



                    <tbody>
                        {/* row 1 */}

                        <tr className='hover'>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={img} />
                                        </div>
                                    </div>
                                    <div className="md:w-[170px]">
                                        <div className="font-bold"><Link to={`/details/${_id}`}>{title}</Link></div>
                                        <div className="text-sm opacity-70">#{tags}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {time}

                            </td>

                            <td className="flex"><FaComments className="text-xl mr-3"></FaComments> {comment}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs"><BiUpvote className="text-xl"></BiUpvote> {vote}</button>
                            </th>
                        </tr>


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default PostCard;