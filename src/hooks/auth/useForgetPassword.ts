import { useMutation } from "@tanstack/react-query"
import type { TForgetPasswordData } from "../../types/Auth.types"
import { ForgetPassword } from "../../services/authServices"

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
        onError:(err) => {
            console.log("error from forgetpassword",err)
        }
    })
}