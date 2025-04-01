import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#262626');
    const [currentMode, setCurrentMode] = useState('Light');
    const [settings, setSettings] = useState(false)

    let setMode = (mode) => {
        setCurrentMode(mode.target.value);

        localStorage.setItem('themeMode', mode.target.value)

        setSettings(false)
    }

    let setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color)

        setSettings(false)
    }

    let handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    };

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            setCurrentColor,
            setCurrentMode,
            settings,
            setSettings,
            setColor,
            setMode
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);