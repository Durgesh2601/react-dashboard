import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import OrderList from "./OrderList";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Topbar />
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<OrderList />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
