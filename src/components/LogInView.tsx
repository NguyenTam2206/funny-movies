import { TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useModalAction } from "~/components/ui/modal/ModalContext";
import { emailRegex } from "../config/constants";
import ModalContent from "./ui/modal/ModalContent";
import { setIsLogedIn } from "~/stores/Common";
import { useDispatch } from "react-redux";

const LogInView: React.FC = () => {
  const loading = false;
  const dispatch = useDispatch();
  const { closeModal } = useModalAction();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [bluredEmail, setBluredEmail] = useState(false);
  const [bluredPassword, setBluredPassword] = useState(false);

  const handleAccept = useCallback(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "nguyenthientam.2206@gmail.com" })
    );
    dispatch(setIsLogedIn(true));
    closeModal();
  }, [closeModal, dispatch]);

  const handleBlur = useCallback((option: number) => {
    if (option === 1) setBluredEmail(true);
    if (option === 2) setBluredPassword(true);
  }, []);

  return (
    <ModalContent
      onAccept={handleAccept}
      onClose={closeModal}
      title="Login your account"
      acceptBtn="Login"
      cancelBtn="Cancel"
      loading={loading}
    >
      <div className="text-xs mb-2" data-testid="login-view">
        <TextField
          className="my-2"
          type="text"
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          fullWidth
          onBlur={() => handleBlur(1)}
          onChange={(e) => setEmail(e.target.value)}
          helperText={
            bluredEmail &&
            !emailRegex.test(email) &&
            "Email format is incorrect"
          }
          error={bluredEmail && !emailRegex.test(email)}
        />
        <TextField
          className="my-2"
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          error={bluredPassword && !password}
          fullWidth
          helperText={bluredPassword && !password && "Password is required"}
          onBlur={() => handleBlur(2)}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </ModalContent>
  );
};

export default LogInView;
