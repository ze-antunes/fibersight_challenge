import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Paper from "@mui/material/Paper";

// Dados de exemplo (substituir pelo real)
// Os dados reais não tem grande diferença por isso vou usar estes dados
const data = [
  { time: "10:00", temperature: 22, humidity: 60 },
  { time: "10:10", temperature: 23, humidity: 58 },
  { time: "10:20", temperature: 24, humidity: 57 },
  { time: "10:30", temperature: 25, humidity: 55 },
];

export default function ChartLine({ chartData = data }) {
  return (
    <Paper sx={{ padding: 2, width: "100%", height: 400, boxShadow: "none", background: "none" }}>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" label={{ value: "°C", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "%", angle: -90, position: "insideRight" }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#ff7300" strokeWidth={2} name="Temperatura (°C)" />
          <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#0088ff" strokeWidth={2} name="Humidade (%)" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
