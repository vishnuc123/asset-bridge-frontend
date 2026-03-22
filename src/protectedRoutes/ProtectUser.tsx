import { Navigate, useLocation } from "react-router-dom";
import { Roles } from "../constants/Roles";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { JSX } from "react";
import type { TRole } from "../types/Auth.types";
import { useAuthInit } from "../hooks/auth/useAuthInit";


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


    console.log(auth.user)
    // ❌ not logged in
    if (!auth.isAuthenticated) {
        return <Navigate to='/user/login' state={{ from: location }} replace />;
    }

    // ❌ role not allowed
    let role = auth.user?.role
    if (!role) {
        return <Navigate to="/" replace />;
    }
    if (allowedRoles && !allowedRoles.includes(role)) {
        switch (auth.user?.role) {
            case Roles.user_role:
                return <Navigate to="/user/Home_page" replace />;
            case Roles.admin_role:
                return <Navigate to="/admin/Home_page" replace />;
            case Roles.investor_role:
                return <Navigate to="/investor/Home_page" replace />;
            case Roles.property_owner_role:
                return <Navigate to="/owner/Home_page" replace />;
            default:
                return <Navigate to="/" replace />;
        }
    }

    return children;
};

export default ProtectUser