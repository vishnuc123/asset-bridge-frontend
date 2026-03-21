import { useMutation } from "@tanstack/react-query"
import type { TloginFormData, TRole } from "../../types/Auth.types"
import { Login } from "../../services/authServices"
import type { ICustomError } from "../../types/Custom.types"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store/store"
import { loginUser } from "../../store/slices/Auth.slice"
import { useNavigate } from "react-router-dom"

export const useLogin = (role: TRole) => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    return useMutation({
        mutationFn: (values: TloginFormData) => Login(values, role),
        onSuccess: (res) => {
            if (res.success) {
                dispatch(loginUser(res))
                console.log("success", res.data)
                const role = res?.data?.role
                if(role){
                    navigate(`/${role}/home_page`)
                    console.log("redirected")
                }
            } else {
                console.log("something went wrong")
            }
        },

        onError: (err: ICustomError) => {
            // toast
            console.log(err, "while getting loginresult")
        }
    })
}