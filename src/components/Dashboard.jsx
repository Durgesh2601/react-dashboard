import {
  Box,
  Paper,
  Typography,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@mui/material";
import { Moving, TrendingDown } from "@mui/icons-material";
import { useColorMode } from "../theme/ThemeContext";
import { cardColors } from "../constants/constants";

export default function Dashboard() {
  const { mode } = useColorMode();
  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        eCommerce
      </Typography>

      <Grid container spacing={2}>
        <Grid
          item
          size={{
            xs: 12,
          }}
        >
          {/* Left column: Customers, Orders, Revenue, Growth */}
          <Grid container spacing={3}>
            {/* Left column (metrics) */}
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 6,
              }}
            >
              <Grid container spacing={2}>
                {[
                  {
                    title: "Customers",
                    value: "3,781",
                    change: "+11.01%",
                    up: true,
                    colorIndex: 0,
                  },
                  {
                    title: "Orders",
                    value: "1,219",
                    change: "-0.03%",
                    up: false,
                    colorIndex: 1,
                  },
                  {
                    title: "Revenue",
                    value: "$695",
                    change: "+15.03%",
                    up: true,
                    colorIndex: 2,
                  },
                  {
                    title: "Growth",
                    value: "30.1%",
                    change: "+6.08%",
                    up: true,
                    colorIndex: 3,
                  },
                ].map((item, idx) => (
                  <Grid
                    key={idx}
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 6,
                    }}
                  >
                    <Paper
                      sx={{
                        p: 2,
                        backgroundColor: cardColors[mode][item.colorIndex].bg,
                        color: cardColors[mode][item.colorIndex].text,
                        borderRadius: "16px",
                        padding: "24px",
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
              <Paper sx={{ p: 2, height: "100%" }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Projections vs Actuals
                </Typography>
                <Box
                  sx={{
                    mt: 1,
                    height: 120,
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  {[30, 50, 40, 60, 35, 45].map((value, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "14%",
                        mx: 0.5,
                        height: `${value}%`,
                        bgcolor: "primary.light",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "20%",
                          bgcolor: "primary.main",
                        },
                      }}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="caption">Jan</Typography>
                  <Typography variant="caption">Feb</Typography>
                  <Typography variant="caption">Mar</Typography>
                  <Typography variant="caption">Apr</Typography>
                  <Typography variant="caption">May</Typography>
                  <Typography variant="caption">Jun</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          size={{
            xs: 12,
          }}
        >
          <Grid
            item
            size={{
              xs: 12,
              sm: 6,
              md: 6,
            }}
          >
            <Paper sx={{ p: 2 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                Revenue
              </Typography>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      mr: 1,
                    }}
                  />
                  <Typography variant="caption">
                    Current Week $58,211
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: "grey.400",
                      mr: 1,
                    }}
                  />
                  <Typography variant="caption">
                    Previous Week $68,768
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ height: 200, position: "relative" }}>
                {/* This is just a placeholder for the chart */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "50%",
                      height: 2,
                      bgcolor: "primary.light",
                      borderRadius: 4,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: "30%",
                      height: 2,
                      bgcolor: "grey.400",
                      borderRadius: 4,
                      borderStyle: "dashed",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography variant="caption">Jan</Typography>
                <Typography variant="caption">Feb</Typography>
                <Typography variant="caption">Mar</Typography>
                <Typography variant="caption">Apr</Typography>
                <Typography variant="caption">May</Typography>
                <Typography variant="caption">Jun</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid
            item
            size={{
              xs: 12,
              sm: 6,
              md: 6,
            }}
          >
            <Paper sx={{ p: 2 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                Revenue by Location
              </Typography>
              <Box sx={{ mb: 2 }}>
                {/* Placeholder for the map */}
                <Box
                  sx={{
                    height: 150,
                    bgcolor: "grey.100",
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
              </Box>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemText primary="New York" />
                  <ListItemSecondaryAction>
                    <Typography variant="body2">72K</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemText primary="San Francisco" />
                  <ListItemSecondaryAction>
                    <Typography variant="body2">39K</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemText primary="Sydney" />
                  <ListItemSecondaryAction>
                    <Typography variant="body2">25K</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemText primary="Singapore" />
                  <ListItemSecondaryAction>
                    <Typography variant="body2">61K</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
