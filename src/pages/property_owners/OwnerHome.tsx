import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import UserNavbar from '../../components/navbars/userNavbar'
import { Roles } from '../../constants/Roles'
import OwnerNavbar from '../../components/navbars/OwnerNavbar'

const OwnerHomePage:React.FC = () => {
  
  const authStatus = useSelector((s:RootState) => s.auth.isAuthenticated)
  console.log( authStatus);

  // useAuthInit();
  
  return (
    <div>
      {/* <Header isAuthenticated={authStatus}/> */}
      <OwnerNavbar isAuthenticated={true}/>
      
    </div>
  )
}

export default OwnerHomePage
