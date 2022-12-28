import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { app } from '../Firebase/firebase.init';
import { async } from '@firebase/util';

const AuthData = createContext();

const AuthContext = ({children}) => {

    const auth = getAuth(app);

    const [userData,setUserData] = useState(null);

    const signup = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass);
    };

    const login = (email,pass) => {
        return signInWithEmailAndPassword(auth,email,pass);
    };

    const updateUser = (name,photoURL) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        });
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, async email =>{
            try{

            }
            catch(error) {
                console.log(error.message)
            }
        });
    };

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser, async () =>{
            try{
            }
            catch(error) {
                console.log(error.message)
            }
        });
    };

    useEffect(()=>{
        const unsubs = onAuthStateChanged(auth, async user =>{
            try{
                setUserData(user)
            }
            catch(error){
                setUserData(error.message)
            }
        });
        return () => unsubs();
    },[])

    const authInfo ={
        signup,
        login,
        updateUser,
        userData,
        resetPassword,
        emailVerification

    }

    return (
        <AuthData.Provider value={authInfo}>
            {children}
        </AuthData.Provider>
    );
};

export default AuthContext;