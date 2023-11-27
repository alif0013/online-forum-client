import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return (
            <div>
             <iframe src="https://giphy.com/embed/feN0YJbVs0fwA" width="480"
              height="480" frameBorder="0"
               class="giphy-embed" allowFullScreen></iframe>
               <p><a href="https://giphy.com/gifs/artists-on-tumblr-design-feN0YJbVs0fwA">via GIPHY</a></p>
            </div>
        )
        // return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};


export default PrivateRoutes;