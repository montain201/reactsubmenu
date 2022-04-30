import React from 'react'
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookies';

const PrivateRoute = ({children})=> {
    const token = Cookies.getItem('jwt');
  return token ? children:<Navigate to='/login' />;
};
export   default PrivateRoute;
