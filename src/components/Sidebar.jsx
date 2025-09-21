import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  Folder,
  School,
  Person,
  AccountCircle,
  Business,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Article,
  Public,
} from "@mui/icons-material";
import SidebarAvatar from "../assets/SidebarAvatar.png";

const drawerWidth = 212;

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subOpen, setSubOpen] = useState({});
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
    setSubOpen({}); // Close all submenus when toggling
  };

  const toggleSubmenu = (key) => {
    setSubOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : 72,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 72,
          boxSizing: "border-box",
          transition: "width 0.3s",
          border: "none",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: open ? "space-between" : "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <img src={SidebarAvatar} alt="Logo" style={{ width: 24, height: 24 }} />
        {open && <Typography variant="h6">ByeWind</Typography>}
        <IconButton onClick={toggleDrawer} size="small">
          <MenuIcon fontSize="small" />
        </IconButton>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {/* Favorites Section */}
        {open && (
          <Typography
            sx={{ px: 2, py: 1, fontSize: 12, color: "text.secondary" }}
          >
            Favorites
          </Typography>
        )}
        <ListItemButton>
          <ListItemIcon>
            <Dashboard fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Overview" />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Folder fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Projects" />}
        </ListItemButton>

        {/* Dashboards Section */}
        {open && (
          <Typography
            sx={{ px: 2, py: 1, fontSize: 12, color: "text.secondary" }}
          >
            Dashboards
          </Typography>
        )}
        <ListItemButton
          component={Link}
          to="/"
          selected={location.pathname === "/"}
        >
          <ListItemIcon>
            <Dashboard fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Default" />}
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/orders"
          selected={location.pathname === "/orders"}
        >
          <ListItemIcon>
            <ShoppingCart fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Orders" />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Folder fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Projects" />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <School fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Online Courses" />}
        </ListItemButton>

        {/* Pages Section with Submenu */}
        {open && (
          <Typography sx={{ px: 2, py: 1, fontSize: 12, color: "gray" }}>
            Pages
          </Typography>
        )}
        <ListItemButton onClick={() => toggleSubmenu("profile")}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="User Profile" />}
          {open &&
            (subOpen["profile"] ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            ))}
        </ListItemButton>
        <Collapse in={subOpen["profile"]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              "Overview",
              "Projects",
              "Campaigns",
              "Documents",
              "Followers",
            ].map((item) => (
              <ListItemButton key={item} sx={{ pl: 6 }}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Account" />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Business fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Corporate" />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Article fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Blog" />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Public fontSize="small" />
          </ListItemIcon>
          {open && <ListItemText primary="Social" />}
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
