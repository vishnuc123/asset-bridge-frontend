import type { TRole } from "../types/Auth.types";

export interface INavbarProps{
    isAuthenticated:boolean,
    // role:TRole
}
export interface ISignupformsProps{
    role:string,
    subtitle:string,
    onSubmit:(data:any) => void
    isLoading:boolean
}