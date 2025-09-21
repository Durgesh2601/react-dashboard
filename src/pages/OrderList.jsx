import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Checkbox,
  Avatar,
  Chip,
} from "@mui/material";
import { Add, FilterList, Sort } from "@mui/icons-material";

const orders = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/avatars/natali.jpg" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/avatars/kate.jpg" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/avatars/drew.jpg" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/avatars/orlando.jpg" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/avatars/andi.jpg" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  // Duplicated rows as in the screenshot
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/avatars/natali.jpg" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/avatars/kate.jpg" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/avatars/drew.jpg" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/avatars/orlando.jpg" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/avatars/andi.jpg" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Complete":
      return { color: "success", icon: "•" };
    case "In Progress":
      return { color: "info", icon: "•" };
    case "Pending":
      return { color: "warning", icon: "•" };
    case "Approved":
      return { color: "warning", icon: "★" };
    case "Rejected":
      return { color: "error", icon: "•" };
    default:
      return { color: "default", icon: "•" };
  }
};

export default function OrderList() {
  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Order List
      </Typography>

      <Box sx={{ display: "flex", mb: 2, alignItems: "center" }}>
        <IconButton size="small">
          <Add />
        </IconButton>
        <IconButton size="small">
          <FilterList />
        </IconButton>
        <IconButton size="small">
          <Sort />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 200,
          }}
        >
          <input
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontSize: "14px",
            }}
            placeholder="Search"
          />
        </Paper>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => {
              const statusInfo = getStatusColor(order.status);
              return (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={order.user.avatar}
                        sx={{ width: 24, height: 24, mr: 1 }}
                      />
                      {order.user.name}
                    </Box>
                  </TableCell>
                  <TableCell>{order.project}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      size="small"
                      icon={<span>{statusInfo.icon}</span>}
                      color={statusInfo.color}
                      variant="outlined"
                      sx={{
                        borderRadius: 1,
                        "& .MuiChip-icon": { fontSize: 16, marginLeft: 1 },
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">•••</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
            &lt;
          </IconButton>
          <IconButton
            size="small"
            sx={{
              border: "1px solid #e0e0e0",
              bgcolor: "primary.main",
              color: "white",
            }}
          >
            1
          </IconButton>
          <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
            2
          </IconButton>
          <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
            3
          </IconButton>
          <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
            4
          </IconButton>
          <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
            5
          </IconButton>
          <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
            &gt;
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
