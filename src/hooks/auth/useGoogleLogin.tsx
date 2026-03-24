import { useMutation } from "@tanstack/react-query"
import type { TGoogleLoginValues, TRole } from "../../types/Auth.types"
import { GoogleLogin } from "../../services/authServices"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { loginUser, setActiveRole } from "../../store/slices/Auth.slice"
import { useNavigate } from "react-router-dom"
import type { ICustomError } from "../../types/Custom.types"

export const useGoogleLogin = (role: TRole) => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const currentRole = useSelector((s: RootState) => s.auth.activeRole)
    return useMutation({
        mutationFn: (values: TGoogleLoginValues) => GoogleLogin(values, role),
        onSuccess: (res) => {
            console.log("google login result", res)
            if (res.success) {
                console.log(res)

                dispatch(loginUser(res))
                console.log("hello", res.data.roles);

                const roles = res.data.roles;
                console.log("uglogn", roles);


                if (roles.length === 1) {
                    const selectedRole = roles[0].toLowerCase();
                    console.log("selectrole", selectedRole);


                    dispatch(setActiveRole(selectedRole));

                    navigate(`/${selectedRole}/Home_page`);
                } else {
                    navigate(`/${roles[0].toLowerCase()}/Home_page`);
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