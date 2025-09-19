import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Breadcrumbs,
  Link,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  VerticalSplit,
  Sunny,
  History,
  Notifications,
  Search,
  Star,
} from "@mui/icons-material";

const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "2px 8px",
  borderRadius: 6,
  backgroundColor: theme.palette.grey[100],
  minWidth: 200,
  flex: 1,
  maxWidth: 320,
}));

export default function Topbar({ title }) {
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
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
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
        </Box>

        {/* Right: Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small" color="default">
            <Sunny size={18} />
          </IconButton>
          <IconButton size="small" color="default">
            <History size={18} />
          </IconButton>
          <IconButton size="small" color="default">
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
