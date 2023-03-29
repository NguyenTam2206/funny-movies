import { Button } from "@mui/material";
import { memo } from "react";

const LogInOutBtn: React.FC = () => {
  return (
    <Button variant="contained" color="primary" className="mr-3">
      Log in
    </Button>
  );
};

export default memo(LogInOutBtn);
