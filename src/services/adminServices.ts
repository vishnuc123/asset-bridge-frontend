import { Roles } from "../constants/Roles";
import type { IUser } from "../interfaces/auth.interfaces";
import type { TUpdateUserStatus } from "../types/Auth.types";
import type { TGetAllUsersParams, TGetUsersData, TSortOption } from "../types/Custom.types";
import { axiosInstance } from "./axiosInstance";

export const getAllUsers = async (page: number, limit: number, role: string, search?: string, sortOption?: TSortOption): Promise<TGetUsersData<IUser[]>> => {
    const params: TGetAllUsersParams = { page, limit, role, search }
    if (sortOption) {
        const [field, order] = Object.entries(sortOption)[0];
        params.sortField = field;
        params.sortOrder = order as "ascending" | "descending"
    }

    const res = await axiosInstance.get(`/api/${Roles.admin_role}/get_all_users`, { params })
    return res.data
}

export const updateUserStatus = async (data:TUpdateUserStatus) => {
    const res = await axiosInstance.post(`/api/${Roles.admin_role}/changeUserStatus`,{data})
    return res.data
}