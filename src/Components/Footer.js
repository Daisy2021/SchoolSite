import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="topFooter">
          <div className="para">
            <p className="left">
              <a
                href="https://www.google.com/maps/place/Aanchal+Public+School/@31.1292436,77.1626891,15z/data=!4m6!3m5!1s0x3905785cc0e0a50b:0xa64788e13df98d32!8m2!3d31.1302932!4d77.1673664!16s%2Fg%2F11c3kn4fx0?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <PlaceIcon />
              </a>
              ANCHAL PUBLIC SCHOOL DUDHLI, Main Market, Dudhli, Himachal Pradesh
              171003, India
            </p>
          </div>
          <div className="para">
            <p className="left">
              <EmailIcon />
              apsdudhlishimla@gmail.com
            </p>
          </div>
          <div className="para">
            <p className="left">
              <PhoneIcon /> +91 9816630489
            </p>
          </div>
          <div className="para">
            <p className="left">
              <a
                href="https://www.facebook.com/p/Aanchal-Public-School-Dudhli-shimla-100063786884288/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <p>
          &copy;2024 Aanchal Public School Dudhli,Shimla.All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
