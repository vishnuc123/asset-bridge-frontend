import type { TRole } from "../types/Auth.types";

export interface INavbarProps {
  isAuthenticated: boolean,
  role: TRole
}
export interface ISignupformsProps {
  role: string,
  subtitle: string,
  onSubmit: (data: any) => void
  isLoading: boolean
}


export interface IUser {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  roles: TRole[]
  status: "active" | "pending" | "banned";
  isBlocked: boolean,
  kycStatus: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: Date
}


export interface AuthState {
  user: IUser | null;
  activeRole: TRole | null
  kycStatus : "pending"|"verified"|"rejected"
  isAuthenticated: boolean;
  isLoading: boolean
}

export interface IGoogleProps {
  role: TRole
}
export interface IForgetPasswordProps {
  role: TRole
  subtitle: string,
  btnText: string,
  onSubmit: (data: any) => void
  isLoading: boolean
}

export interface IKycFormProps {
  profileImage: File | null;
  idProof: File | null;
  selfieVideo: File | null;

  setProfileImage: (file: File | null) => void;
  setIdProof: (file: File | null) => void;
  setSelfieVideo: (file: File | null) => void;

  onSubmit: () => void;
  loading?: boolean;
}
