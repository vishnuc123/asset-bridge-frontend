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
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  roles: TRole[]
  status:"active"|"pending"|"banned";
  kycStatus: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt:Date
}


export interface AuthState {
  user: IUser | null;
  activeRole:TRole|null
  isAuthenticated: boolean;
  isLoading:boolean
}

export interface IGoogleProps{
    role:TRole
}