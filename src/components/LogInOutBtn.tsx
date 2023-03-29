import { Button } from "@mui/material";
import { memo, useCallback } from "react";

const LogInOutBtn: React.FC = () => {
  const isLogedIn = true;

  const handleLogInOut = useCallback(() => {
    if (isLogedIn) {
      console.log("on Log out");
    } else {
      console.log("on log in");
    }
  }, [isLogedIn]);

  return (
    <Button
      onClick={handleLogInOut}
      variant="contained"
      color="primary"
      className="mr-3"
    >
      {isLogedIn ? "Log out" : "Log in"}
    </Button>
  );
};

export default memo(LogInOutBtn);
