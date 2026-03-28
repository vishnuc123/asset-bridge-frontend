import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/auth/useLogout";
import { Roles } from "../../constants/Roles";

type Props = {
  isAuthenticated: boolean;
};

const OwnerNavbar: React.FC<Props> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const { mutate: LogoutUser, isPending: logoutLoading } =
    useLogout(Roles.property_owner_role);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="font-semibold text-lg text-foreground">
          ASSET<span className="text-primary">BRIDGE</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer">Properties</span>
          <span className="hover:text-foreground cursor-pointer">Bookings</span>
          <span className="hover:text-foreground cursor-pointer">Earnings</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {!isAuthenticated ? (
            <>
              <button
                onClick={() => navigate("/owner/login")}
                className="px-4 py-1.5 shadow-gray-500 shadow-sm text-sm text-foreground border border-2 border-border rounded-full hover:bg-primary transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/property-owner/signup")}
                className="px-4 py-1.5 shadow-gray-500 shadow-sm text-sm text-foreground border border-2 border-border rounded-full hover:bg-primary transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                className="px-3 py-1.5 text-sm rounded-full text-muted-foreground hover:bg-card transition"
              >
                Profile
              </button>

              <button
                onClick={() => LogoutUser()}
                className="px-3 py-1.5 text-sm rounded-full text-red-500 hover:bg-red-500/10 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default OwnerNavbar;