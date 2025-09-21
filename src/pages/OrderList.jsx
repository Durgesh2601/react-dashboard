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
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Add,
  FilterList,
  Search,
  Sort,
  MoreVert,
  Delete,
} from "@mui/icons-material";
import { useColorMode } from "../theme/ThemeContext";
import { ORDER_LIST_ACTIONS_STYLES, ORDERS_MOCK } from "../constants/constants";
import { SearchWrapper } from "../components/helpers";
import { getFilteredOrders, getSortedOrders, getStatusColor } from "../utils";

const { cols, rows: initialOrders } = ORDERS_MOCK;
const PER_PAGE = 5;

export default function OrderList() {
  const [rows, setRows] = useState(initialOrders);
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeRow, setActiveRow] = useState(null);
  const [deletingRow, setDeletingRow] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const { mode } = useColorMode();

  // --- debounce search ---
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery.toLowerCase());
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // --- filter orders ---
  const filteredOrders = useMemo(
    () => getFilteredOrders(rows, debouncedQuery),
    [rows, debouncedQuery]
  );

  // --- sorting logic ---
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

  // --- Menu Actions ---
  const handleMenuOpen = (event, rowId) => {
    setMenuAnchor(event.currentTarget);
    setActiveRow(rowId);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
    setActiveRow(null);
  };

  const handleDelete = (rowId) => {
    // Delete immediately without confirmation
    setDeletingRow(rowId);
    handleMenuClose();

    // wait for collapse animation then remove row
    setTimeout(() => {
      setRows((prev) => prev.filter((r) => r.id !== rowId));
      setDeletingRow(null);
    }, 300);
  };

  // Keep this function for consistency with the bulk delete flow
  const confirmSingleDelete = () => {
    // This function is no longer used but kept for code structure
    const rowId = activeRow;
    setDeletingRow(rowId);
    setConfirmDialogOpen(false);

    setTimeout(() => {
      setRows((prev) => prev.filter((r) => r.id !== rowId));
      setDeletingRow(null);
    }, 300);
  };

  const handleBulkDelete = () => {
    setConfirmDialogOpen(true);
  };

  const confirmBulkDelete = () => {
    // Animate first
    setDeletingRow([...selected]); // can store array of deleting ids
    setConfirmDialogOpen(false);

    setTimeout(() => {
      setRows((prev) => prev.filter((r) => !selected.includes(r.id)));
      setDeletingRow(null);
      setSelected([]); // clear selection
    }, 300);
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
                  disabled={currPageOrders.length === 0}
                />
              </TableCell>
              {cols.map((col) => (
                <TableCell key={col.id}>{col.label}</TableCell>
              ))}
              <TableCell align="right">
                {selected.length > 0 && (
                  <IconButton
                    size="small"
                    color="error"
                    onClick={handleBulkDelete}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currPageOrders?.length > 0 ? (
              currPageOrders.map((order) => {
                const statusInfo = getStatusColor(order.status);
                const isChecked = selected.includes(order.id);
                const isDeleting = Array.isArray(deletingRow)
                  ? deletingRow.includes(order.id)
                  : deletingRow === order.id;

                return (
                  <TableRow
                    key={order.id}
                    sx={{
                      transition: "all 0.3s ease",
                      opacity: isDeleting ? 0 : 1,
                      transform: isDeleting
                        ? "translateX(-20px)"
                        : "translateX(0)",
                      height: isDeleting ? 0 : "auto",
                      "&:hover .row-actions": {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    }}
                  >
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
                    <TableCell align="right">
                      <IconButton
                        className="row-actions"
                        size="small"
                        onClick={(e) => handleMenuOpen(e, order.id)}
                        sx={{
                          opacity: 0,
                          transform: "translateX(10px)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <MoreVert fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={cols.length + 2}
                  align="center"
                  sx={{ py: 5 }}
                >
                  No orders found.
                </TableCell>
              </TableRow>
            )}
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

      {/* Row Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleDelete(activeRow)}>
          <Delete fontSize="small" style={{ marginRight: 8 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Confirmation Dialog - Only used for bulk delete */}
      <Dialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Bulk Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {selected.length} selected orders?
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmBulkDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
