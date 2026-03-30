export type TRole = "User" | "Admin" | "Owner" | "Investor"


export type TSignupProps = {
    role: string,
    subtitle: string,
    onSubmit: (data: any) => void,
    isLoading: boolean,
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
    otp: string,
    userId: string,
    purpose: "signup" | "reset"
}

export type TOtpVerificationProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (otp: string) => void;
    length?: number;
    onResend: () => void
    userId: string
    timeleft: number
    isOtploading?: boolean;
};




export type TloginFormProps = {
    role: TRole,
    subtitle: string,
    btnText: string,
    onSubmit: (data: any) => void,
    isLoading: boolean
}

export type TloginFormData = {
    email: string,
    password: string
}

export type TloginUserResponse = {
    data: {
        userid: string,
        roles: TRole[],
        activeRole?: TRole
        email: string
    }
}

export type TGoogleLoginValues = {
    credential: string,
    role: Exclude<TRole, "Admin">
}


export type TUserData = {
    userId: string,
    firstname: string,
    lastname: string,
    email: string,
    roles: TRole[],
    isBlocked: boolean,
    status: string,
    createdAt: Date

}

export type TForgetPasswordData = {
    email: string
}

export type TResetPassData = {
    email: string,
    password: string
}
export type TResendOtp = {
    userId: string
}


export type TUpdateUserStatus = {
    userId: string,
    isBlocked: boolean
}

export type TKycFile = {
    file: File;
    fileName: string;
    fileUrl: string;
    status: "pending" | "approved" | "rejected";
};

export type TKycUserData = {
    profileImage: TKycFile;
    selfieVideo: TKycFile;
    aadhaar: TKycFile;
};
export type TKycFileMeta = {
  type: "profile" | "aadhaar" | "selfie"
  fileName: string
  fileType: string
}
export type TSignedUrlItem = {
    type: "profile" | "aadhaar" | "selfie"
    url: {
        url: string   // signed URL (PUT)
        key: string   // S3 file path
    }
}