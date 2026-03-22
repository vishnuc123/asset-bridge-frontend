import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ErrorBoundary } from './utils/ErrorBoundary'
import UserRoutes from './routes/UserRoutes'
import MainLandingPage from './pages/Main.LandingPage'
import ProtectGuest from './protectedRoutes/ProtectGuest'

const App: React.FC = () => {
  return (
    <>
      {/* <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}> */}
        <Router>
          <ErrorBoundary>
            <Routes>
              
              <Route path='/' element={
                <ProtectGuest>

                  <MainLandingPage />
                </ProtectGuest>
                }/>
              <Route path='/user/*' element={<UserRoutes />}/>
              {/* <Route path='/admin' element={<LandingPage />}/>
              <Route path='/property_owner' element={<LandingPage />}/>
              <Route path='/investor' element={<LandingPage />}/> */}
            </Routes>
          </ErrorBoundary>
        </Router>
      {/* </GoogleOAuthProvider> */}
    </>
  )
}

export default App
