import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
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
import logo from "../assets/images/logo192.png";
import { useStateContext } from "../contexts/ContextProvider";

let NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      className="relative text-xl rounded-full w-9 px-2 py-1 hover:bg-[#6200EE] hover:text-[#E1E1E1]"
    >
      {icon}
    </button>
  </TooltipComponent>
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
    currentColor
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
    <div className="flex items-center justify-between px-10 py-2 relative bg-white">
      <div className="flex gap-8">
        <NavLink to="/">
          <img src={logo} alt="FiberSight" width="100" height="auto" />
        </NavLink>
        <div className="flex gap-4">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={"/" + item.to}
              className="flex items-center gap-1 px-2 py-1 rounded-md font-medium hover:bg-[#6200EE] hover:text-[#E1E1E1]"
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <NavButton
          title="Notification"
          dotColor="#262626"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<FontAwesomeIcon icon={faBell} />}
        />
        <NavButton
          title="Settings"
          dotColor="#262626"
          customFunc={() => handleClick(setSettings(true))}
          color={currentColor}
          icon={<FontAwesomeIcon icon={faGear} />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-[#6200EE] hover:text-[#E1E1E1] rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-14">Hi, </span>{" "}
              <span className="font-bold text-14">José</span>
            </p>
            <MdKeyboardArrowDown className="text-14" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Header;
