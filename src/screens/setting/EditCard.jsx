import React from 'react';
import './EditCard.css';

const EditCard = ({ onClose, handleSubmit, handleChange, firstName, lastName, primaryContact, secondaryContact, email }) => {
  return (
    <div className="edit-card-overlay">
      <div className="edit-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" value={lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="primaryContact">Primary Contact:</label>
            <input type="text" id="primaryContact" value={primaryContact} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="secondaryContact">Secondary Contact:</label>
            <input type="text" id="secondaryContact" value={secondaryContact} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EditCard;
