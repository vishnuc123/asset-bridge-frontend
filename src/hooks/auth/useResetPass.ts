import { useMutation } from "@tanstack/react-query"
import { ResetPass } from "../../services/authServices"
import type { TResetPassData } from "../../types/Auth.types"
import type { ICustomError } from "../../types/Custom.types"
import toast from "react-hot-toast"

export const useResetPass = () => {
    return useMutation({
        mutationFn:(values:TResetPassData) => ResetPass(values),
        onSuccess:(res) => {
            if(res.success){
                console.log("password resetted successfully")
            }
        },
        onError:(err:ICustomError) => {
        
            toast(err?.message || "something went wrong")
            console.log("error while resetting password",error)
        }
        
    })
}