import React, { useState } from 'react'
import ForgotPasswordComponent from '../components/auth/Forgetpass'
import ResetPassModal from '../components/modals/OtpModal'
import { useForgetPassword } from '../hooks/auth/useForgetPassword'
import { useVerifyOtp } from '../hooks/auth/useVerifyOtp'
import { Roles } from '../constants/Roles'
import { useNavigate } from 'react-router-dom'
import ResetPasswordComponent from '../components/modals/ResetModal'
import { useResetPass } from '../hooks/auth/useResetPass'

const ForgetPassword = () => {
    const [isOtpOpen, setIsOtpOpen] = useState(false)
    const [isShowReset, setIsShowReset] = useState(false)
    const [userId,setUserId] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const navigate = useNavigate()
    const { mutate: forgetPasswordLogic, isPending: isForgetPassLoading } = useForgetPassword()
    const handleForgetPass = (email: string) => {
        forgetPasswordLogic(
            { email },
            {
                onSuccess: (res) => {
                    console.log("data from fogetpasslogic",res)
                    setUserId(res.data)
                    setEmail(email)
                    setIsOtpOpen(true)
                }
            }
        )
    }


    const {mutate:verifiyOtpLogic,isPending:otpLoading} = useVerifyOtp(Roles.user_role,() => {
        setIsOtpOpen(false)
        setIsShowReset(true)
        // navigate("/")
    })
    const handleOtpSubmit = (otp:string) => {
        verifiyOtpLogic({userId,otp,purpose:"reset"})
    }

    const {mutate:ResetPassLogic,isPending:ResetLoading} = useResetPass(() => {
        setIsShowReset(false)
        navigate('/')
    })
    const handleResetPass = (email:string,password:string) => {
        ResetPassLogic({email,password})
    }
    console.log("user email",email)
    return (
        <div>
            <ForgotPasswordComponent onSubmit={handleForgetPass} isLoading={isForgetPassLoading} />
            <ResetPassModal isOpen={isOtpOpen} onClose={() => setIsOtpOpen(false)} userId={userId} isOtploading={otpLoading} onSubmit={handleOtpSubmit} />
            <ResetPasswordComponent isOpen={isShowReset} email={email} onClose={() => setIsShowReset(false)} onSubmit={handleResetPass} isLoading={ResetLoading}/>
        </div>
    )
}

export default ForgetPassword
