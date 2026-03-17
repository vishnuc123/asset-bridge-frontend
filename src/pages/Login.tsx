export default function Login() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8 text-white">

        {/* Brand */}
        <h1 className="text-center text-sm tracking-widest text-gray-400 mb-2">
          ASSET BRIDGE
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-400 text-sm mb-6">
          Book premium stays across top destinations
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
          type="email"
          placeholder="Email address"
          className="w-full mb-4 p-3 bg-black border border-gray-700 rounded text-sm outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-3 bg-black border border-gray-700 rounded text-sm outline-none"
        />

        {/* Forgot */}
        <div className="text-right text-xs text-gray-400 mb-4 cursor-pointer hover:text-white">
          Forgot password?
        </div>

        {/* Login Button */}
        <button className="w-full bg-white text-black py-2 rounded text-sm font-medium">
          Login
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <span className="text-white cursor-pointer">Sign up</span>
        </p>

      </div>
    </div>
  );
}