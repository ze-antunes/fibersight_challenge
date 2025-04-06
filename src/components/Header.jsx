import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faMap,
  faClockRotateLeft,
  faBell,
  faGear
} from "@fortawesome/free-solid-svg-icons";

import avatar from "../data/avatar.jpg";
import { links } from "../data/content";
import logoWhite from "../assets/images/logo_white.svg";
import logoBlack from "../assets/images/logo_black.svg";
import { useStateContext } from "../contexts/ContextProvider";

let NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    className="relative text-xl rounded-full w-9 px-2 py-1 text-main-text-color hover:bg-primary hover:text-main-text-color-dark dark:text-main-text-color-dark dark:hover:bg-primary-dark dark:hover:text-main-text-color"
  >
    {icon}
  </button>
);

const Header = () => {
  let {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    setSettings,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    currentMode
  } = useStateContext();

  useEffect(() => {
    let handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex items-center justify-between px-10 py-2 relative bg-main-bg dark:bg-main-dark-bg">
      <div className="flex gap-8">
        <NavLink to="/">
          <img
            src={currentMode === "Dark" ? logoWhite : logoBlack}
            alt="FiberSight"
            width="100"
            height="auto"
          />
        </NavLink>
        <div className="flex gap-4">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={"/" + item.to}
              className="flex items-center gap-1 px-2 py-1 rounded-md font-medium text-main-text-color hover:bg-primary hover:text-main-text-color-dark dark:text-main-text-color-dark dark:hover:bg-primary-dark dark:hover:text-main-text-color"
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          icon={<FontAwesomeIcon icon={faBell} />}
        />
        <NavButton
          title="Settings"
          customFunc={() => handleClick(setSettings(true))}
          icon={<FontAwesomeIcon icon={faGear} />}
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 text-main-text-color hover:bg-primary hover:text-main-text-color-dark dark:text-main-text-color-dark dark:hover:bg-primary-dark dark:hover:text-main-text-color rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
          <p>
            <span className="text-14">Hi, </span>{" "}
            <span className="font-bold text-14">José</span>
          </p>
          <MdKeyboardArrowDown className="text-14" />
        </div>
      </div>
    </div>
  );
};

export default Header;
