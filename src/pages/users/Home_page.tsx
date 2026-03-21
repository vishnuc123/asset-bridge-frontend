import React from 'react'
import Header from '../../components/header/user/header'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

const Home_page:React.FC = () => {
  
  const authStatus = useSelector((s:RootState) => s.auth.isAuthenticated)
  console.log( authStatus);
  return (
    <div>
      <Header isAuthenticated={authStatus}/>
      
    </div>
  )
}

export default Home_page
