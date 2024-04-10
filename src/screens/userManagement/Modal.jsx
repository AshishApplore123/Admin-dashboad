import React from "react";
import { ToastContainer, toast } from 'react-toastify'; 
import "./Modal.css";
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ onClose, onSubmit, formData, handleInputChange }) => {
  const notify = () => toast.success("User Added successfully"); 
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add User</h3>
        <form onSubmit={onSubmit}>
          <input
            type="name"
            name="name" 
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="password1"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="email1"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="modal-buttons">
            <button type="submit" onClick={notify}>Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
            <ToastContainer 
            position="top-right"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
