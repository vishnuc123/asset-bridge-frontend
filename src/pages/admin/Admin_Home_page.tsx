import React from 'react'
import Header from '../../components/header/user/header'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

const Admin_Home_page = () => {
  const authStatus = useSelector((s:RootState) => s.auth.isAuthenticated)
  return (
    <div>
      <Header isAuthenticated={authStatus}/>
    </div>
  )
}

export default Admin_Home_page
