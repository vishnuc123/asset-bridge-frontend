import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/users/Login'
import UserLandingPage from '../pages/users/LandingPage'
import Signup from '../pages/users/Signup'
import Home_page from '../pages/users/Home_page'
import ProtectUser from '../protectedRoutes/ProtectUser'
import { Roles } from '../constants/Roles'
import ProtectGuest from '../protectedRoutes/ProtectGuest'

const UserRoutes: React.FC = () => {
  return (
    <Routes>

      <Route path='landing_page' element={
        <ProtectGuest>
          <UserLandingPage />
        </ProtectGuest>
      } />
      <Route path='login' element={
        <ProtectGuest>
          <Login />
        </ProtectGuest>
      } />

      <Route path='signup' element={
        <ProtectGuest>
          <Signup />
        </ProtectGuest>
      } />

      <Route path='home_page' element={
        <ProtectUser allowedRoles={[Roles.user_role]}>
          <Home_page />
        </ProtectUser>
        // <Home_page />

      } />
    </Routes>
  )
}

export default UserRoutes
