import { createSlice } from "@reduxjs/toolkit"
import type { AuthState } from "../../interfaces/auth.interfaces";




const initialState:AuthState = {
    user:null,
    isAuthenticated:false
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginUser:(state,action) => {
            state.user = action.payload.data
            state.isAuthenticated = true;
        },
        logout:(state) => {
            state.user = null
            state.isAuthenticated = false
        }
    }
})


export const {loginUser,logout} = authSlice.actions
export default authSlice.reducer;