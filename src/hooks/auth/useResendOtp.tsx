import { useMutation } from "@tanstack/react-query"
import { ResendOtp } from "../../services/authServices"
import type { TResendOtp } from "../../types/Auth.types"
import { data } from "react-router-dom"
import toast from "react-hot-toast"

export const useResendOtp = () => {
    return useMutation({
        mutationFn: (values: TResendOtp) => ResendOtp(values),

        onSuccess: (res) => {
            if (res.success && res.data?.timer) {
                toast.success("OTP resent successfully")
            } else {
                toast.error(res.message || "Failed to resend OTP")
            }
        },

        onError: (error: any) => {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    })
}