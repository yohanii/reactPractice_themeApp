import './App.css';
import NameBook from "./NameBook";
import {ThemeProvider} from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

function App() {

    return (
        <div className="App">
            <ThemeProvider>
                <h1>이름 날짜 출력</h1>
                <NameBook />
                <ThemeToggle />
            </ThemeProvider>
        </div>
    );
}

export default App;
