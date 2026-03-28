import { Route, Routes } from 'react-router-dom'
import ProtectGuest from '../protectedRoutes/ProtectGuest'
import ProtectUser from '../protectedRoutes/ProtectUser'
import { Roles } from '../constants/Roles'
import OwnerLoginPage from '../pages/property_owners/OwnerLogin'
import OwnerLandingPage from '../pages/property_owners/OwnerLanding'
import OwnerSignupPage from '../pages/property_owners/OwnerSignup'
import OwnerHomePage from '../pages/property_owners/OwnerHome'

const OwnerRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={
        <ProtectGuest>
          <OwnerLoginPage />
        </ProtectGuest>
      } />



      <Route path='Landing_page' element={
        <ProtectGuest>
          <OwnerLandingPage />
        </ProtectGuest>
      } />

      <Route path='signup' element={
        <ProtectGuest>
          <OwnerSignupPage />
        </ProtectGuest>
      } />

      <Route path='Home_page' element={
        <ProtectUser allowedRoles={[Roles.property_owner_role]}>
          <OwnerHomePage />
        </ProtectUser>
      } />
    </Routes>
  )
}

export default OwnerRoutes
