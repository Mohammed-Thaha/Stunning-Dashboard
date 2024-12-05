import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeContextProvider from "./components/context/ThemeContextProvider";
import { useState } from "react";
function App() {
  const [themeMode, setThemeMode] = useState(0); 

  const toggleThemeMode = () => {
    setThemeMode(themeMode === 0 ? 1 : 0); 
  };
  
  return (
    <ThemeContextProvider>
      <div className={`flex ${themeMode === 1 ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        <Sidebar />
        <div className= {`grow ml-10 md:ml-64 h-full lg:h-screen ${themeMode === 1 ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
        >
         <Navbar onButtonClick={toggleThemeMode} />
          <Dashboard />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
