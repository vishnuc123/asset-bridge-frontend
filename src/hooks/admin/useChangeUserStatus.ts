import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import type { TUpdateUserStatus } from "../../types/Auth.types"
import { updateUserStatus } from "../../services/adminServices"
import toast from "react-hot-toast"
import type { ICustomError } from "../../types/Custom.types"

export const useChangeUserStatus = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (values: TUpdateUserStatus) => updateUserStatus(values),
        onSuccess: (res) => {
            if (res.success) {
                toast.success(res.data.message || "user status changed")
                queryClient.invalidateQueries({ queryKey: ["users"] });
            }
        },
        onError: (err: ICustomError) => {
            toast.error(err.response.data.message || "error while updating user status")
        }
    })
}