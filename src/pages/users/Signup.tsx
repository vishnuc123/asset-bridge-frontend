import { useEffect, useState } from 'react'
import SignupComp from '../../components/auth/Signup'
import { useSignup } from '../../hooks/auth/useSignup';
import OtpModal from '../../components/modals/OtpModal';
import { useVerifyOtp } from '../../hooks/auth/useVerifyOtp';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../../constants/Roles';
import { useResendOtp } from '../../hooks/auth/useResendOtp';

const Signup = () => {
  const [isOtpModalIsOpen, setIsOtpModalIsOpen] = useState(false);
  // const [isOtpLoading,setIsOtpLoading] = useState(false);
  const [userId, setUserId] = useState<string>("")
  const [timer, setTimer] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUserId = localStorage.getItem("otp_userId")
    const expiry = localStorage.getItem("otp_expiry")

    if (storedUserId && expiry && Date.now() < Number(expiry)) {
      setUserId(storedUserId)
      setTimer(Number(expiry))
      setIsOtpModalIsOpen(true)
    }
  }, [])

  // ✅ TIMER LOGIC
  useEffect(() => {
    if (!timer) return

    const interval = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.floor((timer - Date.now()) / 1000)
      )

      setTimeLeft(remaining)

      if (remaining === 0) clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])


  const { mutate: signUpUser, isPending: isSignUpLoading } = useSignup(Roles.user_role, (userId, timer) => {
    setUserId(userId)
    setTimer(timer)
    setIsOtpModalIsOpen(true)
    setTimeLeft(Math.floor((timer - Date.now()) / 1000))

    localStorage.setItem("otp_userId", userId)
    localStorage.setItem("otp_expiry", timer.toString())
    localStorage.setItem("otp_open", "true")
  })


  const { mutate: verifyOtp, isPending: isOtpLoading } = useVerifyOtp(Roles.user_role, () => {
    localStorage.removeItem("otp_userId")
    localStorage.removeItem("otp_expiry")
    localStorage.removeItem("otp_open")
    setIsOtpModalIsOpen(true)
    navigate(`/${Roles.user_role}/login`)
  })

  const { mutate: resendOtp, isPending: isResendOtpLoading } = useResendOtp()
  const handleResend = () => {
    if (!userId) return

    resendOtp(
      { userId },
      {
        onSuccess: (res) => {
          const newTimer = res.data.timer

          setTimer(newTimer)
          localStorage.setItem("otp_expiry", newTimer.toString())
        }
      }
    )
  }

  const handleOtpSubmit = (otp: string) => {
    // if (timeLeft === 0) return
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
        timeleft={timeLeft}
        onResend={handleResend}
      />

      {/* implement otp verify comp */}
    </div>
  )
}

export default Signup
