import { useState } from "react";
import KycForm from "../../components/features/kyc/kycFormComp";
import { useMutation } from "@tanstack/react-query";
import { useKycUpload } from "../../hooks/kyc/useKycUpload";
import toast from "react-hot-toast";
import { file } from "zod";
import OwnerNavbar from "../../components/navbars/OwnerNavbar";

const KycPage = () => {
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [idProof, setIdProof] = useState<File | null>(null);
    const [selfieVideo, setSelfieVideo] = useState<File | null>(null);
    const { mutate: kycUpload } = useKycUpload()

    const handleSubmit = async () => {
        console.log(profileImage, idProof, selfieVideo);

        if (!profileImage || !selfieVideo || !idProof) {
            toast.error("please submit all then click submit")
            return
        }
        kycUpload({
            profileImage: profileImage as File,
            aadhaar: idProof as File,
            selfieVideo: selfieVideo as File,
        })
    };

    return (
        <div>
            <OwnerNavbar isAuthenticated={true} />
            <KycForm
                profileImage={profileImage}
                idProof={idProof}
                selfieVideo={selfieVideo}
                setProfileImage={setProfileImage}
                setIdProof={setIdProof}
                setSelfieVideo={setSelfieVideo}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default KycPage