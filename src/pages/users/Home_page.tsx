import React, { useEffect } from 'react'
import Header from '../../components/header/user/header'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { useAuthInit } from '../../hooks/auth/useAuthInit'

const Home_page:React.FC = () => {
  
  const authStatus = useSelector((s:RootState) => s.auth.isAuthenticated)
  console.log( authStatus);

  useAuthInit();
  
  return (
    <div>
      <Header isAuthenticated={authStatus}/>
      
    </div>
  )
}

export default Home_page
