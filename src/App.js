import "./App.css";
import Home from "./Home/Home";
import "react-circular-progressbar/dist/styles.css";
import { useState, createContext } from "react";

export const ThemeContext = createContext({});
function App() {

  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
        setDark(!dark)
  }


  return (
    <ThemeContext.Provider value={{dark, setDark, toggleTheme}}>
      <div
        className={`container-fluid pb-5 px-4 ${
          dark ? "darkTheme" : "lightTheme"
        }`}
      >
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
