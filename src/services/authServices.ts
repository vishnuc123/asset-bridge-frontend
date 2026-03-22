import { data } from "react-router-dom";
import { Auth_Apis } from "../constants/apis";
import type { TloginFormData, TotpFormValues, TSignUpFormValues } from "../types/Auth.types";
import { axiosInstance } from "./axiosInstance";


const ENDPOINTS = {
    user: '/user',
    property_owner: '/property_owner',
    admin: '/admin',
    investor: '/investor',
}

const getEndpoint = (role: string): string => {
    const lowerRole = role.toLowerCase() as keyof typeof ENDPOINTS;
    return ENDPOINTS[lowerRole] || "/user";
};
export const register = async (data: TSignUpFormValues, role: string) => {
    const endpoint = getEndpoint(role)
    console.log(endpoint)
    const res = await axiosInstance.post(`/api${endpoint}${Auth_Apis.signup}`, data)
    return res.data
}
export const verifyOtp = async (data: TotpFormValues, role: string) => {
    const endpoint = getEndpoint(role)
    console.log(endpoint)
    const res = await axiosInstance.post(`/api${endpoint}${Auth_Apis.verifyOtp}`, data)
    return res.data
}
export const Login = async (data: TloginFormData, role: string) => {
    const endpoint = getEndpoint(role)
    console.log(endpoint)
    const res = await axiosInstance.post(`/api${endpoint}${Auth_Apis.login}`, data)
    return res.data
}
