import { useState, useEffect, useContext } from "react";
import Table from "./Table/Table";
import "./PaymentPage.css";
import { FaSearch } from "react-icons/fa";
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";
import Pagination from "./Pagination";
import { get } from "../../config/axios";
import { debounce } from "lodash";
const PaymentPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDateAndTime, setCurrentDateAndTime] = useState("");
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginationInfo, setPaginationInfo] = useState({
    count: 0,
    totalPages: 0,
  });
  const [error, setError] = useState(null);
  const { openSidebar } = useContext(SidebarContext);

  const fetchData = async () => {
    try {
      const response = await get("v1/admin/transactions", {
        query: searchQuery,
        page: currentPage,
        perPage: itemsPerPage,
      });

      const responseData = response?.data;

      if (currentPage === 1) {
        setTableData(responseData);
      } else {
        setTableData((prevData) => [...prevData, ...responseData]);
      }

      setPaginationInfo({
        count: response?.meta?.pagination?.count,
        totalPages: response?.meta?.pagination?.totalPages,
      });

      const dateTime = new Date();
      setCurrentDateAndTime(
        `${dateTime.toLocaleDateString("en-GB", {
          weekday: "short",
        })} ${dateTime.getDate()} ${dateTime.toLocaleDateString("en-GB", {
          month: "long",
        })} ${dateTime.getFullYear()}, ${dateTime.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}`
      );
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery, currentPage]);

  const handleSearch = debounce((value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, 30);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            className="search-field"
            type="text"
            placeholder="Search payment here"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <FaSearch className="search-icon1" />
          {currentDateAndTime && (
            <span className="date-time">
              Last updated at: {currentDateAndTime}
            </span>
          )}
        </div>
      </div>
      <Table
        searchQuery={searchQuery}
        selectedStatus={selectedStatus}
        tableData={currentItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
      {currentItems.length ? (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={paginationInfo?.totalPages}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : null}
    </div>
  );
};
export default PaymentPage;
