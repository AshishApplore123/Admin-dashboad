import React, { useState, useEffect, useContext } from "react";
import Table from "./Table/Table";
import "./PaymentPage.css";
import { FaSearch } from 'react-icons/fa';
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";

const PaymentPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDateAndTime, setCurrentDateAndTime] = useState("");
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); 
  };

  const { openSidebar } = useContext(SidebarContext);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data only once when the component mounts

  const fetchData = async () => {
    try {
      let token = localStorage.getItem('token');
      const response = await fetch("https://pg-wrapper.applore.in/v1/admin/transactions", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized: Please check your authentication credentials.");
        } else {
          throw new Error("Failed to fetch data");
        }
      }

      const data = await response.json();
      setTableData(data.data); 

      // Extract date and time from fetched data and set it to currentDateAndTime
      if (data && data.data.length > 0) {
        const firstDataItem = data.data[0]; // Assuming date and time is in the first data item
        const dateTime = new Date(firstDataItem.createdAt);
        setCurrentDateAndTime(
          `${dateTime.toLocaleDateString("en-GB", { weekday: "short" })} ${dateTime.getDate()} ${dateTime.toLocaleDateString("en-GB", { month: "long" })} ${dateTime.getFullYear()}, ${dateTime.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`
        );
      }
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        <h2 className="area-top-title">Payments</h2>
      </div>
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search payment here"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="search-icon" />
          {currentDateAndTime && <span className="date-time">Last Updated At: {currentDateAndTime}</span>}
        </div>
      </div>

      <div className="payment-status-container">
        <p onClick={() => handleStatusClick("All")}>All</p>
        <p onClick={() => handleStatusClick("Completed")}>Completed</p>
        <p onClick={() => handleStatusClick("Pending")}>Pending</p>
        <p onClick={() => handleStatusClick("Failed")}>Failed</p>
      </div>

      <Table searchQuery={searchQuery} selectedStatus={selectedStatus} tableData={tableData} />
    </div>
  );
};

export default PaymentPage;
