import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,

        boxShadow: "none",
        padding: "0 20px",
      }}
    >
      <Toolbar>
        <Link
          to="/"
          color="primary"
          style={{ textDecoration: "none", marginRight: "auto" }}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight="bold"
            color="primary"
            sx={{ flexGrow: 1 }}
          >
            PrepPal
          </Typography>
        </Link>

        <Box sx={{ display: "flex", gap: 2, marginRight: "1rem" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "black" }}>Home</Button>
          </Link>
          <Link to="/maps" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "black" }}>Maps</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "black" }}>About</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
