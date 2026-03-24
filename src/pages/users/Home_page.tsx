import React, { useEffect } from 'react'
import Header from '../../components/header/user/header'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { useAuthInit } from '../../hooks/auth/useAuthInit'
import UserNavbar from '../../components/navbars/userNavbar'

const Home_page:React.FC = () => {
  
  const authStatus = useSelector((s:RootState) => s.auth.isAuthenticated)
  console.log( authStatus);

  // useAuthInit();
  
  return (
    <div>
      {/* <Header isAuthenticated={authStatus}/> */}
      <UserNavbar isAuthenticated={true}/>
      
    </div>
  )
}

export default Home_page
