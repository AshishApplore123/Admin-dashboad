import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  {
    id: 1,
    name: "Successful",
    percentValues: 70,
    color: "#FF8042",
  },
  {
    id: 2,
    name: "Pending",
    percentValues: 40,
    color: "#0088FE",
  },
  {
    id: 3,
    name: "Failed",
    percentValues: 60,
    color: "#00C49F",
  },
];

const COLORS = ["#FF8042", "#0088FE", "#00C49F"];

const AreaProgressChart = () => {
  return (
    <div className="progress-card">
      <div className="progress-card-heading">
        <h4 className="progress-card-title">Total Transactions</h4>
      </div>
      <div className="progress-card-pie">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              dataKey="percentValues"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="progress-card-categories">
        {data.map((category) => (
          <div key={category.id} className="progress-card-category">
            <p className="category-name" style={{ marginBottom: "12px" }}>{category.name}</p>
            {/* <p className="category-value">{category.percentValues}%</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaProgressChart;
