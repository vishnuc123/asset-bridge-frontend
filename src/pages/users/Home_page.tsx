import React, { useEffect } from 'react'
import Header from '../../components/header/user/header'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { useAuthInit } from '../../hooks/auth/useAuthInit'
import UserNavbar from '../../components/navbars/userNavbar'
import { Roles } from '../../constants/Roles'

const Home_page:React.FC = () => {
  
  const authStatus = useSelector((s:RootState) => s.auth.isAuthenticated)
  console.log( authStatus);

  // useAuthInit();
  
  return (
    <div>
      {/* <Header isAuthenticated={authStatus}/> */}
      <UserNavbar role={Roles.user_role} isAuthenticated={true}/>
      
    </div>
  )
}

export default Home_page
