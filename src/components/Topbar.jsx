import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Breadcrumbs,
  Link,
  Tooltip,
} from "@mui/material";
import {
  VerticalSplit,
  Sunny,
  DarkMode,
  History,
  Notifications,
  Search,
  Star,
} from "@mui/icons-material";
import { useColorMode } from "../theme/ThemeContext";
import { SearchWrapper } from "./helpers";

export default function Topbar({ title, setOpenNotifications }) {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <Toolbar sx={{ minHeight: 56, px: 2 }}>
        {/* Left: Breadcrumb */}
        <Breadcrumbs
          separator="/"
          sx={{ color: "text.secondary", flexShrink: 0 }}
        >
          <Link
            underline="hover"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <VerticalSplit size={16} style={{ marginRight: 4 }} />
            <Star size={16} style={{ marginRight: 4 }} />
            Dashboards
          </Link>
          <Typography color="text.primary">{title || "Default"}</Typography>
        </Breadcrumbs>

        {/* Center: Search */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}></Box>

        {/* Right: Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <SearchWrapper variant="outlined">
            <Search size={16} style={{ marginRight: 6, color: "#9e9e9e" }} />
            <InputBase
              placeholder="Search…"
              sx={{ flex: 1, fontSize: 14 }}
              inputProps={{ "aria-label": "search" }}
            />
            <Typography variant="caption" color="text.secondary">
              ⌘ /
            </Typography>
          </SearchWrapper>
          <Tooltip
            title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
          >
            <IconButton size="small" onClick={toggleColorMode}>
              {mode === "light" ? <DarkMode size={18} /> : <Sunny size={18} />}
            </IconButton>
          </Tooltip>
          <IconButton size="small" color="default">
            <History size={18} />
          </IconButton>
          <IconButton
            size="small"
            color="default"
            onClick={() => setOpenNotifications((prev) => !prev)}
          >
            <Notifications size={18} />
          </IconButton>
          <IconButton size="small" color="default">
            <VerticalSplit size={18} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
