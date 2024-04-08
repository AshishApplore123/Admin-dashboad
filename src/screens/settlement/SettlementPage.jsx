import React, { useState, useContext } from "react";
import Table from "./Table/Table";
import "./Settlement.css";
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";


const SettlementPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); 
  };

  const handleReset = () => {
    setSearchQuery(""); 
  };

  const handleExportExcel = () => {
    
  };
  const { openSidebar } = useContext(SidebarContext);
  return (
    <div className="content-area">
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Settlements</h2>
      </div>
      
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Select Data Range"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <button className="search-but" onClick={handleReset}>
           Search
        </button>
        <button className="search-button" onClick={handleReset}>
           Reset
        </button>
        <button className="export-button" onClick={handleExportExcel}>
          Export to Excel
        </button>
      </div>

      <div className="payment-status-container">
        <p >PayIn Settlement</p>
        <p >PayOut Settlement</p>
      </div>

      <Table searchQuery={searchQuery} selectedStatus={selectedStatus} />
    </div>
  );
};

export default SettlementPage;
