import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import Modal from "../Components/Modal.js";
import "../styles/Header.css";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="header">
      <div className="header-para">
        <p className="icon">
          Email Us:
          <EmailIcon /> apsdudhlishimla@gmail.com
        </p>
      </div>
      <div className="header-para">
        <p className="icon">
          Contact Us:
          <PhoneIcon /> +91 9816630489
        </p>
      </div>
      <div className="header-para">
        <p
          className="icon clickLink"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Enquiry Form
          <HowToRegIcon />
        </p>
      </div>
      <div className="header-para">
        <p className="icon">
          Find Us:
          <a
            href="https://www.facebook.com/p/Aanchal-Public-School-Dudhli-shimla-100063786884288/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon style={{ color: "#0866ff" }} />
          </a>
        </p>
      </div>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default Header;
