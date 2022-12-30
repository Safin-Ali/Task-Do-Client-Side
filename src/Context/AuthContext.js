import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../Firebase/firebase.init';

export const AuthData = createContext();

const AuthContext = ({children}) => {

    const auth = getAuth(app);

    const [onPosting,SetPostBool] = useState(false);

    const [userData,setUserData] = useState(null);

    const [loaded,setLoaded] = useState(false);

    const googleAuthProv = new GoogleAuthProvider();

    const signup = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass);
    };

    const signWithGoogle = (email,pass) => {
        return signInWithPopup(auth,googleAuthProv);
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

    const logOut = () => {
        signOut(auth)
        .then(res => localStorage.removeItem('token'))
        .catch(e => console.log(e.message));
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth,email);
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
                setUserData(user);
                setLoaded(true);
            }
            catch(error){
                setUserData(error.message)
            }
        });
        return () => unsubs();
    },[])
    
    console.log(userData)


    const authInfo ={
        signup,
        login,
        updateUser,
        userData,
        resetPassword,
        emailVerification,
        signWithGoogle,
        logOut,
        loaded,
        onPosting,
        SetPostBool

    }

    return (
        <AuthData.Provider value={authInfo}>
            {children}
        </AuthData.Provider>
    );
};

export default AuthContext;