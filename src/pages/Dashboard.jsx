import { Box, Paper, Typography, Grid } from "@mui/material";
import { Moving, TrendingDown } from "@mui/icons-material";
import { useColorMode } from "../theme/ThemeContext";
import { cardColors, gridStyle, METRICS } from "../constants/constants";
import { TopSellingProducts } from "../components/TopSellingProducts";
import TotalSales from "../components/TotalSales";
import RevenueByLocation from "../components/RevenueByLocation";
import ProjectionsVsActuals from "../components/ProjectionsVsActuals";
import RevenueChart from "../components/RevenueChart";
import Metrics from "../components/Metrics";

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
              <Metrics mode={mode} />
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
