import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email:string,password: string) => void;
  isLoading: boolean;
  email:string
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
    <div className="modal">
      <h3>Reset Password</h3>

      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => onSubmit(email,password)} disabled={isLoading}>
        {isLoading ? "Resetting..." : "Reset Password"}
      </button>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ResetPasswordComponent;