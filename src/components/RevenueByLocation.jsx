import {
  Box,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import {
  gridStyle,
  REVENUE_BY_LOCATION_MOCK,
  COMMON_GRID_STYLE,
} from "../constants/constants";
import worldMap from "../assets/worldMap.svg";
import React from "react";

export default function RevenueByLocation({ mode }) {
  return (
    <Paper
      sx={{
        p: 2,
        background: COMMON_GRID_STYLE[mode].bg,
        color: COMMON_GRID_STYLE[mode].text,
        ...gridStyle,
      }}
    >
      <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2 }}>
        Revenue by Location
      </Typography>
      <Box
        sx={{ mb: 2 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <img
          src={worldMap}
          alt="Map"
          width="154px"
          height="82px"
          style={{ borderRadius: 8 }}
        />
      </Box>
      <List disablePadding>
        {REVENUE_BY_LOCATION_MOCK.map((city) => (
          <React.Fragment key={city.name}>
            <ListItem
              disableGutters
              sx={{ flexDirection: "column", alignItems: "flex-start", p: 0.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <ListItemText primary={city.name} />
                <Typography variant="body2">{city.label}</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={city.value}
                sx={{
                  width: "100%",
                  backgroundColor: "#e8f1f8ff",

                  [`& .MuiLinearProgress-bar`]: {
                    backgroundColor: "#A8C5DA",
                  },
                }}
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
