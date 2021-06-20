import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import { Menu, AccountCircle } from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory();

  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState("left");
  const handleDrawer = () => {
    setAnchor("left");
    setOpen(true);
  };

  const handleAccount = () => {
    setAnchor("bottom");
    setOpen(true);
  };

  const btnstyle = { margin: "10px auto", color: "white"};

  return (

    <div>
      <AppBar position="static" style={{backgroundColor: "#00796b"}}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            color="inherit"
            edge="start"
            aria-label="menu"
          >
            <Menu></Menu>
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign:'center' }}>
            Ask Away
          </Typography>
          <Router>
            <Button color="inherit" style={btnstyle}>
              <Link onClick={() => history.push("/")} style={{textDecoration:'none', color:'inherit'}}>Logout</Link>
            </Button>
            <Button color="inherit" style={btnstyle}>
              <Link onClick={() => history.push("/signup")} style={{textDecoration:'none', color:'inherit'}}>Sign In</Link>
            </Button>
          </Router>
          <IconButton
            onClick={handleAccount}
            color="inherit"
            aria-label="account"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
        <div style={{ height: "100%", padding: "20px" }}>
          <Divider />
          <List>
            {["Questions", "Tags", "Users", "Teams"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Jobs", "Companies", "Your Account"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
