import axios, { AxiosError, type AxiosResponse } from "axios";
import { env } from "../config/env";
import { store } from "../store/store";
import { logout } from "../store/slices/Auth.slice";
import type { TRole } from "../types/Auth.types";

export const axiosInstance = axios.create({
    baseURL: env.SERVER_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: AxiosError<{ role: TRole, message: string, statusCode: number }>) => {
        const status = error.response?.status;
        // const message = error.response?.status || "axios error check axios"
        

        if (status === 401 || status === 403) {
            store.dispatch(logout())
        }
        return Promise.reject(error)
    }
)
