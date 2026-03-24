import React from 'react'
import Header from '../../components/header/user/header'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { User } from 'lucide-react'
import InvestorNavbar from '../../components/navbars/InvestorNavbar'
import { Roles } from '../../constants/Roles'

const Investor_Home_page = () => {
  const auth = useSelector((s:RootState) => s.auth.user)
  return (
    <div>
      {/* <Header isAuthenticated={true}/> */}
      <InvestorNavbar role={Roles.investor_role} isAuthenticated={true}/>
      <div><h1>Welcome {`${auth?.email} As Investor`}</h1></div>
    </div>
  )
}

export default Investor_Home_page
