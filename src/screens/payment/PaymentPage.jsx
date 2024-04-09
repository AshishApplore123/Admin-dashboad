import React, { useState, useEffect, useContext } from "react";
import Table from "./Table/Table";
import "./PaymentPage.css";
import { FaSearch } from 'react-icons/fa';
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";
import Pagination from "./Pagination";
import { get } from '../../config/axios';
import { debounce } from 'lodash';
const PaymentPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDateAndTime, setCurrentDateAndTime] = useState("");
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [error, setError] = useState(null);
  const { openSidebar } = useContext(SidebarContext);
  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };
  const handleSearch = debounce(async (value) => {
    setSearchQuery(value);
    try {
      const response = await get("v1/admin/transactions", {
        query: value
      });
      const data = response?.data;
      setTableData(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  }, 300); // 300ms debounce delay
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let token = localStorage.getItem('token');
      const response = await get("v1/admin/transactions");
      const data = response.data;
      setTableData(data);
      const dateTime = new Date();
      setCurrentDateAndTime(
        `${dateTime.toLocaleDateString("en-GB", { weekday: "short" })} ${dateTime.getDate()} ${dateTime.toLocaleDateString("en-GB", { month: "long" })} ${dateTime.getFullYear()}, ${dateTime.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`
      );
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
            className="search-field"
            type="text"
            placeholder="Search payment here"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <FaSearch className="search-icon1" />
          {currentDateAndTime && <span className="date-time">Last updated at: {currentDateAndTime}</span>}
        </div>
      </div>
      <Table searchQuery={searchQuery} selectedStatus={selectedStatus} tableData={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={tableData?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
export default PaymentPage;