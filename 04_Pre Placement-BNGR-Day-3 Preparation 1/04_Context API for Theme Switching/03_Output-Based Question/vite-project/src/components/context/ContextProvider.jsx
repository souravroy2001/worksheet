import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggle = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute( //This Complete part I was taken help from Google.
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggle, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// It's not original I was taken help from Google.
