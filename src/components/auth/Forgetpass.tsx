import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

type Props = {
  onSubmit: (email: string) => void;
  isLoading: boolean;
};

const ForgotPasswordComponent: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const auth = useSelector((s:RootState) => s.auth.user)

  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    if (!email) return;
    onSubmit(email);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Sending..." : "Send OTP"}
      </button>
    </div>
  );
};

export default ForgotPasswordComponent;