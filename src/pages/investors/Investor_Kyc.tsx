import { useState } from "react";
import KycForm from "../../components/features/kyc/kycFormComp";
import InvestorNavbar from "../../components/navbars/InvestorNavbar";
import { Roles } from "../../constants/Roles";

const KycPage = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [idProof, setIdProof] = useState<File | null>(null);
  const [selfieVideo, setSelfieVideo] = useState<File | null>(null);

  const handleSubmit = async () => {
    console.log(profileImage, idProof, selfieVideo);
    // upload + submit logic here
  };

  return (
    <div>
      <InvestorNavbar role={Roles.investor_role} isAuthenticated={true}/>
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