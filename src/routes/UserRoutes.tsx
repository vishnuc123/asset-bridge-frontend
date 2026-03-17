import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/users/Login'
import UserLandingPage from '../pages/users/LandingPage'
import Signup from '../pages/users/Signup'

const UserRoutes:React.FC = () => {
  return (
    <Routes>
        <Route path='landing_page'element={<UserLandingPage />} />
        <Route path='login'element={<Login />} />
        <Route path='signup'element={<Signup />} />
    </Routes>
  )
}

export default UserRoutes
