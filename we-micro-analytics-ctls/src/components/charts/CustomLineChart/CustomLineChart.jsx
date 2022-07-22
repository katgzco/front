import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { brightTurquoise400 } from "../../../utils/constants/StylesConstants";

const CustomLineChart = ({ data }) => {
  return (
    <>
      <LineChart width={730} height={250} data={data}>
        {/* <CartesianGrid strokeDasharray="3" /> */}
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke={brightTurquoise400} />
      </LineChart>
    </>
  );
};

export default CustomLineChart;
