import React, { type JSX } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate, useLocation } from "react-router-dom";
import type { TRole } from "../types/Auth.types";
import { Roles } from "../constants/Roles";

interface IProtectedProps {
    children: JSX.Element;
    allowedRoles: Array<TRole>
}

const ProtectUser: React.FC<IProtectedProps> = ({
    children,
    allowedRoles,
}) => {
    const auth = useSelector((state: RootState) => state.auth);
    const location = useLocation();

    // const user = auth.user;

    if (!auth.user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(auth.user.role)) {
        switch (auth.user.role) {
            case Roles.user_role:
                return <Navigate to="/user/home_page" replace />;
            case Roles.admin_role:
                return <Navigate to="/admin/home_page" replace />;
            case Roles.investor_role:
                return <Navigate to="/investor/home_page" replace />;
            case Roles.property_owner_role:
                return <Navigate to="/owner/home_page" replace />;
            default:
                return <Navigate to="/" replace />;
        }
    }

    return children;
};

export default ProtectUser;