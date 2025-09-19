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
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        eCommerce
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Customers
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", mt: 1 }}>
              <Typography variant="h4" component="div" fontWeight="bold">
                3,781
              </Typography>
              <Typography
                variant="caption"
                color="success.main"
                sx={{ ml: 1, display: "flex", alignItems: "center" }}
              >
                +11.01% <ArrowUpward fontSize="small" />
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Orders
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", mt: 1 }}>
              <Typography variant="h4" component="div" fontWeight="bold">
                1,219
              </Typography>
              <Typography
                variant="caption"
                color="error.main"
                sx={{ ml: 1, display: "flex", alignItems: "center" }}
              >
                -0.03% <ArrowDownward fontSize="small" />
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
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
              sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}
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

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Revenue
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", mt: 1 }}>
              <Typography variant="h4" component="div" fontWeight="bold">
                $695
              </Typography>
              <Typography
                variant="caption"
                color="success.main"
                sx={{ ml: 1, display: "flex", alignItems: "center" }}
              >
                +15.03% <ArrowUpward fontSize="small" />
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Growth
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", mt: 1 }}>
              <Typography variant="h4" component="div" fontWeight="bold">
                30.1%
              </Typography>
              <Typography
                variant="caption"
                color="success.main"
                sx={{ ml: 1, display: "flex", alignItems: "center" }}
              >
                +6.08% <ArrowUpward fontSize="small" />
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
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
                <Typography variant="caption">Current Week $58,211</Typography>
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
                <Typography variant="caption">Previous Week $68,768</Typography>
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

        <Grid item xs={12} md={4}>
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
    </Box>
  );
}
