import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import RegisterBtn from "./RegisterBtn";
import LogInOutBtn from "./LogInOutBtn";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

function ResponsiveAppBar() {
  const isLogedIn = true;
  const userEmail = "nguyenthientam.2206@gmail.com";

  const router = useRouter();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="cursor-pointer flex" onClick={() => router.push("/")}>
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
          <div className="cursor-pointer flex" onClick={() => router.push("/")}>
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
              }}
            >
              Funny Movies
            </Typography>
          </div>
          <div className="ml-auto flex items-center">
            {!isLogedIn && <RegisterBtn />}
            {isLogedIn && (
              <>
                <div className="mr-3 hidden md:block">Welcome, {userEmail}</div>
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
            <LogInOutBtn />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
