import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border border-[#D9F99D] rounded-xl p-6 md:p-8 text-[#0F172A] shadow-sm">

        {/* Brand */}
        <h1 className="text-center text-sm tracking-widest text-gray-500 mb-2">
          ASSET BRIDGE
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-600 text-sm mb-6">
          Sign in to book premium stays & manage your trips
        </p>

        {/* Google Auth */}
        <button className="w-full flex items-center justify-center gap-3 border border-[#D9F99D] py-2 rounded-lg mb-4 hover:bg-[#F0FFF4] transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Inputs */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 bg-[#F9FAFB] border border-gray-300 rounded-lg text-sm outline-none focus:border-[#A3E635]"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mb-2 p-3 bg-[#F9FAFB] border border-gray-300 rounded-lg text-sm outline-none focus:border-[#A3E635]"
        />

        {/* Forgot */}
        <div className="text-right text-xs text-gray-500 mb-4 cursor-pointer hover:text-[#0F172A]">
          Forgot password?
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#A3E635] text-[#0F172A] py-2 rounded-lg text-sm font-medium hover:bg-[#84CC16] transition">
          Login & Explore Stays
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          New to Asset Bridge?{" "}
          <span onClick={() => navigate("/user/signup")} className="text-[#0F172A] font-medium cursor-pointer hover:underline">
            Create an account
          </span>
        </p>

      </div>
    </div>
  );
}