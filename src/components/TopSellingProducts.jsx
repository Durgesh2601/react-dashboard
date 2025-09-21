import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  gridStyle,
  COMMON_GRID_STYLE,
  TOP_SELLING_MOCK,
} from "../constants/constants";

const { cols, rows } = TOP_SELLING_MOCK;

export const TopSellingProducts = ({ mode }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        ...gridStyle,
        background: COMMON_GRID_STYLE[mode].bg,
        color: COMMON_GRID_STYLE[mode].text,
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        sx={{
          mb: 2,
        }}
      >
        Top Selling Products
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map((col) => (
              <TableCell key={col.id} align={col.align || "left"}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "td, th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">${row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                ${row.amount.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
