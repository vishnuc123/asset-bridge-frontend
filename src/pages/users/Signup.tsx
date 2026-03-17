import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 md:p-8 text-foreground shadow-sm">

        {/* Brand */}
        <h1 className="text-center text-sm tracking-widest text-muted-foreground mb-2">
          ASSET BRIDGE
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Create Account ✨
        </h2>

        <p className="text-center text-muted-foreground text-sm mb-6">
          Join Asset Bridge to book stays & explore investments
        </p>

        {/* Google Auth */}
        <button className="w-full flex items-center justify-center gap-3 border border-border py-2 rounded-lg mb-4 hover:bg-card transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Full name"
          className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"
        />

        <input
          type="password"
          placeholder="Create password"
          className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"
        />

        {/* Terms */}
        <div className="flex items-start gap-2 mb-4 text-xs text-muted-foreground">
          <input type="checkbox" className="mt-1 accent-primary" />
          <p>
            I agree to the{" "}
            <span className="text-foreground font-medium cursor-pointer hover:underline">
              Terms & Conditions
            </span>
          </p>
        </div>

        {/* Signup Button */}
        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
          Create Account
        </button>

        {/* Footer */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          Already have an account?{" "}
          <span onClick={() => navigate("/user/login")} className="text-foreground font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div>
  );
}