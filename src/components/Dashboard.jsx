import { FaBox, FaCog, FaShoppingCart, FaUsers } from "react-icons/fa";
import Card from "./Card";
import { dataLine, dataBar } from "../assets/chartData";
import { Line, Bar } from "react-chartjs-2";
import { Chart as Chartjs, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";

Chartjs.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <h2 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Dashboard</h2>
      
      {/* Cards */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
        <Card icon={<FaShoppingCart />} title="Orders" value="140" />
        <Card icon={<FaBox />} title="Products" value="120" />
        <Card icon={<FaUsers />} title="Users" value="30" />
        <Card icon={<FaCog />} title="Settings" value="11" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          } p-4 rounded-lg shadow-md`}
        >
          <h3 className="text-xl font-semibold mb-4">Sales Data</h3>
          <Line data={dataLine} />
        </div>
        
        <div
          className={`${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          } p-4 rounded-lg shadow-md`}
        >
          <h3 className="text-lg font-semibold mb-4">Products Data</h3>
          <Bar data={dataBar} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
