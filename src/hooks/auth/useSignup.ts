import { useMutation } from "@tanstack/react-query";
import type { TRole, TSignUpFormValues } from "../../types/Auth.types";
import { register } from "../../services/authServices";

export const useSignup = (role:TRole,onSuccess:()=>void) => {
    return useMutation({
        mutationFn:(values:TSignUpFormValues) => register()
    })
}

// need to impoemet hook