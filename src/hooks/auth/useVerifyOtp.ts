import { useMutation } from "@tanstack/react-query"
import type { TotpFormValues } from "../../types/Auth.types"
import { verifyOtp } from "../../services/authServices"
import type { ICustomError } from "../../types/Custom.types"
import toast from "react-hot-toast"

export const useVerifyOtp = (role:string,onSuccessCallBack:(data:string) => void)=>{
    return useMutation({
        mutationFn:(values:TotpFormValues) => verifyOtp(values,role),
        onSuccess:(res) => {
            if(res.success){
                // toast 
                toast.success("otp verified")
                if(res.data?.email){
                    onSuccessCallBack(res.dat?.email)
                }else{
                    // toast error not found otp verification
                    toast.error("email not found after verification")
                }
            }else{
                // toast err.message || something went wrong
                toast.error(res.message||"something went wrong")
            }
        },
        onError:(err:ICustomError) => {
            console.log("error logging",err)
            // toast error.response.data.message||something went wrong
            toast.error(err?.response.data.message ||"something went wrong")
        }
    })
}