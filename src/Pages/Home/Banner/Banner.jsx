import React from 'react';

const Banner = () => {
    return (
        <div className='mt-10'>
            <div className="hero md:min-h-[520px]" style={{ backgroundImage: 'url(https://i.ibb.co/S3rZfMj/Pngtree-economic-forum-corporate-meeting-1028357.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                      
                   <h1 className='text-xl font-bold mb-10 md:text-5xl'>Welcome to the Forum</h1>
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
                        </div>

                        <p className="mb-5 mt-7">Share your favorite opinion and Join Our Community!</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;