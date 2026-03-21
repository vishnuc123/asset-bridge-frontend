import { useMutation } from "@tanstack/react-query";
import type { TRole, TSignUpFormValues } from "../../types/Auth.types";
import { register } from "../../services/authServices";
import type { ICustomError } from "../../types/Custom.types";

export const useSignup = (role:TRole,onSuccessCallBack:(userId:string) => void) => {
    return useMutation({
        mutationFn:(values:TSignUpFormValues) => register(values,role),
        onSuccess:(res) => {
            if(res.success && res.data?.userId){
                // toast
                console.log("success")
                onSuccessCallBack(res.data?.userId)
            }else{
                // toast
                console.log("error something went wrong")
            }
        },
        onError:(error:ICustomError) => {
            console.error(error,"error while signup")
            // toast
        }
    })
}

// need to impoemet hook