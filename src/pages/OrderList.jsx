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
  InputBase,
  Pagination,
  Grid,
} from "@mui/material";
import { Add, FilterList, Search, Sort } from "@mui/icons-material";
import { useColorMode } from "../theme/ThemeContext";
import { ORDER_LIST_ACTIONS_STYLES, ORDERS_MOCK } from "../constants/constants";
import { SearchWrapper } from "../components/helpers";
import { getStatusColor } from "../utils";
import { useState } from "react";

const { cols, rows: orders } = ORDERS_MOCK;
const PER_PAGE = 5;

export default function OrderList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { mode } = useColorMode();
  const currPageOrders = orders.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <Box sx={{ p: 3, width: "100%", bgcolor: "background.paper" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Order List
      </Typography>

      <Box
        sx={{
          display: "flex",
          mb: 2,
          alignItems: "center",
          background: ORDER_LIST_ACTIONS_STYLES[mode]?.bg ?? "inherit",
          p: 1,
          borderRadius: 1,
        }}
      >
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
        <SearchWrapper variant="outlined" sx={{ maxWidth: 160 }}>
          <Search size={16} style={{ marginRight: 6, color: "#9e9e9e" }} />
          <InputBase
            placeholder="Search…"
            sx={{ fontSize: 14 }}
            inputProps={{ "aria-label": "search" }}
          />
        </SearchWrapper>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              {cols.map((col) => (
                <TableCell key={col.id}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {col.label}
                  </Typography>
                </TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currPageOrders.map((order, index) => {
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
                        src={order.avatar}
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
                      icon={<span>•</span>}
                      color={statusInfo.color}
                      variant="outlined"
                      sx={{
                        borderRadius: 1,
                        "& .MuiChip-icon": { fontSize: 16, marginLeft: 1 },
                        border: "none",
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
      <Grid display="flex" justifyContent="flex-end" mt={2}>
        <Pagination
          count={Math.ceil(orders.length / PER_PAGE)}
          page={currentPage}
          shape="rounded"
          onChange={(_, value) => setCurrentPage(value)}
        />
      </Grid>
    </Box>
  );
}
