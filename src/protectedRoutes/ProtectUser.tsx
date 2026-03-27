import { Navigate, useLocation } from "react-router-dom";
import { Roles } from "../constants/Roles";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { JSX } from "react";
import type { TRole } from "../types/Auth.types";
import { useAuthInit } from "../hooks/auth/useAuthInit";
import SelectRoleModal from "../pages/SelectRoute";


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

    if (auth.isLoading) {
        return <>Loading...</>
    }
    console.log("activeRole",auth.activeRole);
    
    
    console.log(auth.user)
    if (!auth.isAuthenticated) {
        return <Navigate to='/' state={{ from: location }} replace />;
        // /user/login
    }
    if (!auth.activeRole) {
        return <SelectRoleModal />
    }

    if (allowedRoles && !allowedRoles.includes(auth?.activeRole)) {
        // switch (auth.user?.roles.includes(auth.activeRole)) {
        //     case Roles.user_role:
        //         return <Navigate to="/user/Home_page" replace />;
        //     case Roles.admin_role:
        //         return <Navigate to="/admin/Home_page" replace />;
        //     case Roles.investor_role:
        //         return <Navigate to="/investor/Home_page" replace />;
        //     case Roles.property_owner_role:
        //         return <Navigate to="/owner/Home_page" replace />;
        //     default:
        //         return <Navigate to="/" replace />;
        // }
        return <Navigate to="/" replace />
    }

    return children;
};

export default ProtectUser