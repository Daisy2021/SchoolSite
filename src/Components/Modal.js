import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EnquiryForm from "./EnquiryForm.js";
import "../styles/Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="close" onClick={closeModal}>
          <CloseIcon />
        </div>
        <EnquiryForm close={closeModal} />
      </div>
    </div>
  );
}

export default Modal;
