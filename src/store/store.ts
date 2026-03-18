import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/Auth.slice"

export const store = configureStore({
    reducer:{
        auth:authReducer,
    }
})