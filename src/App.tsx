import { GoogleOAuthProvider } from '@react-oauth/google'
import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ErrorBoundary } from './utils/ErrorBoundary'
import UserRoutes from './routes/UserRoutes'
import MainLandingPage from './pages/Main.LandingPage'
import ProtectGuest from './protectedRoutes/ProtectGuest'
import { useAuthInit } from './hooks/auth/useAuthInit'
import AdminRoutes from './routes/AdminRoutes'

const App: React.FC = () => {
  useAuthInit()
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
        <Router>
          <ErrorBoundary>
            <Routes>
              
              <Route path='/' element={
                <ProtectGuest>

                  <MainLandingPage />
                </ProtectGuest>
                }/>
              <Route path='/user/*' element={<UserRoutes />}/>
              <Route path='/admin/*' element={<AdminRoutes />}/>
              {/* <Route path='/admin' element={<LandingPage />}/>
              <Route path='/investor' element={<LandingPage />}/> */}
            </Routes>
          </ErrorBoundary>
        </Router>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
