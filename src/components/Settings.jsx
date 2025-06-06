/* eslint-disable eqeqeq */
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const Settings = () => {
  let { setMode, currentMode, setSettings } =
    useStateContext();

  return (
    <div
      onClick={() => setSettings(false)}
      className="bg-half-transparent w-screen fixed nav-item top-0 right-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="float-right h-screen text-main-text-color dark:text-main-text-color-dark bg-main-bg dark:bg-main-dark-bg w-400"
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            onClick={() => setSettings(false)}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3  hover:drop-shadow-xl hover:bg-main-dark-bg dark:hover:bg-main-bg"
          >
            <MdOutlineCancel className="text-main-text-color dark:text-main-text-color-dark hover:text-main-text-color-dark dark:hover:text-main-text-color" />
          </button>
        </div>
        <div className="flex-col border-t-1 border-main-border-color dark:border-main-border-color-dark p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode == "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode == "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
