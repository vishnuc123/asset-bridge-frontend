import React, { useState } from "react";

type OtpVerificationProps = {
  onSubmit: (otp: string) => void;
  isLoading?: boolean;
  length?: number;
};

const OtpModal: React.FC<OtpVerificationProps> = ({
  onSubmit,
  isLoading = false,
  length = 6,
}) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    if (otp.length !== length) return;
    onSubmit(otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm bg-card border border-border rounded-xl p-6 text-center shadow-sm">

        <h2 className="text-xl font-semibold mb-2">Verify OTP</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Enter the {length}-digit code sent to your email
        </p>

        {/* Simple OTP Input */}
        <input
          type="text"
          value={otp}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ""); // only numbers
            setOtp(value);
          }}
          maxLength={length}
          placeholder="Enter OTP"
          className="w-full text-center tracking-widest text-lg p-3 border border-border rounded-lg outline-none focus:border-primary mb-4"
        />

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={isLoading || otp.length !== length}
          className="w-full bg-primary text-primary-foreground py-2 rounded-lg"
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>

      </div>
    </div>
  );
};

export default OtpModal;