import { GoogleOAuthProvider } from '@react-oauth/google'
import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ErrorBoundary } from './utils/ErrorBoundary'
import UserRoutes from './routes/UserRoutes'
import MainLandingPage from './pages/Main.LandingPage'
import ProtectGuest from './protectedRoutes/ProtectGuest'
import { useAuthInit } from './hooks/auth/useAuthInit'
import AdminRoutes from './routes/AdminRoutes'
import InvestorRoutes from './routes/InvestorRoutes'
import { Toaster } from "react-hot-toast";
import ForgetPassword from './pages/ForgetPassword'
import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
import OwnerRoutes from './routes/OwnerRoutes'


const App: React.FC = () => {
  useAuthInit()
  const auth = useSelector((s: RootState) => s.auth)
  if (auth.isLoading) {
    return <div>loading ....</div>
  }
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
        <Router>
          <ErrorBoundary>
            <Toaster position="top-center" />
            <Routes>

              <Route path='/' element={
                <ProtectGuest>

                  <MainLandingPage />
                </ProtectGuest>
              } />
              <Route path='/forget-password' element={
                <ProtectGuest>
                  <ForgetPassword />
                </ProtectGuest>

              } />
              <Route path='/user/*' element={<UserRoutes />} />
              <Route path='/admin/*' element={<AdminRoutes />} />
              <Route path='/investor/*' element={<InvestorRoutes />} />
              <Route path='/owner/*' element={<OwnerRoutes />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
