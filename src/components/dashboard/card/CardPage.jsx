import React from "react";
import "./Card.scss";

const CardPage = ({ heading, amount, value, totalUsers }) => {
  const isRising = value > 0;

  return (
    <div className="cards-container">
      <div className="card">
        <p className="heading">Total Users</p>
        <div className="amount-value">
          <p className="amount">{totalUsers}</p>
          {/* <p className="value">+15%</p> */}
        </div>
      </div>

      {/* Add more cards here */}
      {/* <div className="card"> ... </div> */}
      {/* <div className="card"> ... </div> */}
      {/* <div className="card"> ... </div> */}
    </div>
  );
};

export default CardPage;
