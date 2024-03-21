import React, { useState } from "react";
import "./ApiIntegration.css";
import { FaSearch, FaCopy } from 'react-icons/fa';

const ApiIntegrationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase()); 
  };

  return (
    <div className="content-area">
      <div>
        <h1 className="h1-heading">API Integration</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      
      {data.map((user, index) => {
     
        if (searchQuery.length === 0 || user.name.toLowerCase().includes(searchQuery)) {
          return (
            <div className="card" key={index}>
              <div className="user-info">
                <div className="left-section">
                  <p className="question">User Name</p>
                  <p className="answer">{user.name}</p>
                  <p className="question">Secret Key</p>
                  <p className="answer">*********</p>
                </div>
                <div className="right-section">
                  <p className="question">User ID</p>
                  <p className="answer">{user.id}</p>
                  <button className="copy-button">
                    <FaCopy className="copy-icon" />
                    Copy
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return null; 
        }
      })}
    </div>
  );
};


const data = [
  { name: "John Doe", id: "123456789" },
  { name: "Jane Smith", id: "987654321" },
  { name: "Janu Singh", id: "998654321" }
];

export default ApiIntegrationPage;
