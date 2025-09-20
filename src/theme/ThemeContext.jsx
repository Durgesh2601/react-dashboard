import { createContext, useState, useMemo, useContext } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import baseTheme from "../theme";

// Create the context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

// Custom hook to use the theme context
export const useColorMode = () => useContext(ColorModeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  // Theme toggler function
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  // Create theme based on the mode
  const theme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Light mode palette
                primary: { main: "#1976d2" },
                background: {
                  default: "#f5f5f5",
                  paper: "#ffffff",
                },
              }
            : {
                // Dark mode palette
                primary: { main: "#90caf9" },
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
