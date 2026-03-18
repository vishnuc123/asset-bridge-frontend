import { Auth_Apis } from "../constants/apis";
import type { TSignUpFormValues } from "../types/Auth.types";
import { axiosInstance } from "./axiosInstance";


enum ENDPOINTS {
    user = '/users',
    vendor = '/vendor',
    admin = '/admin',
}

const getEndpoint = (role: string): string => {
    const lowerRole = role.toLowerCase() as keyof typeof ENDPOINTS;
    return ENDPOINTS[lowerRole] || "/user";
};
export const register = async (data: TSignUpFormValues, role: string) => {
    const endpoint = getEndpoint(role)
    const res = await axiosInstance.post(`${endpoint}${Auth_Apis.signup}`,data)
    return res.data
}