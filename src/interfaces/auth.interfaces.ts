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


export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: TRole
  kycStatus: string;
  emailVerified: boolean;
  phoneVerified: boolean;
}


export interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading:boolean
}

export interface IGoogleProps{
    role:Exclude<TRole,"Admin">
}