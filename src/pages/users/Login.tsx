import React from 'react'
import Logincomp from '../../components/auth/Login'
import { useLogin } from '../../hooks/auth/useLogin'
import { Roles } from '../../constants/Roles'

const Login:React.FC = () => {
  const {mutate:LoginUserLogic,isPending:isLoginLoading} = useLogin(Roles.user_role)
  
  return (
    <div>
      <Logincomp role={Roles.user_role} subtitle='Login as User explore stays and Book' btnText='Login and Explore stays' onSubmit={LoginUserLogic} isLoading={isLoginLoading}/>
    </div>
  )
}

export default Login
