import React, { useEffect, useRef, useState } from "react";
import type { TOtpVerificationProps } from "../../types/Auth.types";

const ResetPassModal: React.FC<TOtpVerificationProps> = ({
  isOpen,
  onClose,
  onSubmit,
  onResend,
  length = 6,
  timeleft, 
  isOtploading = false,
}) => {

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  const [otpError, setOtpError] = useState<string | null>(null);

  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputsRef.current[index] = el;
  };

  // ✅ Reset OTP when modal opens
  useEffect(() => {
    if (!isOpen) return;

    setOtpValues(Array(6).fill(''));
    setOtpError(null);
  }, [isOpen]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otpValues];
    updatedOtp[index] = value;
    setOtpValues(updatedOtp);

    const nextInput = inputsRef.current[index + 1];
    if (value && nextInput) nextInput.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (otpValues[index] === '') {
        const prevInput = inputsRef.current[index - 1];
        if (prevInput) prevInput.focus();
      } else {
        const updatedOtp = [...otpValues];
        updatedOtp[index] = '';
        setOtpValues(updatedOtp);
      }
    }
  };

  const validateOtp = () => {
    const otp = otpValues.join('');
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      setOtpError('OTP must be exactly 6 digits.');
      return false;
    }
    setOtpError(null);
    return true;
  };

  const handleSubmit = () => {
    const otp = otpValues.join('');
    if (validateOtp()) {
      onSubmit(otp);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

      <div className="w-full max-w-sm bg-card border border-border rounded-xl p-6 text-center shadow-md">

        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Verify OTP</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-lg"
          >
            ×
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Enter the {length}-digit code sent to your email
        </p>

        {/* ✅ TIMER UI (FIXED) */}
        <div className="text-sm text-muted-foreground mb-4">
          {timeleft > 0 ? (
            <span>
              Resend OTP in{" "}
              <span className="font-semibold text-foreground">
                {timeleft}s
              </span>
            </span>
          ) : (
            <button
              onClick={onResend}
              className="text-primary font-medium hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-between gap-2 mb-5">
          {otpValues.map((digit, index) => (
            <input
              key={index}
              ref={setInputRef(index)}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-12 text-center text-lg font-semibold 
                         bg-background border border-border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ))}
        </div>

        {/* Error */}
        {otpError && (
          <p className="text-red-500 text-sm mb-2">{otpError}</p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={isOtploading || otpValues.join("").length !== length }
          className="w-full bg-primary text-primary-foreground py-2 rounded-lg 
                     disabled:opacity-50"
        >
          {isOtploading ? "Verifying..." : "Verify OTP"}
        </button>

      </div>
    </div>
  );
};

export default ResetPassModal;