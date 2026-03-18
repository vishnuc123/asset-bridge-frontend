export type TRole = "user"|"admin"|"property_owner"|"investor"


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
    role: string;
    subscriptionType: string;
}