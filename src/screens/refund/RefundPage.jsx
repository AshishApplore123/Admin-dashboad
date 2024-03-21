import React from "react";
import "./RefundPage.css";
import { FaSearch } from 'react-icons/fa';
import Table from "./Table/Table";

const RefundPage = () => {
  return (
    <div className="content-area">
      <div className="header">
        <h1 className="h1-heading">Refund & Disputes</h1>
      </div>
      <div className="button-search-container">
        <div className="button-container">
          <button className="button">Refunds</button>
          <button className="button">Disputes</button>
        </div>
        <div className="input-container"> 
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default RefundPage;
