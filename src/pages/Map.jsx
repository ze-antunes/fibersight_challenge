import React from "react";
import { FiberMap } from "../components";

const Map = () => {
  return (
    <div className="flex w-full h-4/5 gap-6 px-6 py-4">
      <div className="flex flex-col w-1/2 gap-6">
        <div className="bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 ml-4">
          <h2 className="font-semibold text-xl mb-4">FiberMap</h2>
          <div className="bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg overflow-hidden">
            <FiberMap />
          </div>
        </div>
        <div className="bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 ml-4">
          Chart
        </div>
      </div>
      <div className="w-1/2">
        <div className="h-full bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 mr-4">
          Sensor List
        </div>
      </div>
    </div>
  );
};

export default Map;
