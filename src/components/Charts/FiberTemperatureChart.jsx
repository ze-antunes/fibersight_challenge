import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import fiberData from "../../data/fiber_data.json";

const getColorFromTemperature = (temp) => {
    if (temp < 15) return "#0000FF"; // Azul para frio
    if (temp < 25) return "#00BFFF"; // Azul-claro
    if (temp < 35) return "#FFA500"; // Laranja
    return "#FF0000"; // Vermelho quente
  };

const FiberTemperatureChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Dados mais recentes
    const latestData = fiberData[fiberData.length - 1]?.positions || [];

    // Criar dados com base no metro
    const data = latestData.map((pos, index) => ({
      meter: pos.meter,
      temperature: pos.temperature.toFixed(2),
    }));

    setChartData(data);
  }, []);

  return (
    <div className="w-full h-96 bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg p-4">
      <h2 className="font-semibold text-xl mb-4">Fiber Temperature per Meter</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="meter" label={{ value: "Distância (m)", position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: "Temperatura (°C)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#ff7300" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FiberTemperatureChart;
