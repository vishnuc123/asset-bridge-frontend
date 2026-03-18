import { useNavigate } from "react-router-dom";
import type { TSignupProps } from "../../types/Auth.types";
import { useForm } from "react-hook-form";
import { signupValidation } from "../../validations/auth/SignupValidations";
import type { SignupFormData } from "../../validations/auth/Auth.schema";
import type React from "react";
import type { ISignupformsProps } from "../../interfaces/auth.interfaces";

const SignupComp: React.FC<ISignupformsProps> = ({ role = "User", subtitle, onSubmit, isLoading = false }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<SignupFormData>();

    // const onSubmit = async (data) => {

    // }




    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 md:p-8 text-foreground shadow-sm">

                {/* Brand */}
                <h1 className="text-center text-sm tracking-widest text-muted-foreground mb-2">
                    ASSET BRIDGE
                </h1>

                {/* ✅ Role */}
                <p className="text-center text-xs text-primary mb-2 uppercase">
                    {role}
                </p>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
                    Create Account ✨
                </h2>

                <p className="text-center text-muted-foreground text-sm mb-6">
                    {/* Join Asset Bridge to book stays & explore investments */}
                    {subtitle}
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
                    {...register("firstname", signupValidation.name)}
                    type="text"
                    placeholder="Full name"
                    className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"

                />
                {errors.firstname && <p className="text-red-500 text-xs">{errors.firstname.message}</p>}
                <input
                    {...register("lastname", signupValidation.name)}
                    type="text"
                    placeholder="Full name"
                    className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"

                />
                {errors.lastname && <p className="text-red-500 text-xs">{errors.lastname.message}</p>}

                <input
                    {...register("email", signupValidation.email)}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                <input
                    {...register("password", signupValidation.password)}
                    type="password"
                    placeholder="Create password"
                    className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

                <input
                    {...register("confirmPassword", { required: "please confirm your password" })}
                    type="password"
                    placeholder="Confirm password"
                    className="w-full mb-4 p-3 bg-background border border-border rounded-lg text-sm outline-none focus:border-primary"
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}

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

                {/* ✅ Signup Button with loading */}
                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isLoading || isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                    {isLoading || isSubmitting ? "Creating..." : "Create Account"}
                </button>

                {/* Footer */}
                <p className="text-xs text-muted-foreground text-center mt-6">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/user/login")}
                        className="text-foreground font-medium cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>

            </div>
        </div>
    );
}

export default SignupComp