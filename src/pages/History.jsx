import React from "react";
import { HistoryDataTable } from "../components";

const History = () => {
  return (
    <div className="flex w-full h-4/5 gap-6 px-6 py-4">
      <div className="w-full bg-main-bg dark:bg-main-dark-bg text-main-text-color dark:text-main-text-color-dark rounded-lg shadow-lg p-4 ml-4">
        <h2 className="font-semibold text-xl mb-4">History Data Table</h2>
        <div className="rounded-lg overflow-hidden">
          <HistoryDataTable />
        </div>
      </div>
    </div>
  );
};

export default History;
