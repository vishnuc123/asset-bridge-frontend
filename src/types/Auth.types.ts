export type TRole = "User"|"Admin"|"Owner"|"Investor"


export type TSignupProps = {
    role:string,
    subtitle:string,
    onSubmit:(data:any) => void,
    isLoading:boolean,
}

export type TSignUpFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    role: TRole;
}

export type TotpFormValues = {
    otp:string,
    userId : string,
    purpose:"signup" | "reset"
}

export type TOtpVerificationProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (otp: string) => void;
  length?: number;
  userId:string
  isOtploading?: boolean;
};




export type TloginFormProps = {
    role:TRole,
    subtitle:string,
    btnText:string,
    onSubmit:(data:any) => void,
    isLoading:boolean
}

export type TloginFormData = {
    email:string,
    password:string
}

export type TloginUserResponse = {
    data:{
        userid:string,
        roles:TRole[],
        activeRole?:TRole
        email:string
    }
}

export type TGoogleLoginValues = {
    credential: string,
    role:Exclude<TRole,"Admin">
}


export type TUserData = {
    userId:string,
    firstname:string,
    lastname:string,
    email:string,
    roles:TRole[],
    status:string,
    createdAt:Date
    
}

export type TForgetPasswordData={
    email:string
}

export type TResetPassData = {
    email:string,
    password:string
}