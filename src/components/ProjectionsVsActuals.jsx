import { Card, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { COMMON_GRID_STYLE } from "../constants/constants";
import React from "react";

// Mock Data
const data = [
  { month: "Jan", actual: 17, projection: 20 },
  { month: "Feb", actual: 21, projection: 25 },
  { month: "Mar", actual: 18, projection: 21 },
  { month: "Apr", actual: 22, projection: 27 },
  { month: "May", actual: 15, projection: 18 },
  { month: "Jun", actual: 21, projection: 25 },
];

function ProjectionsVsActuals({ mode }) {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: COMMON_GRID_STYLE[mode].bg,
        color: COMMON_GRID_STYLE[mode].text,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Projections vs Actuals
      </Typography>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barSize={40}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e0e0e0"
          />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}M`}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
          />
          <Tooltip />

          {/* Actual (bottom part of stacked bar) */}
          <Bar
            dataKey="actual"
            stackId="a"
            fill="#A8C5DA" // darker blue
            barSize={28}
          />

          {/* Projection (extra above actuals) */}
          <Bar
            dataKey={(d) => d.projection - d.actual}
            stackId="a"
            fill="#e3f2fd" // lighter blue
            radius={[4, 4, 0, 0]}
            barSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default React.memo(ProjectionsVsActuals);
