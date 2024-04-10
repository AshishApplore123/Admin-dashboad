// UserManagement.js

import React, { useState, useContext } from "react";
import Table from "./Table/Table";
import "./UserManagement.css";
import { FaSearch, FaFilter } from 'react-icons/fa';
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";
import Modal from "./Modal";
import 'react-toastify/dist/ReactToastify.css';

const Popover = ({ onSelectOption, onClose }) => {
  return (
    <div className="popover">
      <div className="popover-option" onClick={() => onSelectOption("All")}>All</div>
      <div className="popover-option" onClick={() => onSelectOption("Active")}>Active</div>
      <div className="popover-option" onClick={() => onSelectOption("Inactive")}>Inactive</div>
    </div>
  );
};
const UserManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", password: "", email: "" });
  const [selectedFilterOption,setSelectedFilterOption]=useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData);
    setFormData({ name: "", password: "", email: "" });
    setIsModalOpen(false);
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
            style={{marginTop:"12px"}}
            type="text"
            placeholder="Search user here"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="filter-button" onClick={handleFilterClick}>
            <FaFilter />
          </button>
           <button className="add-button" onClick={handleAddButtonClick}>Add</button>
           
          <FaSearch className="search-icon1"  style={{marginTop:"5px"}}/>
        </div>
        {isPopoverOpen && (
          <Popover onSelectOption={handleSelectOption} onClose={() => setIsPopoverOpen(false)} />
        )}
        {isModalOpen && (
          <Modal
            onClose={handleModalClose}
            onSubmit={handleSubmit}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
      </div>

      <Table searchQuery={searchQuery} selectedStatus={selectedStatus} />
    </div>
  );
};

export default UserManagement;
