import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "../pages/Dashboard";
import OrderList from "../pages/OrderList";
import NotificationsPanel from "./NotificationPanel";

const Layout = () => {
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Topbar setOpenNotifications={setOpenNotifications} />
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<OrderList />} />
          </Routes>
        </Box>
      </Box>
      {openNotifications && (
        <NotificationsPanel setOpenNotifications={setOpenNotifications} />
      )}
    </Box>
  );
};

export default Layout;
