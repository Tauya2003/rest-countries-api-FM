import { DarkMode, DarkModeOutlined } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../App";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const [lightMode, setLightMode] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    toggleColorMode();
    setLightMode(!lightMode);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        position: "sticky",
        bgcolor: "elements.main",
        boxShadow: "0px 1px 5px #0002",
      }}
    >
      <Toolbar sx={{ px: { md: 10 } }}>
        <Typography
          onClick={() => navigate("/")}
          flexGrow={1}
          sx={{
            color: "text.main",
            fontSize: 16,
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Where in the world?
        </Typography>
        <Button
          onClick={handleClick}
          startIcon={lightMode ? <DarkModeOutlined /> : <DarkMode />}
          sx={{ color: "text.main", textTransform: "capitalize" }}
        >
          {lightMode ? "Dark" : "Light"} Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
