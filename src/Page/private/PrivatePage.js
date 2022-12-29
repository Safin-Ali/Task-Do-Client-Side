import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthData } from '../../Context/AuthContext';

const PrivatePage = ({children}) => {

    const {userData,loaded,logOut} = useContext(AuthData);

    const location = useLocation();

    if(!loaded) return <p>wait</p>;

    if(!userData) return <Navigate to={'/login'} state={{from: location}} replace></Navigate>;

    // if(userData && !localStorage.getItem('token')) return logOut();

    return children;
};

export default PrivatePage;