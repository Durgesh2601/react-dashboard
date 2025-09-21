import { Card, Typography, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  CHART_STROKE_COLOR_1,
  CHART_STROKE_COLOR_2,
  COMMON_GRID_STYLE,
  gridStyle,
  REVENUE_CHART_MOCK,
} from "../constants/constants";
import React from "react";

function RevenueChart({ mode }) {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        background: COMMON_GRID_STYLE[mode].bg,
        color: COMMON_GRID_STYLE[mode].text,
        ...gridStyle,
      }}
    >
      {/* Title + Legend */}
      <Box display="flex" alignItems="center" gap={3} mb={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          Revenue
        </Typography>
        <Typography variant="body2">
          ● Current Week{" "}
          <Box component="span" fontWeight="bold">
            $58,211
          </Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ● Previous Week{" "}
          <Box component="span" fontWeight="bold">
            $68,768
          </Box>
        </Typography>
      </Box>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={252}>
        <LineChart data={REVENUE_CHART_MOCK}>
          <CartesianGrid stroke="#e0e0e0" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}M`}
            ticks={[0, 10, 20, 30]}
            domain={[0, 30]}
          />
          {/* <Tooltip content={<CustomTooltip />} /> */}

          {/* Previous Week (light blue) */}
          <Line
            type="monotone"
            dataKey="previous"
            stroke={CHART_STROKE_COLOR_2[mode]}
            strokeWidth={4}
            dot={false}
            isAnimationActive={false}
          />

          {/* Current Week (black, with dashed after April) */}
          <Line
            type="monotone"
            dataKey="current"
            stroke={CHART_STROKE_COLOR_1[mode]}
            strokeWidth={4}
            dot={false}
            strokeDasharray="0 0 8" // solid, will adjust with segment trick
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default React.memo(RevenueChart);
