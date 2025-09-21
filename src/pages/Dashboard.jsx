import { Box, Paper, Typography, Grid } from "@mui/material";
import { Moving, TrendingDown } from "@mui/icons-material";
import { useColorMode } from "../theme/ThemeContext";
import { cardColors, gridStyle, METRICS } from "../constants/constants";
import { TopSellingProducts } from "../components/TopSellingProducts";
import TotalSales from "../components/TotalSales";
import RevenueByLocation from "../components/RevenueByLocation";
import ProjectionsVsActuals from "../components/ProjectionsVsActuals";
import RevenueChart from "../components/RevenueChart";

export default function Dashboard() {
  const { mode } = useColorMode();
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        eCommerce
      </Typography>

      <Grid container spacing={2}>
        <Grid
          size={{
            xs: 12,
          }}
        >
          <Grid container spacing={3}>
            {/* Left column (metrics) */}
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 6,
              }}
            >
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
                      <Box
                        sx={{ display: "flex", alignItems: "baseline", mt: 1 }}
                      >
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
            </Grid>

            {/* Right column: Projections vs Actuals */}
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 6,
              }}
            >
              <ProjectionsVsActuals mode={mode} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          size={{
            xs: 12,
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              size={{
                xs: 12,
                sm: 12,
                md: 8,
              }}
            >
              {/* <RevenueChart /> */}
              <RevenueChart mode={mode} />
            </Grid>

            <Grid
              item
              size={{
                xs: 12,
                md: 4,
              }}
            >
              {/* <RevenueByLocation /> */}
              <RevenueByLocation mode={mode} />
            </Grid>
          </Grid>
        </Grid>

        {/* Top selling products row */}
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={3}>
            <Grid item size={{ xs: 12, md: 8 }}>
              {/* <TopSellingProducts /> */}
              <TopSellingProducts mode={mode} />
            </Grid>

            <Grid item size={{ xs: 12, md: 4 }}>
              {/* Total Sales /> */}
              <TotalSales mode={mode} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
