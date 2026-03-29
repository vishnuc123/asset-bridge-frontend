// components/admin/AdminSidebar.tsx

import React from "react";
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    Hotel,
    BookOpen,
    Wallet,
    ShieldCheck,
    MessageCircle,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useLogout } from "../../../hooks/auth/useLogout";
import { Roles } from "../../../constants/Roles";
import { logout } from "../../../store/slices/Auth.slice";

interface Props {
    collapsed: boolean;
    //   setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "User Management", path: "/admin/Manage-Users", icon: Users },
    { name: "Hotel Listings", path: "/admin/hotels", icon: Hotel },
    { name: "Bookings", path: "/admin/bookings", icon: BookOpen },
    { name: "Transactions", path: "/admin/transactions", icon: Wallet },
    { name: "KYC Verifications", path: "/admin/kyc", icon: ShieldCheck },
    { name: "Chat", path: "/admin/chat", icon: MessageCircle },
];

const AdminSidebar: React.FC<Props> = ({ collapsed, }) => {
    const {mutate:LogoutUser} = useLogout(Roles.admin_role)
    return (
        <aside
            className={`bg-white h-full shadow-md transition-all duration-300 
      ${collapsed ? "w-20" : "w-64"}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                {!collapsed && <h1 className="font-bold text-lg">Admin</h1>}

                <button
                    //   onClick={() => setCollapsed(!collapsed)}
                    className="p-1 rounded hover:bg-gray-100"
                >
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-2 px-2">
                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition 
                ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`
                            }
                        >
                            <Icon size={20} />

                            {!collapsed && <span>{item.name}</span>}
                        </NavLink>
                    );
                })}
            </nav>

            {/* Logout */}
            <div className="absolute bottom-4 w-50 px-2">
                <button
                onClick={() => logout()} 
                className="flex items-center gap-3 p-3 w-full text-red-500 hover:bg-red-50 rounded-lg">
                    <LogOut size={20} />
                    {!collapsed && <span>Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;