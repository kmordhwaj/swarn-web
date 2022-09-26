import React from 'react';
import {Navigate} from 'react-router-dom';
import { UserAuth} from './context route/AuthContext';


const ProtectedRoute = ({children}) => {

    const {user} = UserAuth();

    if(!user){
        return <Navigate to='/loginfirst' />
    }

  return children
}

export default ProtectedRoute