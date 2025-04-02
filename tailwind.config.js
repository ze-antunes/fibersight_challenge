module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Roboto"],
      body: ["Roboto"]
    },
    extend: {
      fontSize: {
        14: "14px"
      },
      textColor: {
        "main-text-color": "#121212",
        "main-text-color-dark": "#FFFFFF"
      },
      backgroundColor: {
        "main-bg": "#FFFFFF",
        "main-dark-bg": "#292929",
        "secondary-bg": "#E5E5E5",
        "secondary-dark-bg": "#121212",
        "primary": "#6200EE",
        "primary-dark": "#BB86FC",
        "primary-variant": "#3700B3",
        "secondary": "#03DAC6",
        "secondary-variant": "#018786",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)"
      },
      borderWidth: {
        1: "1px"
      },
      borderColor: {
        "main-border-color": "#121212", 
        "main-border-color-dark": "#FFFFFF",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px"
      },
      height: {
        80: "80px"
      },
      minHeight: {
        590: "590px"
      }
    }
  },
  plugins: []
};
