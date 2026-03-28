import { data } from "react-router-dom";
import { Auth_Apis } from "../constants/apis";
import type { TForgetPasswordData, TGoogleLoginValues, TloginFormData, TotpFormValues, TResetPassData, TRole, TSignUpFormValues } from "../types/Auth.types";
import { axiosInstance } from "./axiosInstance";


const ENDPOINTS = {
    user: '/user',
    property_owner: '/owner',
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

export const GoogleLogin = async (data: TGoogleLoginValues, role: string) => {
    const endpoint = getEndpoint(role)
    const res = await axiosInstance.post(`/api${endpoint}${Auth_Apis.googleLogin}`, data)
    return res.data
}

export const SetRole = async (role: TRole) => {
    const res = await axiosInstance.post(
        "/api/user/set-role",
        { role },
        {
            withCredentials: true,
        }
    );
    console.log("setroleservice", register)
    return res.data;
};
export const LogoutUser = async (role: TRole) => {
    // const endpoint = getEndpoint(role)
    const res = await axiosInstance.post(`/api/user${Auth_Apis.logout}`)
    return res.data
}

export const ForgetPassword = async (data:TForgetPasswordData) => {
    const res = await axiosInstance.post(`/api/user${Auth_Apis.forgetPassword}`,data)
    return res.data
}

export const ResetPass = async(data:TResetPassData) => {
    const res = await axiosInstance.post(`/api/user${Auth_Apis.resetPassword}`,data)
    return res.data
}