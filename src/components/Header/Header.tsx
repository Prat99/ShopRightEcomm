import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <Link
              to="/"
              color="#fff"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              ShopRight
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open cart"
            component={Link}
            to="/cart"
          >
            <ShoppingCartIcon />
            Cart
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
