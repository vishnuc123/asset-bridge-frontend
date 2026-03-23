import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import React from "react";
import { useGoogleLogin } from "../../../hooks/auth/useGoogleLogin";
import type { IGoogleProps } from "../../../interfaces/auth.interfaces";
import { Roles } from "../../../constants/Roles";

export const GoogleLoginButton: React.FC<IGoogleProps> = ({ role }) => {
    if(role === Roles.admin_role)return null
    const { mutate: googleLoginFn } = useGoogleLogin(role)
    const handleSuccess = (credentialRes: CredentialResponse) => {
        if (credentialRes.credential) {
            googleLoginFn({ credential: credentialRes.credential, role });
        } else {
            console.log('No credential found')
        }
    }

    const handleError = () => {
        // showError('Google login failed')
        console.log("google login failed")
        // toast error
    }

    return (
        <div className="w-full flex justify-center mt-4">
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                width={100}
                size="large"
                shape="rectangular"
                text="continue_with"
            />
        </div>
    )
}