import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import { useModalAction } from "./ui/modal/ModalContext";
import { useDispatch } from "react-redux";
import { setIsLogedIn, setUser } from "../stores/Common";

type Props = {
  isLogedIn: boolean;
};

const LogInOutBtn: React.FC<Props> = ({ isLogedIn }: Props) => {
  const { openModal } = useModalAction();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogInOut = useCallback(() => {
    if (isLogedIn) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      dispatch(setIsLogedIn(false));
      dispatch(setUser(""));
    } else {
      openModal("LOGIN");
    }
  }, [dispatch, isLogedIn, openModal]);

  return (
    <Button
      onClick={handleLogInOut}
      variant="contained"
      color="primary"
      className="mr-3"
      data-testid="loginout-btn"
    >
      {isLogedIn ? "Log out" : "Log in"}
    </Button>
  );
};

export default memo(LogInOutBtn);
