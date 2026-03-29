import { useMutation } from "@tanstack/react-query"
import type { TForgetPasswordData } from "../../types/Auth.types"
import { ForgetPassword } from "../../services/authServices"
import toast from "react-hot-toast"
import type { ICustomError } from "../../types/Custom.types"

export const useForgetPassword = () => {
    return useMutation({
        mutationFn:(values:TForgetPasswordData) => ForgetPassword(values),
        onSuccess:(res) => {
            if(res.success){
                console.log("data from the forgetpass")
                // naviaget to otp page
            }else{
                console.log("failed",res.message)
            }
        }, 
        onError:(err:ICustomError) => {
            console.log("error from forgetpassword",err)
            toast.error(err?.response?.data?.message || "something went wrong")
        }
    })
}