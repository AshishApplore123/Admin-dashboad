import React, { useState, useContext } from "react";
import "./RefundPage.css";
import { FaSearch } from 'react-icons/fa';
import Table from "./Table/Table";
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";

const RefundPage = () => {
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
        <h2 className="area-top-title">Refund & Disputes</h2>
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
