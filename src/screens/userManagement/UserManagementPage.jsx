// UserManagement.js
import { useState, useContext, useEffect } from "react";

import { FaSearch, FaFilter } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

import { SidebarContext } from "../../context/SidebarContext";
import { get, post } from "../../config/axios";
import Table from "./Table/Table";
import Modal from "./Modal";

import "./UserManagement.css";
import { toast } from "react-toastify";

const Popover = ({ onSelectOption, onClose }) => {
  return (
    <div className="popover">
      <div className="popover-option" onClick={() => onSelectOption("All")}>
        All
      </div>
      <div className="popover-option" onClick={() => onSelectOption("Active")}>
        Active
      </div>
      <div
        className="popover-option"
        onClick={() => onSelectOption("Inactive")}
      >
        Inactive
      </div>
    </div>
  );
};

const UserManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [selectedFilterOption, setSelectedFilterOption] = useState("");
  const [tableData, setTableData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await get("/v1/admin/users");
      // console.log(response?.data);
      const data = response?.data;
      // setTableData((prev) => [...prev, ...data]);
      setTableData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const notify = () => toast("Wow so easy!");

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectOption = (option) => {
    setSelectedFilterOption(option);
    setIsPopoverOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Handle form submission
      const response = await post("/v1/admin/users/create", formData);
      const newUser = response?.data?.user;

      // Update table data with the newly created user
      setTableData([...tableData, newUser]);

      toast.success("Successfully added new user.");

      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      console.log(error.message);
    }
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
            style={{ marginTop: "12px" }}
            type="text"
            placeholder="Search user here"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="filter-button" onClick={handleFilterClick}>
            <FaFilter />
          </button>
          <button className="add-button" onClick={handleAddButtonClick}>
            Add
          </button>

          <FaSearch className="search-icon1" style={{ marginTop: "5px" }} />
        </div>
        {isPopoverOpen && (
          <Popover
            onSelectOption={handleSelectOption}
            onClose={() => setIsPopoverOpen(false)}
          />
        )}
        {isModalOpen && (
          <Modal
            onClose={handleModalClose}
            onSubmit={handleSubmit}
            formData={formData}
            handleInputChange={handleInputChange}
            isUpdating={false}
          />
        )}
      </div>

      <Table
        tableData={tableData}
        searchQuery={searchQuery}
        selectedStatus={selectedStatus}
        onUpdateTableData={setTableData}
      />
    </div>
  );
};

export default UserManagement;
