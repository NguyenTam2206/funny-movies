import { TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useModalAction } from "~/components/ui/modal/ModalContext";
import { emailRegex } from "../config/constants";
import { LOG_IN, REGISTER } from "../lib/network/rest/auth";
import { setIsLogedIn, setUser } from "../stores/Common";
import ModalContent from "./ui/modal/ModalContent";

const RegisterView: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { closeModal } = useModalAction();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [bluredEmail, setBluredEmail] = useState(false);
  const [bluredPassword, setBluredPassword] = useState(false);
  const [bluredRepassword, setBluredRepassword] = useState(false);

  const handleAccept = useCallback(() => {
    setLoading(true);
    const param = {
      username: email,
      password: password,
    };
    try {
      REGISTER(param)
        .then((data) => {
          if (!data.code) {
            toast.error(data.msg);
          }
          return data;
        })
        .then((data) => {
          if (data.code) {
            LOG_IN(param).then((data) => {
              if (data.code) {
                localStorage.setItem("token", data.data.accessToken);
                localStorage.setItem("user", email);
                dispatch(setIsLogedIn(true));
                dispatch(setUser(email));
                closeModal();
                toast.success("Account successfully created");
              } else {
                toast.error(data.msg);
              }
            });
          }
        })
        .then(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, [closeModal, dispatch, email, password]);

  const handleBlur = useCallback((option: number) => {
    if (option === 1) setBluredEmail(true);
    if (option === 2) setBluredPassword(true);
    if (option === 3) setBluredRepassword(true);
  }, []);

  return (
    <ModalContent
      onAccept={handleAccept}
      onClose={closeModal}
      title="Register new account"
      acceptBtn="Register"
      cancelBtn="Cancel"
      loading={loading}
    >
      <div className="text-xs mb-2" data-testid="register-view">
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

        <TextField
          className="my-2"
          type="password"
          name="repassword"
          label="Re-Password"
          placeholder="Re-enter your password"
          value={repassword}
          error={bluredRepassword && (!repassword || repassword !== password)}
          fullWidth
          helperText={
            bluredRepassword &&
            (!repassword || repassword !== password) &&
            "Password and Re-password need to be same"
          }
          onBlur={() => handleBlur(3)}
          onChange={(e) => setRepassword(e.target.value)}
        />
      </div>
    </ModalContent>
  );
};

export default RegisterView;
