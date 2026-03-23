import { useMutation, useQuery } from "@tanstack/react-query"
import type { TGetAllUsersParams, TSortOption } from "../../types/Custom.types"
import { getAllUsers } from "../../services/adminServices"

export const useGetAllUsers = (page: number, limit: number, role: string, search?: string, sortOption?: TSortOption) => {
    return useQuery({
        queryKey: ["users", { page, limit, search,sortOption }],
        queryFn: async () => getAllUsers(page, limit, role, search, sortOption),
        staleTime:5*60*1000,
        placeholderData:(prev) => prev
    })
}