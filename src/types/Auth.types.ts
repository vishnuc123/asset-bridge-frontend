export type TRole = "user"|"admin"|"property_owner"|"investor"


export type TSignupProps = {
    role:string,
    subtitle:string,
    onSubmit:(data:any) => void,
    isLoading:boolean,
}