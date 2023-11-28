import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePosts = () => {
    //tanstack query
    const axiosSecure = useAxiosSecure();
    const {refetch, data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/posts')
            return res.data;
        }
    })


    return [posts, refetch]
};

export default usePosts;


