import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { uploadToS3 } from "../../utils/s3Upload"
import { kycUpload, submitKyc } from "../../services/kyc/KycServices"
import type { ICustomError } from "../../types/Custom.types"
import { url } from "zod"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

export const useKycUpload = () => {
    const auth = useSelector((s:RootState) => s.auth.user)
    return useMutation({
        mutationFn: async (values: any) => {

            const { profileImage, aadhaar, selfieVideo } = values
            console.log("values", values);


            const signedData = await kycUpload(auth?.userId as string,values)
            console.log("signed data", signedData);
            const urls = signedData.data

            await Promise.all(
                urls.map((item: any) => {
                    let file: File

                    if (item.type === "profile") file = profileImage
                    else if (item.type === "aadhaar") file = aadhaar
                    else file = selfieVideo

                    console.log("item.url",item.url.url)
                    return uploadToS3(item.url.url, file)
                        .then((res) => {
                            console.log("SUCCESS:", item.type, res);
                            return res;
                        })
                        .catch((err) => {
                            console.error("FAILED:", item.type, err);
                            throw err;
                        });
                })
            )

            const payload: any = {}

            urls.forEach((item: any) => {
                if (item.type === "profile") payload.profileImage = item.url.key
                if (item.type === "aadhaar") payload.aadhaar = item.url.key
                if (item.type === "selfie") payload.selfieVideo = item.url.key
            })
            console.log("payload",payload)

            return await submitKyc(auth?.userId as string,payload)
        },

        onSuccess: () => {
            toast.success("KYC uploaded successfully")
        },

        onError: (err: ICustomError) => {
            toast.error(err?.response.data.message || "Upload failed")
        }
    })
}