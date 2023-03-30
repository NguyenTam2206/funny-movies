import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import RegisterBtn from "./RegisterBtn";
import LogInOutBtn from "./LogInOutBtn";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

function ResponsiveAppBar() {
  const { isLogedIn } = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("user") || "");
  }, []);

  const router = useRouter();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            className="cursor-pointer flex items-center"
            onClick={() => router.push("/")}
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Funny Movies
            </Typography>
          </div>
          <div
            className="cursor-pointer flex items-center"
            onClick={() => router.push("/")}
          >
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              Funny Movies
            </Typography>
          </div>
          <div className="ml-auto flex items-center">
            {!isLogedIn && <RegisterBtn />}
            {isLogedIn && (
              <>
                {user && (
                  <div className="mr-3 hidden md:block">
                    Welcome, {JSON.parse(user).email}
                  </div>
                )}
                <Button
                  variant="contained"
                  color="secondary"
                  className="mr-3"
                  onClick={() => router.push("/share")}
                >
                  Share a movie
                </Button>
              </>
            )}
            <LogInOutBtn isLogedIn={isLogedIn} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
