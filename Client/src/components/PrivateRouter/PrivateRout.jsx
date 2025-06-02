import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log("PrivateRoute - Current Location:", location);
    
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (user?.email) {
        return children;
    }

  
   return <Navigate to="/login" state={{ from: location }} replace />;

}

export default PrivateRoute;
