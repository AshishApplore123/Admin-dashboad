import "./Modal.css";

const KeyModal = ({ onClose, data }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span style={{ color: "red" }}>
          Save this key for future refernce, If the key is lost please use the
          rotate functionality to generate a new api key.
        </span>
        <br />
        <span style={{ fontWeight: "bold", paddingTop: "20px" }}>{data}</span>
        <div className="modal-buttons">
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyModal;
