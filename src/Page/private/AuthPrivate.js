import React, { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthData } from '../../Context/AuthContext';

const AuthPrivate = ({children}) => {
    const {userData,loaded} = useContext(AuthData);

    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    if(!loaded) return <p>Auth</p>;

    if(userData?.uid) return <Navigate to={from}></Navigate>;

    return children;
};

export default AuthPrivate;