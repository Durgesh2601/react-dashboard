import { Box, Grid, Paper, Typography } from "@mui/material";
import { cardColors, gridStyle, METRICS } from "../constants/constants";
import { Moving, TrendingDown } from "@mui/icons-material";

export default function Metrics({ mode }) {
  return (
    <Grid container spacing={3} sx={{ minHeight: "252px" }}>
      {METRICS.map((item, idx) => (
        <Grid
          key={idx}
          size={{
            xs: 12,
            sm: 6,
            md: 6,
          }}
          sx={{
            minHeight: "112px",
          }}
        >
          <Paper
            sx={{
              p: 2,
              backgroundColor: cardColors[mode][item.colorIndex].bg,
              color: cardColors[mode][item.colorIndex].text,
              ...gridStyle,
              minHeight: "112px",
            }}
          >
            <Typography variant="subtitle2" fontWeight="bold">
              {item.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", mt: 1 }}>
              <Typography variant="h4" fontWeight="bold">
                {item.value}
              </Typography>
              <Typography
                variant="caption"
                color={item.up ? "success.main" : "error.main"}
                sx={{ ml: 1, display: "flex", alignItems: "center" }}
              >
                {item.change}
                {item.up ? (
                  <Moving fontSize="small" />
                ) : (
                  <TrendingDown
                    fontSize="small"
                    sx={{ transform: "scaleX(-1)" }}
                  />
                )}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
