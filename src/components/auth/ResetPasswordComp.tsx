import React from "react";

type Props = {
    userId: string;
    onSubmit: (data: { userId: string; password: string }) => void;
    isLoading: boolean;
};

const ResetPasswordComponent: React.FC<Props> = ({
    userId,
    onSubmit,
    isLoading,
}) => {
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = () => {
        if (!password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        onSubmit({ userId, password });
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Reset Password</h2>

            <input
                type="password"
                placeholder="Enter new password"
                className="w-full border p-2 rounded mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <input
                type="password"
                placeholder="Confirm password"
                className="w-full border p-2 rounded mb-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 rounded"
            >
                {isLoading ? "Resetting..." : "Reset Password"}
            </button>
        </div>
    );
};

export default ResetPasswordComponent;