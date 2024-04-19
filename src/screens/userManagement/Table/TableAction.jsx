import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { HiDotsHorizontal } from "react-icons/hi";

import { patch } from "../../../config/axios";

import Modal from "../Modal";
import Prompt from "../../../components/common/Prompt";

const TableAction = ({ currentUser, onUpdateTableData }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisableUserPromptOpen, setIsDisableUserPromptOpen] = useState(false);
  const [isEnableUserPromptOpen, setIsEnableUserPromptOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser?.name,
    password: "",
    phoneNumber: "",
    status: 1,
  });

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleUpdateButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDisablePromptClose = () => {
    setIsDisableUserPromptOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDisableUser = async () => {
    try {
      await patch(`/v1/admin/users/${currentUser?.id}`, { status: 0 });
      onUpdateTableData((prevTableData) =>
        prevTableData.map((user) =>
          user.id === currentUser.id ? { ...user, ...formData } : user
        )
      );

      toast.success("User disabled successfully.");
      setIsDisableUserPromptOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEnableUser = async () => {
    try {
      await patch(`/v1/admin/users/${currentUser?.id}`, { status: 1 });
      onUpdateTableData((prevTableData) =>
        prevTableData.map((user) =>
          user.id === currentUser.id ? { ...user, ...formData } : user
        )
      );

      toast.success("User enabled successfully.");
      setIsEnableUserPromptOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await patch(`/v1/admin/users/${currentUser?.id}`, formData);

      onUpdateTableData((prevTableData) =>
        prevTableData.map((user) =>
          user.id === currentUser.id ? { ...user, ...formData } : user
        )
      );

      toast.success("User updated successfully.");
      setIsModalOpen(false);
    } catch (error) {
      console.log(error.message);
      toast.error("Not able to update user. Please try again.");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list">
              <li className="dropdown-menu-item">
                <button
                  onClick={handleUpdateButtonClick}
                  className="dropdown-menu-link"
                >
                  Update
                </button>
              </li>
              <li className="dropdown-menu-item">
                <button
                  onClick={() => setIsDisableUserPromptOpen(true)}
                  className="dropdown-menu-link"
                >
                  Disable
                </button>
              </li>
              <li className="dropdown-menu-item">
                <button
                  onClick={() => setIsEnableUserPromptOpen(true)}
                  className="dropdown-menu-link"
                >
                  Enable
                </button>
              </li>
            </ul>
          </div>
        )}
      </button>

      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          onSubmit={handleSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
          isUpdating={true}
        />
      )}

      {isDisableUserPromptOpen && (
        <Prompt
          open={() => setIsDisableUserPromptOpen(false)}
          onClose={handleDisablePromptClose}
          onConfirm={handleDisableUser}
          text={`Are you sure you want to disable user: ${currentUser?.name}?`}
        />
      )}

      {isEnableUserPromptOpen && (
        <Prompt
          open={() => setIsEnableUserPromptOpen(false)}
          onClose={() => setIsEnableUserPromptOpen(false)}
          onConfirm={handleEnableUser}
          text={`Are you sure you want to enable user: ${currentUser?.name}?`}
        />
      )}
    </>
  );
};

export default TableAction;
