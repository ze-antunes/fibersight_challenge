import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Settings from "./components/Settings";
import { Analytics, History, Map } from "./pages";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  let {
    settings,
    currentMode
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-secondary-dark-bg">
          <div
            className={`dark:bg-secondary-dark-bg bg-secondary-bg min-h-screen w-full`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Header />
            </div>

            <div>
              {settings && <Settings />}

              <Routes>
                <Route path="/" element={<Map />} />
                <Route path="/map" element={<Map />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
