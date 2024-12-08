//Now it's Correct

const { useContext, createContext } = require("react");

const ThemeContext = createContext(null)

const { theme, toggleTheme } = useContext(ThemeContext);

 export default function myContext() {
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
           {/* <Component> */}
        </ThemeContext.Provider>
    )
}
