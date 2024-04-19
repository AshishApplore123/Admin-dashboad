import "./Modal.css";

const Modal = ({
  onClose,
  onSubmit,
  formData,
  handleInputChange,
  isUpdating,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{!isUpdating ? "Add User" : "Update User"}</h3>
        <form onSubmit={onSubmit}>
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={formData?.name}
            onChange={handleInputChange}
          />
          <input
            type="password1"
            name="password"
            placeholder="Password"
            value={formData?.password}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData?.phoneNumber}
            onChange={handleInputChange}
          />
          {!isUpdating && (
            <input
              type="email1"
              name="email"
              placeholder="Email"
              value={formData?.email}
              onChange={handleInputChange}
            />
          )}
          <div className="modal-buttons">
            <button type="submit">{isUpdating ? "Update" : "Add"}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
