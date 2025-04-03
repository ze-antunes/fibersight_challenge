import React from "react";
import { FiberMap, DataTable, MapLegend } from "../components";
import { FiberTemperatureChart } from "../components/Charts";

const Map = () => {
  return (
    <div className="flex flex-col w-full h-4/5 gap-6 px-6 py-4">
      <div className="flex w-full gap-6">
        <div className="flex flex-col w-1/2 gap-6">
          <div className="h-full bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 ml-4">
            <h2 className="font-semibold text-xl mb-4">FiberMap</h2>
            <div className="rounded-lg shadow-lg overflow-hidden mb-4">
              <FiberMap height={"450"} />
            </div>
            <MapLegend />
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-full bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 mr-4">
            <h2 className="font-semibold text-xl mb-4">Data Table</h2>
            <DataTable />
          </div>
        </div>
      </div>
      <div className="flex w-full gap-6">
        <div className="w-full h-fit mx-4 bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4">
          <FiberTemperatureChart />
        </div>
      </div>
    </div>
  );
};

export default Map;
