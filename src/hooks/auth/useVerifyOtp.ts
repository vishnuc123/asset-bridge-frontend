import { useMutation } from "@tanstack/react-query"
import type { TotpFormValues } from "../../types/Auth.types"
import { verifyOtp } from "../../services/authServices"
import type { ICustomError } from "../../types/Custom.types"

export const useVerifyOtp = (role:string,onSuccessCallBack:(data:string) => void)=>{
    return useMutation({
        mutationFn:(values:TotpFormValues) => verifyOtp(values,role),
        onSuccess:(res) => {
            if(res.success){
                // toast 
                if(res.data?.email){
                    onSuccessCallBack(res.dat?.email)
                }else{
                    // toast error not found otp verification
                }
            }else{
                // toast err.message || something went wrong
            }
        },
        onError:(err:ICustomError) => {
            console.log("error logging",err)
            // toast error.response.data.message||something went wrong
        }
    })
}