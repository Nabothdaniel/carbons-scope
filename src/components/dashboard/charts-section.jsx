import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import EmissionSource from "./emssion-source";

const dailyData = [
  { date: "Mon", emissions: 40 },
  { date: "Tue", emissions: 60 },
  { date: "Wed", emissions: 50 },
  { date: "Thu", emissions: 80 },
  { date: "Fri", emissions: 90 },
  { date: "Sat", emissions: 30 },
  { date: "Sun", emissions: 70 },
];

const weeklyData = [
  { date: "Week 1", emissions: 400 },
  { date: "Week 2", emissions: 480 },
  { date: "Week 3", emissions: 390 },
  { date: "Week 4", emissions: 510 },
];

const monthlyData = [
  { date: "Jan", emissions: 1600 },
  { date: "Feb", emissions: 1500 },
  { date: "Mar", emissions: 1800 },
  { date: "Apr", emissions: 1700 },
  { date: "May", emissions: 1650 },
  { date: "Jun", emissions: 1900 },
  { date: "Jul", emissions: 1750 },
];

const ChartsSection = () => {
  const [range, setRange] = useState("daily");

  const getChartData = () => {
    switch (range) {
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      default:
        return dailyData;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
      {/* Emissions Trend Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Emissions Trend</h3>
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="text-sm border border-gray-300 rounded px-2 py-1 text-gray-700"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={getChartData()} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis unit=" tCO₂e" />
              <Tooltip />
              <Line type="monotone" dataKey="emissions" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Emission Source Summary */}
      <EmissionSource />
    </div>
  );
};

export default ChartsSection;
