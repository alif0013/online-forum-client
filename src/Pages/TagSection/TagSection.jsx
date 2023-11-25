import React from 'react';

const TagSection = () => {
    return (
        <div className='mb-10 md:mb-20'>
            <h1 className='my-10 text-xl font-bold text-center md:text-4xl'>#Tags</h1>

 
            <div className='grid grid-cols-3 px-5 text-center md:grid-cols-6 justify-center gap-10'>
                <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>#health</p>
                <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>#election</p>
                <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>#science</p>
                <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>#story</p>
                <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>#personal</p>
                <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>#trending</p>
               
            </div>
         
         
        </div>
    );
};

export default TagSection;