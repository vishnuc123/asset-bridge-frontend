import React from 'react'
import Logincomp from '../../components/auth/Login'
import { useLogin } from '../../hooks/auth/useLogin'
import { Roles } from '../../constants/Roles'

const AdminLogin = () => {
  const {mutate:loginadmin,isPending:isloginLoading} = useLogin(Roles.admin_role)
  return (
    <div>
      <Logincomp role={Roles.admin_role} subtitle='login as admin and track Everything' btnText='loginto Admin' onSubmit={loginadmin} isLoading={isloginLoading}/>
    </div>
  )
}

export default AdminLogin
