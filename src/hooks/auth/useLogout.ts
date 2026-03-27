import { useMutation } from "@tanstack/react-query"
import type { TRole } from "../../types/Auth.types"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { LogoutUser } from "../../services/authServices"
import { useNavigate } from "react-router-dom"
import type { ICustomError } from "../../types/Custom.types"
import { logout } from "../../store/slices/Auth.slice"
import toast from "react-hot-toast"

export const useLogout = (role: TRole) => {
    const disptatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    // const auth = useSelector((s:RootState) => s.auth.activeRole)
    return useMutation({
        mutationFn: () => LogoutUser(role),
        onSuccess: (res) => {
            if (res.success) {
                disptatch(logout())
                // toast
                toast.success("logout succesfull")
                navigate(`/`)
            }
        },
        onError: (err: ICustomError) => {
            console.log("error from uselogout", err)

            toast.error(err?.message || "something went wrong")

            // toast
        }
    })
}