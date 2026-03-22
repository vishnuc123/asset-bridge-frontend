import { useMutation } from "@tanstack/react-query"
import type { TGoogleLoginValues, TRole } from "../../types/Auth.types"
import { GoogleLogin } from "../../services/authServices"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store/store"
import { loginUser } from "../../store/slices/Auth.slice"
import { useNavigate } from "react-router-dom"
import type { ICustomError } from "../../types/Custom.types"

export const useGoogleLogin = (role:TRole) => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (values:TGoogleLoginValues) => GoogleLogin(values, role),
        onSuccess: (res) => {
            console.log("google login result",res)
            if (res.success) {
                console.log(res)
                
                dispatch(loginUser(res))
                const role = res?.data?.role
                console.log("role from backend",role);
                
                if (role) {
                    navigate(`/${role}/Home_page`)
                    console.log("redirected")
                }
            } else {
                console.log("something wen wrong")
            }
        },
        onError: (error: ICustomError) => {
            // toast
            console.log("error while login through google", error)
        }
    })
}