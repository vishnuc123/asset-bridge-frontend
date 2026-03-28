import { useState } from 'react'
import SignupComp from '../../components/auth/Signup'
import { useSignup } from '../../hooks/auth/useSignup';
import OtpModal from '../../components/modals/OtpModal';
import { useVerifyOtp } from '../../hooks/auth/useVerifyOtp';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../../constants/Roles';

const OwnerSignupPage = () => {
  const [isOtpModalIsOpen, setIsOtpModalIsOpen] = useState(false);
  // const [isOtpLoading,setIsOtpLoading] = useState(false);
  const [userId, setUserId] = useState<string>("")
  const navigate = useNavigate()

  const { mutate: signUpUser, isPending: isSignUpLoading } = useSignup(Roles.property_owner_role, (userId) => {
    setUserId(userId)
    setIsOtpModalIsOpen(true)
  })


  const { mutate: verifyOtp, isPending: isOtpLoading } = useVerifyOtp(Roles.property_owner_role, () => {
    setIsOtpModalIsOpen(true)
    navigate(`/${Roles.user_role}/login`)
  })


  const handleOtpSubmit = (otp: string) => {
    verifyOtp({ userId, otp, purpose: "signup" })
  }
  return (
    <div>
      <SignupComp
        role={"user"}
        subtitle={"Join Asset Bridge to book stays and explore opportunities"}
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

export default OwnerSignupPage
