import { Box, Card, Typography, Stack } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import {
  gridStyle,
  RevenueChart,
  TOP_SALES_DATA,
} from "../constants/constants";

export default function TotalSalesCard({ mode }) {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        background: RevenueChart[mode].bg,
        color: RevenueChart[mode].text,
        ...gridStyle,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Total Sales
      </Typography>

      <Box sx={{ height: 200, position: "relative" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={TOP_SALES_DATA}
              dataKey="value"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              stroke="none"
            >
              {TOP_SALES_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Legend */}
      <Stack spacing={1.5} mt={2} px={6}>
        {TOP_SALES_DATA.map((item) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: item.color,
                  mr: 1,
                }}
              />
              <Typography variant="body2">{item.name}</Typography>
            </Box>
            <Typography variant="body2" fontWeight="500">
              ${item.value.toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
