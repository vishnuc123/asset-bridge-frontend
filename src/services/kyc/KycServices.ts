import type { TKycUserData } from "../../types/Auth.types";
import { axiosInstance } from "../axiosInstance";

export const kycUpload = async (userId:string,data:any) => {
    console.log("data",data);
    
    const files = [
        { type: "profile", fileType: data.profileImage?.type, fileName: data.profileImage.name },
        { type: "aadhaar", fileType: data.aadhaar.type, fileName: data.aadhaar.name },
        { type: "selfie", fileType: data.selfieVideo.type, fileName: data.selfieVideo.name }
    ]

    const payload = {userId,files}
    const res = await axiosInstance.post("/api/kyc/upload-url", payload)
    return res.data
}

export const submitKyc = async (userId:string,payload: any) => {
    const data = {userId,payload}
    const res = await axiosInstance.post("/api/kyc/submit", data, {
        
    })
    return res.data
}