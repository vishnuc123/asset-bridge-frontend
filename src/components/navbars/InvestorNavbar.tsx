
import React from "react";
import type { INavbarProps } from "../../interfaces/auth.interfaces";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/auth/useLogout";


const InvestorNavbar: React.FC<INavbarProps> = ({role, isAuthenticated }) => {
    const {mutate:LogoutUser,isPending:logoutLoading} =useLogout(role)
    const navigate = useNavigate()
    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

                {/* Logo */}
                <div className="font-semibold text-lg text-foreground">
                    ASSET<span className="text-primary">BRIDGE</span>
                </div>

                {/* Links */}
                <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
                    <span className="hover:text-foreground cursor-pointer">Hotels</span>
                    <span className="hover:text-foreground cursor-pointer">Bookings</span>
                    <span className="hover:text-foreground cursor-pointer">Wishlist</span>
                </div>

                <div className="flex items-center gap-3">



                    {!isAuthenticated ? (
                        <>
                            <button onClick={() => navigate("/investor/login")} className="px-4 py-1.5 shadow-gray-500 shadow-sm text-sm text-foreground border border-2 border-border rounded-full hover:bg-primary transition">

                                Login

                            </button>

                            <button 
                            onClick={() => navigate("/investor/signup")}
                            className="px-4 py-1.5 shadow-gray-500 shadow-sm text-sm text-foreground border border-2 border-border rounded-full hover:bg-primary transition">
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="px-3 py-1.5 text-sm rounded-full text-muted-foreground hover:bg-card transition">
                                Profile
                            </button>

                            <button
                            onClick={() => LogoutUser()}
                             className="px-3 py-1.5 text-sm rounded-full text-red-500 hover:bg-red-500/10 transition">
                                Logout
                            </button>
                        </>
                    )}

                </div>

            </div>
        </div>
    );
};

export default InvestorNavbar;