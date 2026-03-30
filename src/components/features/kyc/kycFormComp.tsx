import React from "react";
import {
    UploadCloud,
    ShieldCheck,
    UserCheck,
    FileText,
    Video,
    Lock,
    Info
} from "lucide-react";
import type { IKycFormProps } from "../../../interfaces/auth.interfaces";

const KycForm: React.FC<IKycFormProps> = ({
    profileImage,
    idProof,
    selfieVideo,
    setProfileImage,
    setIdProof,
    setSelfieVideo,
    onSubmit,
    loading,
}) => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">

                {/* LEFT SIDE */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">
                        Verify Your Identity
                    </h1>

                    <p className="text-muted-foreground">
                        Complete your KYC to unlock full access to AssetBridge features.
                    </p>

                    {/* Steps */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <UploadCloud className="text-primary" />
                            <p className="text-sm">Upload required documents</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <UserCheck className="text-primary" />
                            <p className="text-sm">Admin verifies your details</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-primary" />
                            <p className="text-sm">Access unlocked after approval</p>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="bg-card border border-border rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                            <Lock size={18} />
                            <span className="font-medium">Your data is secure</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            All uploads are encrypted and used only for verification.
                        </p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                            <Lock size={18} />
                            <span className="font-medium">Verification criteria</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            please follow the instruction or else verification rejects
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-card border border-border rounded-2xl shadow-lg p-6 space-y-5">

                    <h2 className="text-xl font-semibold text-center">
                        KYC Submission
                    </h2>

                    <div className="space-y-4">

                        {/* PROFILE IMAGE */}
                        <div className="border border-border rounded-lg p-4 space-y-2 hover:border-primary transition">

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 font-medium text-sm">
                                    <UserCheck size={16} className="text-primary" />
                                    Profile Image
                                </div>

                                {profileImage && (
                                    <button
                                        onClick={() => setProfileImage(null)}
                                        className="text-xs text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                <Info size={14} />
                                <p>
                                    Upload a clear front-facing photo. Face must be visible.
                                    No filters, no sunglasses.
                                </p>
                            </div>

                            {!profileImage ? (
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full text-sm file:bg-primary file:text-primary-foreground file:px-3 file:py-1 file:rounded-md"
                                    onChange={(e) =>
                                        setProfileImage(e.target.files?.[0] || null)
                                    }
                                />
                            ) : (
                                <div className="text-xs bg-background border rounded p-2 text-muted-foreground">
                                    {profileImage.name}
                                </div>
                            )}
                        </div>

                        {/* ID PROOF */}
                        <div className="border border-border rounded-lg p-4 space-y-2 hover:border-primary transition">

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 font-medium text-sm">
                                    <FileText size={16} className="text-primary" />
                                    Aadhar Proof
                                </div>

                                {idProof && (
                                    <button
                                        onClick={() => setIdProof(null)}
                                        className="text-xs text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                <Info size={14} />
                                <p>
                                    Upload government-issued ID - Aadhar
                                    Ensure all text is readable.
                                </p>
                            </div>

                            {!idProof ? (
                                <input
                                    type="file"
                                    accept="image/*,.pdf"
                                    className="w-full text-sm file:bg-primary file:text-primary-foreground file:px-3 file:py-1 file:rounded-md"
                                    onChange={(e) =>
                                        setIdProof(e.target.files?.[0] || null)
                                    }
                                />
                            ) : (
                                <div className="text-xs bg-background border rounded p-2 text-muted-foreground">
                                    {idProof.name}
                                </div>
                            )}
                        </div>

                        {/* SELFIE VIDEO */}
                        <div className="border border-border rounded-lg p-4 space-y-2 hover:border-primary transition">

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 font-medium text-sm">
                                    <Video size={16} className="text-primary" />
                                    Selfie Video
                                </div>

                                {selfieVideo && (
                                    <button
                                        onClick={() => setSelfieVideo(null)}
                                        className="text-xs text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                <Info size={14} />
                                <p>
                                    Record a short video showing your face clearly.
                                    Avoid low lighting or shaky camera.
                                </p>
                            </div>

                            {!selfieVideo ? (
                                <input
                                    type="file"
                                    accept="video/*"
                                    className="w-full text-sm file:bg-primary file:text-primary-foreground file:px-3 file:py-1 file:rounded-md"
                                    onChange={(e) =>
                                        setSelfieVideo(e.target.files?.[0] || null)
                                    }
                                />
                            ) : (
                                <div className="text-xs bg-background border rounded p-2 text-muted-foreground">
                                    {selfieVideo.name}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* SUBMIT */}
                    <button
                        onClick={onSubmit}
                        disabled={loading}
                        className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit for Verification"}
                    </button>

                    {/* FOOTER */}
                    <p className="text-xs text-center text-muted-foreground">
                        Verification usually takes 24–48 hours. You’ll be notified once approved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KycForm;