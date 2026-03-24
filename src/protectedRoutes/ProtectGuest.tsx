import React, { type JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { useAuthInit } from '../hooks/auth/useAuthInit';

interface GuestRouteProps {
    children: JSX.Element;
}

const ProtectGuest: React.FC<GuestRouteProps> = ({ children }) => {
    const auth = useSelector((s: RootState) => s.auth)
    const location = useLocation()
    

    if (auth.user && auth.isAuthenticated) {
        if(auth.activeRole){

            return <Navigate to={`/${auth.activeRole}/Home_page`} replace />
        }
        return <Navigate to={`/${auth.user.roles[0].toLowerCase()}/Home_page`}/>
    }

    return children;
};

export default ProtectGuest;