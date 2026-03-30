import { createSlice } from "@reduxjs/toolkit"
import type { AuthState } from "../../interfaces/auth.interfaces";




const initialState: AuthState = {
    user: null,
    activeRole: null,
    isAuthenticated: false,
    kycStatus:"pending",
    isLoading: true
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = action.payload.data
            // console.log("hello",action.payload.data.roles)
            state.user = action.payload.data
            state.isAuthenticated = true;
            state.isLoading = false
            if (user.roles.length === 1) {
                state.activeRole = user.roles[0]
            } else {
                state.activeRole = null
            }
        },

        setKycStatus:(state,action) => {
            state.kycStatus = action.payload
        },
        setActiveRole: (state, action) => {
            console.log("setactiverolepayload", action.payload)
            state.activeRole = action.payload;
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        logout: (state) => {
            state.user = null
            state.isAuthenticated = false
            state.activeRole = null,
            state.isLoading = false
        }
    }
})


export const { loginUser, logout, setLoading, setActiveRole,setKycStatus } = authSlice.actions
export default authSlice.reducer;