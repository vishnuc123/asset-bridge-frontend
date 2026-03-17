import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ErrorBoundary } from './utils/ErrorBoundary'
import LandingPage from './pages/LandingPage'
import UserRoutes from './routes/UserRoutes'

const App: React.FC = () => {
  return (
    <>
      {/* <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}> */}
        <Router>
          <ErrorBoundary>
            <Routes>
              <Route path='/' element={<LandingPage />}/>
              <Route path='/user' element={<UserRoutes />}/>
              {/* <Route path='/admin' element={<LandingPage />}/>
              <Route path='/property_owner' element={<LandingPage />}/>
              <Route path='/investor' element={<LandingPage />}/> */}
            </Routes>
          </ErrorBoundary>
        </Router>
        <App />
      {/* </GoogleOAuthProvider> */}
    </>
  )
}

export default App
