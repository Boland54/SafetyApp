import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    background: "#150032"
  },
  offset: theme.mixins.toolbar,
  backgroundColor: "rgb(21, 0, 50)"
  
}));

const SiteHeader = ( { history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));  //true of false
  const [login, setLogin] = useState(false);  

  const menuOptions = [
    { label: "Home", path: "/home" },
    { label: "File Complaint", path: "/form" },
    { label: "Complaints Made", path: "/todo" },
    { label: "Accidents", path: "/accidents" },
    { label: "Comittee", path: "/comittee" },

  ];

  const handleMenuSelect = (pageURL) => {
    history.push(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

   

  return (
    <>
   
      <AppBar position="fixed" color="secondary">
      <div style = {{backgroundColor: "rgb(21, 0, 50)"}}>
        <Toolbar>
        
          <Typography variant="h4" className={classes.title}>
            FYP
          </Typography>
<div align = "center">
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                
                <Menu
                  id="menu-appbar"
                  background= "#150032"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                ))}
              </>
            )}
            </div>
        </Toolbar>
        </div>
      </AppBar>
      <div className={classes.offset} />
     
    </>
  );
};

export default withRouter(SiteHeader);