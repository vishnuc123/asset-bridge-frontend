import { useMutation } from "@tanstack/react-query";
import type { TRole, TSignUpFormValues } from "../../types/Auth.types";
import { register } from "../../services/authServices";
import type { ICustomError } from "../../types/Custom.types";
import toast from "react-hot-toast";

// const toastId = toast.loading("sending email to verify...")
export const useSignup = (role: TRole, onSuccessCallBack: (userId: string,timer:number) => void) => {
    return useMutation({
        mutationFn: (values: TSignUpFormValues) => register(values, role),
        onSuccess: (res) => {
            if (res.success && res.data?.userId) {
                // toast
                console.log("success", res)
                toast.success("registered: please verify otp")
                onSuccessCallBack(res.data?.userId,res.data?.timer)
            } else {
                // toast
                toast.error(res.message || "something went wrong")
                console.log("error something went wrong")
            }
        },
        onError: (error: ICustomError) => {
            console.error(error.response.data.message, "error while signup")
            // toast
            toast.error(error?.response.data.message || "something went wrong")

        }
    })
}

// need to impoemet hook