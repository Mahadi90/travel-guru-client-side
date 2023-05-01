import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {

  const { user,loading } = useContext(AuthContext)
  const location = useLocation()

  if(loading){
    return <div className='text-center mx-auto mt-5'><Spinner animation="border" variant="primary" /><br /><h4 className='text-primary'>Loading..</h4>
    </div>
  }
  
   if(user) {
    return children;
   }

    return <Navigate state={{from : location}} to='login' replace></Navigate>

};

export default PrivateRoutes;