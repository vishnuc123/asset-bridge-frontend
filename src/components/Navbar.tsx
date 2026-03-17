// import React from 'react'
// import type { INavbarProps } from '../interfaces/auth.interfaces'

// const Navbar: React.FC<INavbarProps> = ({ role, isAuthenticated }) => {
//     return (
//         <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">

//             <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

//                 {/* Logo */}
//                 <div className="font-semibold text-lg tracking-tight text-foreground">
//                     ASSET<span className="text-primary">BRIDGE</span>
//                 </div>

//                 {/* Links */}
//                 <div className="hidden md:flex gap-8 text-sm text-muted-foreground">

//                     {!isAuthenticated && (
//                         <>
//                             <span className="hover:text-foreground cursor-pointer transition">Hotels</span>
//                             <span className="hover:text-foreground cursor-pointer transition">Destinations</span>
//                             <span className="hover:text-foreground cursor-pointer transition">About</span>
//                         </>
//                     )}

//                     {isAuthenticated && role === "user" && (
//                         <>
//                             <span className="hover:text-foreground cursor-pointer transition">Explore</span>
//                             <span className="hover:text-foreground cursor-pointer transition">Bookings</span>
//                         </>
//                     )}

//                     {isAuthenticated && role === "investor" && (
//                         <>
//                             <span className="hover:text-foreground cursor-pointer transition">Investments</span>
//                             <span className="hover:text-foreground cursor-pointer transition">Portfolio</span>
//                         </>
//                     )}

//                     {isAuthenticated && role === "property_owner" && (
//                         <>
//                             <span className="hover:text-foreground cursor-pointer transition">Properties</span>
//                             <span className="hover:text-foreground cursor-pointer transition">Earnings</span>
//                         </>
//                     )}

//                     {isAuthenticated && role === "admin" && (
//                         <>
//                             <span className="hover:text-foreground cursor-pointer transition">Dashboard</span>
//                             <span className="hover:text-foreground cursor-pointer transition">Users</span>
//                         </>
//                     )}

//                 </div>

//                 {/* Right Side */}
//                 <div className="flex items-center gap-3">

//                     {/* Theme Toggle (optional but recommended) */}
//                     {/* <ThemeToggle /> */}

//                     {!isAuthenticated ? (
//                         <>
//                             <button className="px-4 py-1.5 shadow-gray-500 shadow-sm text-sm text-foreground border border-2 border-border rounded-full hover:bg-primary transition">

//                                 Login

//                             </button>

//                             <button className="px-4 py-1.5 shadow-gray-500 shadow-sm text-sm text-foreground border border-2 border-border rounded-full hover:bg-primary transition">
//                             Sign Up
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <button className="px-3 py-1.5 text-sm rounded-full text-muted-foreground hover:bg-card transition">
//                                 Profile
//                             </button>

//                             <button className="px-3 py-1.5 text-sm rounded-full text-red-500 hover:bg-red-500/10 transition">
//                                 Logout
//                             </button>
//                         </>
//                     )}

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Navbar