import React from 'react';
import useAnnouncement from '../../../hooks/useAnnouncement';

const AnnouncementSection = () => {

    const [announcements, refetch] = useAnnouncement()



    return (
        <div className='md:w-[600px] mx-auto rounded-lg p-6'>
            
        
            {
                announcements.map(announcement => <>
                    <div className='border-2 border-cyan-400 p-10 rounded-lg'>
                    <h1 className='my-4 text-xl font-bold text-center md:text-4xl'>Announcement</h1>

                        <marquee><h1 className='font-bold mb-2 text-red-500'>{announcement.title}</h1></marquee>
                        <h2 className='text-center'>{announcement.description}</h2>
                    </div>
                </>)
            }
        </div>
    );
};

export default AnnouncementSection;