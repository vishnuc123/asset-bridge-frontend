import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../pages/admin/AdminLogin'
import Admin_Home_page from '../pages/admin/Admin_Home_page'
import ProtectGuest from '../protectedRoutes/ProtectGuest'
import ProtectUser from '../protectedRoutes/ProtectUser'
import { Roles } from '../constants/Roles'
import Admin_Manage_user from '../pages/admin/Admin_Manage_user'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={
        <ProtectGuest>
          <AdminLogin />
        </ProtectGuest>
      } />
      <Route path='Home_page' element={
        <ProtectUser allowedRoles={[Roles.admin_role]}>
          <Admin_Home_page />
        </ProtectUser>
      } />
      <Route path='Manage-Users' element={
        <ProtectUser allowedRoles={[Roles.admin_role]}>
          <Admin_Manage_user />
        </ProtectUser>
      } />
    </Routes>
  )
}

export default AdminRoutes
