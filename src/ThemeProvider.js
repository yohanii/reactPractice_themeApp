import {createContext, useState} from "react";
import useLocalStorage from "./useLocalStorage";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    // const [theme, setTheme] = useState("light");
    const [theme, setTheme] = useLocalStorage("theme", "light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };