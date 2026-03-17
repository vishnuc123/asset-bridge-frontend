import React from "react";

const AdminNavbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        <div className="font-semibold text-lg text-foreground">
          ADMIN<span className="text-primary"> PANEL</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer">Dashboard</span>
          <span className="hover:text-foreground cursor-pointer">Users</span>
          <span className="hover:text-foreground cursor-pointer">Reports</span>
        </div>

        <div className="flex gap-3">
          <button className="px-3 py-1.5 rounded-full hover:bg-card text-muted-foreground">
            Admin
          </button>
          <button className="px-3 py-1.5 rounded-full text-red-500 hover:bg-red-500/10">
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminNavbar;