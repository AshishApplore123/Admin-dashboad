import React, { useState } from "react";
import Table from "./Table/Table";
import "./PaymentPage.css";
import { FaSearch } from 'react-icons/fa';

const PaymentPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); 
  };

  return (
    <div className="content-area">
      <div>
        <h1 className="h1-heading">Payments</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search payment here"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="payment-status-container">
        <p onClick={() => handleStatusClick("All")}>All</p>
        <p onClick={() => handleStatusClick("Completed")}>Completed</p>
        <p onClick={() => handleStatusClick("Pending")}>Pending</p>
        <p onClick={() => handleStatusClick("Failed")}>Failed</p>
      </div>

      <Table searchQuery={searchQuery} selectedStatus={selectedStatus} />
    </div>
  );
};

export default PaymentPage;
