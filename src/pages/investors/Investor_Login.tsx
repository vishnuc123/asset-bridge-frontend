import React from 'react'
import Logincomp from '../../components/auth/Login'
import { Roles } from '../../constants/Roles'
import { useLogin } from '../../hooks/auth/useLogin'

const Investor_Login = () => {
    const { mutate: loginInvestor, isPending: loginLoading } = useLogin(Roles.investor_role)
    return (
        <div>
            <Logincomp role={Roles.investor_role}
                subtitle='Your gateway to trusted investment opportunities.'
                btnText='Login & Begin Investing'
                onSubmit={loginInvestor}
                isLoading={loginLoading}
            />
        </div>
    )
}

export default Investor_Login
