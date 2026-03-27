import { useMutation } from "@tanstack/react-query"
import type { TloginFormData, TRole } from "../../types/Auth.types"
import { Login } from "../../services/authServices"
import type { ICustomError } from "../../types/Custom.types"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store/store"
import { loginUser, setActiveRole } from "../../store/slices/Auth.slice"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export const useLogin = (role: TRole) => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    return useMutation({
        mutationFn: (values: TloginFormData) => Login(values, role),
        onSuccess: (res) => {
            if (res.success) {
                dispatch(loginUser(res))
                // console.log("success", res.data)

                toast.success("Login successfull")
                const roles = res.data.roles
                console.log("roles", roles)

                if (roles.length <= 1) {
                    const selectedrole = roles[0].toLowerCase()
                    // console.log("selectedRole", selectedrole);

                    dispatch(setActiveRole(selectedrole))
                    navigate(`/${selectedrole}/Home_page`);
                } else {
                    navigate(`/${roles[0].toLowerCase()}/Home_page`)
                }



            } else {
                console.log("something went wrong")
                toast.error("something went wrong")
            }
        },

        onError: (err: ICustomError) => {
            console.log("err",err);
            
            // toast
            toast.error(err?.message || "something went wrong")

            console.log(err, "while getting loginresult")
        }
    })
}