import { useState, useEffect, useMemo } from "react";
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
import { getFilteredOrders, getSortedOrders, getStatusColor } from "../utils";

const { cols, rows: orders } = ORDERS_MOCK;
const PER_PAGE = 5;

export default function OrderList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const { mode } = useColorMode();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery.toLowerCase());
      setCurrentPage(1); // reset page when searching
    }, 400);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // --- filter orders ---
  const filteredOrders = useMemo(
    () => getFilteredOrders(orders, debouncedQuery),
    [orders, debouncedQuery]
  );

  // --- sorting logic on Order ID ---
  const sortedOrders = useMemo(
    () => getSortedOrders(filteredOrders, sortAsc),
    [filteredOrders, sortAsc]
  );

  const currPageOrders = useMemo(
    () =>
      sortedOrders.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE),
    [sortedOrders, currentPage]
  );

  // --- selection logic ---
  const isPageAllSelected = currPageOrders.every((o) =>
    selected.includes(o.id)
  );

  const isPageIndeterminate =
    currPageOrders.some((o) => selected.includes(o.id)) && !isPageAllSelected;

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const newSelected = [
        ...new Set([...selected, ...currPageOrders.map((o) => o.id)]),
      ];
      setSelected(newSelected);
    } else {
      const newSelected = selected.filter(
        (id) => !currPageOrders.map((o) => o.id).includes(id)
      );
      setSelected(newSelected);
    }
  };

  const handleRowSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSort = () => {
    setSortAsc((prev) => !prev);
    setCurrentPage(1);
  };

  return (
    <Box sx={{ p: 3, width: "100%", bgcolor: "background.paper" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Order List
      </Typography>

      {/* Action Bar */}
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
        <IconButton size="small" onClick={handleSort}>
          <Sort
            style={{
              transform: sortAsc ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s",
            }}
          />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <SearchWrapper variant="outlined" sx={{ maxWidth: 200 }}>
          <Search size={16} style={{ marginRight: 6, color: "#9e9e9e" }} />
          <InputBase
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ fontSize: 14 }}
            inputProps={{ "aria-label": "search" }}
          />
        </SearchWrapper>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={isPageIndeterminate}
                  checked={isPageAllSelected}
                  onChange={handleSelectAll}
                />
              </TableCell>
              {cols.map((col) => (
                <TableCell key={col.id}>{col.label}</TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currPageOrders.map((order, index) => {
              const statusInfo = getStatusColor(order.status);
              const isChecked = selected.includes(order.id);

              return (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isChecked}
                      onChange={() => handleRowSelect(order.id)}
                    />
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

      {/* Pagination */}
      <Grid display="flex" justifyContent="flex-end" mt={2}>
        <Pagination
          count={Math.ceil(filteredOrders.length / PER_PAGE)}
          page={currentPage}
          shape="rounded"
          onChange={(_, value) => setCurrentPage(value)}
        />
      </Grid>
    </Box>
  );
}
