// import axios, { AxiosError, type AxiosResponse } from "axios";
// import { env } from "../config/env";
// import { store } from "../store/store";
// import { logout } from "../store/slices/Auth.slice";
// import type { TRole } from "../types/Auth.types";

// export const axiosInstance = axios.create({
//     baseURL: env.SERVER_URL,
//     withCredentials: true,
//     headers: {
//         "Content-Type": "application/json"
//     }
// })

// axiosInstance.interceptors.request.use((config) => {
//     return config;
// });

// axiosInstance.interceptors.response.use(
//     (response: AxiosResponse) => {
//         return response
//     },
//     (error: AxiosError<{ role: TRole, message: string, statusCode: number }>) => {
//         const status = error.response?.status;
//         // const message = error.response?.status || "axios error check axios"


//         if (status === 401 || status === 403) {
//             store.dispatch(logout())
//         }
//         return Promise.reject(error)
//     }
// )
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

// export const axiosInstance = axios.create({
//   baseURL: env.SERVER_URL,
//   withCredentials: true,
// });

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,

  async (error: AxiosError) => {
    const originalRequest: any = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    if (originalRequest.url?.includes("/refresh")) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log("calling refresh");

        await axiosInstance.post("/api/user/refresh");

        return axiosInstance(originalRequest);

      } catch (err) {
        console.log("refresh failed");

        store.dispatch(logout());
        window.location.href = "/";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);