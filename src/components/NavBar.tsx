import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import logo from "../assets/img/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const NavBar: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (menu: string): undefined => {
    //useCallback(() => navigate("/" + menu, { replace: true }), [navigate]);
    setAnchorElNav(null);
    return undefined;
  };

  /**
     * const handleThemeClick = () => {
      if (theme == "light") {
        dispatch(setTheme("dark"));
      } else {
        dispatch(setTheme("light"));
      }
    };
     */

  return (
    <AppBar position="static" style={{ background: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }} component={Link} to='./'>
            <img src={logo} height="70" width="200" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem component={Link} to='./news' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">News</Typography>
              </MenuItem>
              <MenuItem component={Link} to='./blog' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Blog</Typography>
              </MenuItem>
              <MenuItem component={Link} to='./tour' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Tour</Typography>
              </MenuItem>
              <MenuItem component={Link} to='./merch' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Merch</Typography>
              </MenuItem>
            </Menu>
            <Box sx={{ display: { xs: "flex", md: "none" } }} component={Link} to='./'>
              <img src={logo} height="50" />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button component={Link} to='./news'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontSize: '1.3em' }}
            >
              News
            </Button>
            <Button component={Link} to='./blog'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontSize: '1.3em' }}
            >
              Blog
            </Button>
            <Button component={Link} to='./tour'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontSize: '1.3em' }}
            >
              Tour
            </Button>
            <Button component={Link} to='./merch'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontSize: '1.3em' }}
            >
              Merch
            </Button>
          </Box>
          {/* 
            
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleThemeClick} sx={{ p: 0 }}>
                {theme == "dark" ? <Brightness7Icon /> : <BedtimeIcon />}
              </IconButton>
            </Box>
            
            */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
