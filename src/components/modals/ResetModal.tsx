import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
  isLoading: boolean;
  email: string;
};

const ResetPasswordComponent: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  email,
  isLoading,
}) => {
  const [password, setPassword] = React.useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">

      <div className="w-full max-w-md bg-white border border-[#D9F99D] rounded-xl p-6 md:p-8 text-[#0F172A] shadow-sm relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-sm"
        >
          ✕
        </button>

        {/* Brand */}
        <h1 className="text-center text-sm tracking-widest text-gray-500 mb-2">
          ASSET BRIDGE
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Reset Password 🔑
        </h2>

        <p className="text-center text-gray-600 text-sm mb-6">
          Enter your new password below
        </p>

        {/* Input */}
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 bg-[#F9FAFB] border border-gray-300 rounded-lg text-sm outline-none focus:border-[#A3E635]"
        />

        {/* Submit */}
        <button
          onClick={() => onSubmit(email, password)}
          disabled={isLoading}
          className={`w-full py-2 rounded-lg text-sm font-medium transition ${isLoading
              ? "bg-gray-300 cursor-not-allowed text-gray-500"
              : "bg-[#A3E635] text-[#0F172A] hover:bg-[#84CC16]"
            }`}
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>

      </div>
    </div>
  );
};

export default ResetPasswordComponent;