import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import fiberData from "../../data/fiber_data.json"; 
import TrendsLegend from "../TrendsLegend";

const calculatePercentageChange = (current, previous) => {
  if (!previous) return 0;
  return ((current - previous) / previous) * 100;
};

const TrendsChart = () => {
  const [trendData, setTrendData] = useState([]);
  const [last30minChange, setLast30minChange] = useState(0);
  const [last1hChange, setLast1hChange] = useState(0);
  const [last24hChange, setLast24hChange] = useState(0);

  useEffect(() => {
    const historicalData = fiberData.slice(-1440); // Supondo 1 ponto por minuto
    
    if (historicalData.length === 0) return;
    
    const latest = historicalData[historicalData.length - 1].timestamp;
    const min30 = historicalData[Math.max(historicalData.length - 30, 0)]?.timestamp;
    const min60 = historicalData[Math.max(historicalData.length - 60, 0)]?.timestamp;
    const min24h = historicalData[0]?.timestamp; // Primeiro dado (24h atrás)

    setLast30minChange(calculatePercentageChange(latest, min30));
    setLast1hChange(calculatePercentageChange(latest, min60));
    setLast24hChange(calculatePercentageChange(latest, min24h));
    
    
    // Preparar dados para o gráfico
    const formattedData = historicalData.map((data, index) => ({
      time: `${index} min`,
      value: data.positions[0].temperature.toFixed(2), // Comparando com 24h atrás
    }));
    
    console.log(formattedData);

    setTrendData(formattedData);
  }, []);

  return (
    <div className="p-4 bg-main-bg dark:bg-main-dark-bg rounded-lg">
      <div className="flex gap-4 mb-4">
        <div className={`px-3 py-1 rounded-lg ${last30minChange >= 0 ? "bg-green-500" : "bg-red-500"} text-white`}>
          30 min: {last30minChange.toFixed(1)}%
        </div>
        <div className={`px-3 py-1 rounded-lg ${last1hChange >= 0 ? "bg-green-500" : "bg-red-500"} text-white`}>
          1h: {last1hChange.toFixed(1)}%
        </div>
        <div className={`px-3 py-1 rounded-lg ${last24hChange >= 0 ? "bg-green-500" : "bg-red-500"} text-white`}>
          24h: {last24hChange.toFixed(1)}%
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={trendData}>
          <XAxis dataKey="time" hide />
          <YAxis domain={["auto", "auto"]} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <TrendsLegend />
    </div>
  );
};

export default TrendsChart;
