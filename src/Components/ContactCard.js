import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import "../styles/ContactCard.css";
import { withTheme } from "@emotion/react";

function ContactCard() {
  return (
    <div className="contactCard-container">
      <div className="address card">
        <h2>Address</h2>
        <p>
          <a
            href="https://www.google.com/maps/place/Aanchal+Public+School/@31.1292436,77.1626891,15z/data=!4m6!3m5!1s0x3905785cc0e0a50b:0xa64788e13df98d32!8m2!3d31.1302932!4d77.1673664!16s%2Fg%2F11c3kn4fx0?entry=ttu"
            target="_blank"
            style={{ color: "#0866ff" }}
          >
            <PlaceIcon />
          </a>
          ANCHAL PUBLIC SCHOOL DUDHLI,
          <br />
          Main Market, Dudhli, <br />
          Himachal Pradesh 171003, India
        </p>
      </div>
      <div className="contact card">
        <h2>Call Us </h2>
        <p>
          <PhoneIcon /> +91 9816630489
        </p>
      </div>
      <div className="email card">
        <h2>Email Us</h2>
        <p>
          <EmailIcon /> apsdudhlishimla@gmail.com
        </p>
      </div>
      <div className="email card">
        <h2>Find Us</h2>
        <p>
          <a
            href="https://www.facebook.com/p/Aanchal-Public-School-Dudhli-shimla-100063786884288/"
            target="_blank"
            style={{ color: "#0866ff" }}
          >
            <FacebookIcon />
          </a>
        </p>
      </div>
      <div className="email card">
        <h2>Website</h2>
        <p>
          <LanguageIcon /> www.apsdudhlishimla.in
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
