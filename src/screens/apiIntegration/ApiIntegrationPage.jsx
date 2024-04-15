import { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";
import { Button } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { get, patch } from "../../config/axios";

import ApiIntegrationModal from "./ApiIntegrationModal";
import "./ApiIntegration.css";

const ApiIntegrationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userIntegrationsData, setUserIntegrationsData] = useState([]);
  const [apiKey, setApiKey] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const { openSidebar } = useContext(SidebarContext);

  const fetchUserIntegrations = async () => {
    try {
      const response = await get(`/v1/admin/users/integrations`);
      console.log(response?.data);
      setUserIntegrationsData(response?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const rotateApiKey = async (userId) => {
    try {
      const response = await patch(`/v1/admin/users/${userId}/rotate`);
      console.log(response);
      setApiKey(response?.apiKey);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUserIntegrations();
  }, []);

  const handleOpenModal = (userId) => {
    rotateApiKey(userId);
    setIsModalOpen(true);
  };

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

      {userIntegrationsData.map((item, index) => {
        if (
          searchQuery.length === 0 ||
          item?.user?.name.toLowerCase().includes(searchQuery)
        ) {
          return (
            <div className="card" key={index}>
              <div className="user-info">
                <div className="left-section">
                  <p className="question">User Name</p>
                  <p className="answer">{item?.user?.name}</p>
                  <p className="question">Secret Key</p>
                  <p className="answer">*********</p>
                </div>
                <div className="right-section">
                  <p className="question">User ID</p>
                  <p className="answer">{item?.user?.id}</p>
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
                    onClick={() => handleOpenModal(item?.user?.id)}
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

      <ApiIntegrationModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        apiKey={apiKey}
      />
    </div>
  );
};

export default ApiIntegrationPage;
