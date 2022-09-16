import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { Link, useNavigate } from "react-router-dom";
import { AppBar, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../auth";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", height: 40 }}>
      <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
        <Box
          sx={{
            width: "70%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button sx={{ color: "black" }} LinkComponent={Link} to="/">
            Home Page
          </Button>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!auth ? (
            <Button
              size={"small"}
              variant={"contained"}
              color={"warning"}
              LinkComponent={Link}
              to="login"
            >
              Login
            </Button>
          ) : (
            <>
              <Button
                size={"small"}
                variant={"contained"}
                color={"warning"}
                onClick={handleClick}
              >
                Dashboard
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/dashboard");
                    handleClose();
                  }}
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem("user");
                    dispatch(logout());
                    handleClose();
                    navigate("/");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
