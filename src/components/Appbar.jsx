import { AppBar, Typography, Button, Link } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Appbar({ isLoggedIn, username }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  function handleClick() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <AppBar
      position="sticky"
      color="default"
      style={{
        height: "12vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Link
        underline="none"
        style={{ marginLeft: "10%", fontWeight: "600", fontSize: "2em" }}
        onClick={() => {}}
      >
        Coursify
      </Link>
      <div style={{ marginRight: "10%", display: "flex" }}>
        {isLoggedIn ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1%" }}>
            <Typography>Welcome, {username}!</Typography>
            <Button variant="contained" onClick={handleClick}>
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button
              variant="contained"
              style={{ margin: "2%" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Signup
            </Button>
            <Button
              variant="contained"
              style={{ margin: "2%" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </>
        )}
      </div>
    </AppBar>
  );
}

export default Appbar;
