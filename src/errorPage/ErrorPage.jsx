import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/rMbBdxV/404-image.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
            <div className="max-w-md bg-white p-20">
                <h1 className="mb-5 text-5xl font-bold">404 error</h1>
                <p className="mb-5">Oops! The page you are looking for does not exist.</p>
                <Link to='/' className="btn border-[red] bg-[#ff1949] text-white">Back to Home</Link>
            </div>
        </div>
    </div>
    );
};

export default ErrorPage;