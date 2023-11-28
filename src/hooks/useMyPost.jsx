import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useMyPost = () => {

    //tanstack query
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()

    const { refetch, data: myPost = [] } = useQuery({
        queryKey: ['myPost', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/my-posts?email=${user.email}`)
            return res.data;
        }
    })


    return [myPost, refetch]
};

export default useMyPost;