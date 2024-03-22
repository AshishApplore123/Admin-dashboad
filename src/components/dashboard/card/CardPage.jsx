import React from "react";
import "./Card.scss"; // Import CSS file for styling

const CardPage = ({ heading, amount, value }) => {
  // Determine if the value has risen or fallen
  const isRising = value > 0;

  return (
    <div className="cards-container">
      <div className="card">
        <p className="heading">New User</p>
        <div className="amount-value">
          <p className="amount">1000</p>
          <p className="value">+15%</p>
        </div>
      </div>
      <div className="card">
        <p className="heading">New User</p>
        <div className="amount-value">
          <p className="amount">1000</p>
          <p className="value">+15%</p>
        </div>
      </div>
      <div className="card">
        <p className="heading">New User</p>
        <div className="amount-value">
          <p className="amount">1000</p>
          <p className="value">+15%</p>
        </div>
      </div>
      <div className="card">
        <p className="heading">New User</p>
        <div className="amount-value">
          <p className="amount">1000</p>
          <p className="value">+15%</p>
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
