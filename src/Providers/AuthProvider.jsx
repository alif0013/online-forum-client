import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const axiosPublic = useAxiosPublic();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Google sign in with popUpp
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Creat user/ Register by CreatUserWithEmailAndPassword
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  sign In 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    // Observed on auth / current state change 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the state changed', currentUser);
            setUser(currentUser)

            if(currentUser){
                //get token and store client
                const userInfo = {email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }

            else{

                localStorage.removeItem('access-token')

            }
           
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])

    const userInfo = {
        user,
        loading,
        signInWithGoogle,
        creatUser,
        signIn,
        logOut


    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;