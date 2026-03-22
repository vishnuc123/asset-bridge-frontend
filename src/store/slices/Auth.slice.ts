import { createSlice } from "@reduxjs/toolkit"
import type { AuthState } from "../../interfaces/auth.interfaces";




const initialState:AuthState = {
    user:null,
    isAuthenticated:false,
    isLoading:true
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginUser:(state,action) => {
            state.user = action.payload.data
            state.isAuthenticated = true;
            state.isLoading = false
        },
        //  setUser: (state, action) => {
        //     state.user = action.payload.user;
        //     state.isAuthenticated = true;
        // },

        setLoading: (state, action) => { 
            state.isLoading = action.payload;
        },
        logout:(state) => {
            state.user = null
            state.isAuthenticated = false
            state.isLoading = false
        }
    }
})


export const {loginUser,logout,setLoading} = authSlice.actions
export default authSlice.reducer;