import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider"; // Assuming the path is correct

const Card = ({ icon, title, value }) => {
  const { theme } = useContext(ThemeContext); // Get the current theme from context

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-white shadow-lg"
          : "bg-white text-dark shadow-md"
      } p-4 rounded-lg flex items-center space-x-6 transition-colors duration-300`}
    >
      <div className="text-3xl text-gray-500">{icon}</div>
      <div>
        <h2
          className={`text-lg font-semibold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-xl ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Card;

