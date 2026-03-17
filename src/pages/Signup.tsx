export default function Signup() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8 text-white">

        {/* Brand */}
        <h1 className="text-center text-sm tracking-widest text-gray-400 mb-2">
          ASSET BRIDGE
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Create Your Account
        </h2>

        <p className="text-center text-gray-400 text-sm mb-6">
          Start booking premium stays worldwide
        </p>

        {/* Google Auth */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-700 py-2 rounded mb-4 hover:bg-[#1f1f1f] transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Inputs */}
        <input
          type="text"
          placeholder="First Name"
          className="w-full mb-3 p-3 bg-black border border-gray-700 rounded text-sm"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="w-full mb-3 p-3 bg-black border border-gray-700 rounded text-sm"
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-3 p-3 bg-black border border-gray-700 rounded text-sm"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 bg-black border border-gray-700 rounded text-sm"
        />

        {/* Terms */}
        <p className="text-xs text-gray-400 mb-4">
          By signing up, you agree to our{" "}
          <span className="text-white cursor-pointer">Terms</span> &{" "}
          <span className="text-white cursor-pointer">Privacy Policy</span>.
        </p>

        {/* Signup Button */}
        <button className="w-full bg-white text-black py-2 rounded text-sm font-medium">
          Create Account
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <span className="text-white cursor-pointer">Login</span>
        </p>

      </div>
    </div>
  );
}