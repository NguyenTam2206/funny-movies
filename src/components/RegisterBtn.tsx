import { Button } from "@mui/material";
import { memo } from "react";
import { useModalAction } from "./ui/modal/ModalContext";

const RegisterBtn: React.FC = () => {
  const { openModal } = useModalAction();

  return (
    <Button
      onClick={() => {
        openModal("REGISTER");
      }}
      variant="contained"
      color="primary"
    >
      Register
    </Button>
  );
};

export default memo(RegisterBtn);
