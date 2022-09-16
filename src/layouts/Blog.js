import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          pt: 5.2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
