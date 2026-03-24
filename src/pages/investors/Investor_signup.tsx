import { useState } from 'react'
import SignupComp from '../../components/auth/Signup'
import { useSignup } from '../../hooks/auth/useSignup';
import OtpModal from '../../components/modals/OtpModal';
import { useVerifyOtp } from '../../hooks/auth/useVerifyOtp';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../../constants/Roles';

const InvesorSignup = () => {
    const [isOtpModalIsOpen, setIsOtpModalIsOpen] = useState(false);
    // const [isOtpLoading,setIsOtpLoading] = useState(false);
    const [userId, setUserId] = useState<string>("")
    const navigate = useNavigate()

    const { mutate: signUpUser, isPending: isSignUpLoading } = useSignup(Roles.investor_role, (userId) => {
        setUserId(userId)
        setIsOtpModalIsOpen(true)
    })


    const { mutate: verifyOtp, isPending: isOtpLoading } = useVerifyOtp(Roles.investor_role, () => {
        setIsOtpModalIsOpen(true)
        navigate(`/${Roles.investor_role}/login`)
    })


    const handleOtpSubmit = (otp: string) => {
        verifyOtp({ userId, otp, purpose: "signup" })
    }
    return (
        <div>
            <SignupComp
                role={Roles.investor_role}
                subtitle={"Join and unlock investment opportunities"}
                onSubmit={signUpUser}
                isLoading={isSignUpLoading}
            />
            <OtpModal
                isOpen={isOtpModalIsOpen}
                onClose={() => setIsOtpModalIsOpen(false)}
                onSubmit={handleOtpSubmit}
                userId={userId}
                isOtploading={isOtpLoading}
            />

            {/* implement otp verify comp */}
        </div>
    )
}

export default InvesorSignup
