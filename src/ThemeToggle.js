import {ThemeContext} from "./ThemeProvider";
import {useContext} from "react";

const ThemeToggle = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className="theme-toggle">
            <button onClick={ changeTheme }>테마 변경</button>
            <span>현재 테마 : { theme }</span>
        </div>
    );
};

export default ThemeToggle;
