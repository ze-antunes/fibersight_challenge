import React from "react";

const MapLegend = () => {
  return (
    <div className="p-4 bg-secondary-bg dark:bg-secondary-dark-bg rounded-lg shadow-lg w-full">
      <div className="flex gap-6 text-sm">
        <div className="flex items-center">
          <span className="w-6 h-3 bg-blue-700 block mr-2"></span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Below 15°C
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-6 h-3 bg-sky-400 block mr-2"></span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            15°C - 25°C
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-6 h-3 bg-orange-500 block mr-2"></span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            25°C - 35°C
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-6 h-3 bg-red-600 block mr-2"></span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Above 35°C
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
