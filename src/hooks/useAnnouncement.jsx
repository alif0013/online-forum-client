
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAnnouncement = () =>  {
    //tanstack query
    const axiosSecure = useAxiosSecure();

    const {refetch, data: announcements = [] } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            const res = await axiosSecure.get('/announcement')
            return res.data;
        }
    })


    return [announcements, refetch]
};

export default useAnnouncement;