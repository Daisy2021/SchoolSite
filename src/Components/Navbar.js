import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../Assests/SchoolIconImage.png";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="name">
          <img src={Logo} alt="School" className="start"></img>
          <h3 style={{ fontSize: "1.2em" }}>
            Aanchal Public School Dudhli,Shimla
          </h3>
        </div>

        <div className="hiddenLinks ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AboutUs">About Us</NavLink>
          <NavLink to="/Academics">Academics</NavLink>
          <NavLink to="/Contact">Contact Us</NavLink>
        </div>
      </div>

      <div className="rightSide">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/AboutUs">About Us</NavLink>
        <NavLink to="/Academics">Academics</NavLink>
        <NavLink to="/Contact">Contact Us</NavLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
