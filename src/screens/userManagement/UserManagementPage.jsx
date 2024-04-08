import React, { useState, useContext } from "react";
import Table from "./Table/Table";
import "./UserManagement.css";
import { FaSearch } from 'react-icons/fa';
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";

const UserManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); 
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
        <h2 className="area-top-title">User Management</h2>
      </div>
      <div>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search user here"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="payment-status-container">
        <p onClick={() => handleStatusClick("All")}>All</p>
        <p onClick={() => handleStatusClick("Active")}>Active</p>
        <p onClick={() => handleStatusClick("Inactive")}>Inactive</p>
      </div>

      <Table searchQuery={searchQuery} selectedStatus={selectedStatus} />
    </div>
  );
};

export default UserManagement;
