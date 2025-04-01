import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faMap,
    faClockRotateLeft,
    faBell,
    faGear
  } from "@fortawesome/free-solid-svg-icons";

export const links = [
    {
        name: 'Map',
        icon: <FontAwesomeIcon icon={faMap}/>,
        to: "map"
    },
    {
        name: 'Analytics',
        icon: <FontAwesomeIcon icon={faChartLine}/>,
        to: "analytics"
    },
    {
        name: 'History',
        icon: <FontAwesomeIcon icon={faClockRotateLeft}/>,
        to: "history"
    }
]

export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];