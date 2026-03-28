import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

type Props = {
  onSubmit: (email: string) => void;
  isLoading: boolean;
};

const ForgotPasswordComponent: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const auth = useSelector((s: RootState) => s.auth.user);

  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    if (!email) return;
    onSubmit(email);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border border-[#D9F99D] rounded-xl p-6 md:p-8 text-[#0F172A] shadow-sm">

        {/* Brand */}
        <h1 className="text-center text-sm tracking-widest text-gray-500 mb-2">
          ASSET BRIDGE
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Forgot Password 🔐
        </h2>

        <p className="text-center text-gray-600 text-sm mb-6">
          Enter your registered email to receive an OTP
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 bg-[#F9FAFB] border border-gray-300 rounded-lg text-sm outline-none focus:border-[#A3E635]"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full py-2 rounded-lg text-sm font-medium transition ${isLoading
              ? "bg-gray-300 cursor-not-allowed text-gray-500"
              : "bg-[#A3E635] text-[#0F172A] hover:bg-[#84CC16]"
            }`}
        >
          {isLoading ? "Sending..." : "Send OTP"}
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Remember your password?{" "}
          <span
            onClick={() => window.history.back()}
            className="text-[#0F172A] font-medium cursor-pointer hover:underline"
          >
            Go back to login
          </span>
        </p>

      </div>
    </div>
  );
};

export default ForgotPasswordComponent;