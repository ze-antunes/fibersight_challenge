import React from "react";
import { ChartLine, TrendsChart } from "../components/Charts";
import { DataTable, FiberMap, MapLegend } from "../components";
import fiberData from "../data/fiber_data.json";

const latestData = fiberData[fiberData.length - 1]?.positions || [];

// Calcular a média da temperatura
const totalTemperature = latestData.reduce(
  (acc, item) => acc + item.temperature,
  0
);
const averageTemperature = totalTemperature / latestData.length;

// Encontrar o valor máximo e mínimo da temperatura
const maxTemperature = Math.max(...latestData.map((item) => item.temperature));
const minTemperature = Math.min(...latestData.map((item) => item.temperature));

const Analytics = () => {
  return (
    <div className="flex w-full h-4/5 gap-6 px-6 py-4">
      <div className="flex flex-col w-1/2 gap-6">
        <div className="bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 ml-4">
          <h2 className="font-semibold text-xl mb-4">Averages and Extremes</h2>
          <div className="flex gap-6">
            <div className="w-1/3 px-4 py-2 bg-secondary-bg dark:bg-[#363636] rounded-lg shadow-lg">
              <h3 className="font-semibold">Temperature</h3>
              <ul>
                <li>Average: {averageTemperature.toFixed(2)} Cº</li>
                <li>Max: {maxTemperature} Cº</li>
                <li>Min: {minTemperature} Cº</li>
              </ul>
            </div>
            <div className="w-1/3 px-4 py-2 bg-secondary-bg dark:bg-[#363636] rounded-lg shadow-lg">
              <h3 className="font-semibold">Humidity</h3>
              <ul>
                <li>Average: {fiberData.length} %</li>
                <li>Max: {fiberData.length} %</li>
                <li>Min: {fiberData.length} %</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 ml-4">
          <h2 className="font-semibold text-xl mb-4">Tendencies</h2>
          <TrendsChart />
        </div>
        <div className="h-fit bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 ml-4">
          <h2 className="font-semibold text-xl mb-4">Data Table</h2>
          <DataTable />
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-6">
        <div className="h-fit bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 mr-4">
          <h2 className="font-semibold text-xl mb-4">Line Chart</h2>
          <ChartLine />
        </div>
        <div className="h-full bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 mr-4">
          <h2 className="font-semibold text-xl mb-4">Fiber Map</h2>
          <div className="rounded-lg shadow-lg overflow-hidden mb-4">
            <FiberMap height={"540"} />
          </div>
          <MapLegend />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
