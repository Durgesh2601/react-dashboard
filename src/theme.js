import { createTheme } from "@mui/material/styles";
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/600.css"; // SemiBold

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: 14, // base size
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600, // custom key (MUI doesn’t have this by default)
    h6: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0",
    },
    body1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
});
export default theme;
