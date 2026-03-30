import axios from "axios"

export const uploadToS3 = async (
    signedUrl: string,
    file: File
) => {
    const res = await axios.put(signedUrl, file, {
        headers: {
            "Content-Type":file.type
        },
        onUploadProgress: (progressEvent) => {
            const percent = Math.round(
                (progressEvent.loaded * 100) / (progressEvent.total || 1)
            )
            console.log(percent)
        }
    })
}