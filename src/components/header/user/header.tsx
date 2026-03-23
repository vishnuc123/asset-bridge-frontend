'use client';

import { Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="font-semibold text-lg text-foreground cursor-pointer"
        >
          ASSET<span className="text-primary">BRIDGE</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <span onClick={() => navigate("/admin/Manage-Users")} className="hover:text-foreground cursor-pointer text-lg">
            operations
          </span>
          <span onClick={() => navigate("/bookings")} className="hover:text-foreground cursor-pointer text-lg">
            Finance-Business
          </span>
          {/* <span onClick={() => navigate("/wishlist")} className="hover:text-foreground cursor-pointer">
            Wishlist
          </span> */}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button className="p-2 rounded-full hover:bg-card transition">
            <Search size={18} />
          </button>

          {!isAuthenticated ? (
            <>
              <button
                onClick={() => navigate("/user/login")}
                className="px-4 py-1.5 text-sm border border-border rounded-full hover:bg-primary transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/user/signup")}
                className="px-4 py-1.5 text-sm border border-border rounded-full hover:bg-primary transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button className="px-3 py-1.5 text-sm rounded-full hover:bg-card transition">
                Profile
              </button>

              <button className="px-3 py-1.5 text-sm rounded-full text-red-500 hover:bg-red-500/10 transition">
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </header>
  );
}