import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";

const Navbar = ({ onButtonClick }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white border-gray-600" : "bg-gray-100 text-gray-900 border-gray-300"
      } border-b p-4 flex justify-between items-center ml-3 transition-colors duration-300`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-gray-900"
        } text-2xl font-semibold`}
      >
        Dashboard
      </h1>
      <button
        className={`${
          theme === "dark" ? "text-white" : "text-gray-900"
        } text-2xl`}
        onClick={() => {
          onButtonClick(); 
          toggleTheme();  
        }}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default Navbar;
