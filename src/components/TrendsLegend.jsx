import React from "react";

const TrendsLegend = () => {
  return (
    <div className="mt-4 bg-secondary-bg dark:bg-secondary-dark-bg p-3 rounded-lg shadow-md">
      <div className="flex gap-6 text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></span>
          <span className="text-gray-700 dark:text-gray-300">Increase in trend</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-2"></span>
          <span className="text-gray-700 dark:text-gray-300">Fall in trend</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-2"></span>
          <span className="text-gray-700 dark:text-gray-300">Stability</span>
        </div>
      </div>
    </div>
  );
};

export default TrendsLegend;