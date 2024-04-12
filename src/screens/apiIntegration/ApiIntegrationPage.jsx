import { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";
import { Button } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ApiIntegrationModal from "./ApiIntegrationModal";
import "./ApiIntegration.css";

const ApiIntegrationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const { openSidebar } = useContext(SidebarContext);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <h2 className="area-top-title">API Integration</h2>
      </div>
      <div>
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
        if (
          searchQuery.length === 0 ||
          user.name.toLowerCase().includes(searchQuery)
        ) {
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
                  <Button
                    variant="outlined"
                    endIcon={<AutorenewIcon sx={{ color: "inherit" }} />}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#0051B7",
                        color: "white",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      },
                    }}
                    onClick={handleOpenModal}
                  >
                    Rotate Key
                  </Button>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}

      <ApiIntegrationModal open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

const data = [
  { name: "John Doe", id: "123456789" },
  { name: "Jane Smith", id: "987654321" },
  { name: "Janu Singh", id: "998654321" },
];

export default ApiIntegrationPage;
