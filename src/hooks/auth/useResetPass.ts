import { useMutation } from "@tanstack/react-query"
import { ResetPass } from "../../services/authServices"
import type { TResetPassData } from "../../types/Auth.types"
import type { ICustomError } from "../../types/Custom.types"
import toast from "react-hot-toast"

export const useResetPass = (onSuccessCallback:() => void) => {
    return useMutation({
        mutationFn:(values:TResetPassData) => ResetPass(values),
        onSuccess:(res) => {
            if(res.success){
                toast.success("password resetted successfully")
                console.log("password resetted successfully")
                onSuccessCallback();
            }
        },
        onError:(err:ICustomError) => {
        
            toast(err?.response.data.message || "something went wrong")
            // console.log("error while resetting password",error)
        }
        
    })
}