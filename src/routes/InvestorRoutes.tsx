import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Investor_Login from '../pages/investors/Investor_Login'
import Investor_Home_page from '../pages/investors/Investor_Home_page'
import ProtectGuest from '../protectedRoutes/ProtectGuest'
import ProtectUser from '../protectedRoutes/ProtectUser'
import { Roles } from '../constants/Roles'
import Investor_landing_page from '../pages/investors/Investor_Landing_page'
import InvesorSignup from '../pages/investors/Investor_signup'

const InvestorRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={
        <ProtectGuest>

          <Investor_Login />
        </ProtectGuest>
      } />



      <Route path='Landing_page' element={
        <ProtectGuest>

          <Investor_landing_page />
        </ProtectGuest>
      } />
      <Route path='signup' element={
        <ProtectGuest>

          <InvesorSignup />
        </ProtectGuest>
      } />



      <Route path='Home_page' element={
        <ProtectUser allowedRoles={[Roles.investor_role]}>

          <Investor_Home_page />
        </ProtectUser>
      } />
    </Routes>
  )
}

export default InvestorRoutes
