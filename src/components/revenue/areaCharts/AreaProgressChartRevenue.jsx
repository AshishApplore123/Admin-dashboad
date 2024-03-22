import React from "react";
import "./AreaProgressChartRevenue.scss"; // Make sure to import your CSS file

const data = [
  {
    id: 1,
    name: "Monthly",
    percentValues: 2000,
  },
  {
    id: 2,
    name: "Yearly",
    percentValues: 2000,
  },
];

const AreaProgressChartRevenue = () => {
  return (
    <div className="progress-chart-container">
      <div className="progress-chart-card">
        <h4 className="card-title">Subscription wise earning</h4>
        <div className="card-list">
          {data?.map((item) => (
            <div className="card-item" key={item.id}>
              <p className="item-name">{item.name}</p>
              <p className="item-value">{item.percentValues}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="progress-chart-card">
        <h4 className="card-title">Subscription wise earning</h4>
        <div className="card-list">
          {data?.map((item) => (
            <div className="card-item" key={item.id}>
              <p className="item-name">{item.name}</p>
              <p className="item-value">{item.percentValues}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AreaProgressChartRevenue;
