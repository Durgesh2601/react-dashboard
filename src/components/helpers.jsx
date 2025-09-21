import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "2px 8px",
  borderRadius: 6,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800],
  minWidth: 200,
  flex: 1,
  maxWidth: 320,
}));
