
import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../Assests/SchoolIconImage.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';


function Navbar() {
  return (
    <div className="navbar">
       <div className="leftSide">
        <img src={Logo} alt="School"></img>
        <h3>Aanchal Public School Dudhli,Shimla</h3>
       </div>
       <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/Academics">Academics</Link>
        <Link to="/Admission">Admission</Link>
        <Link to="/Facilities">Facilities</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/ContactUs">ContactUs</Link>
       <button><ReorderIcon/></button>
        
       </div>
    </div>
  )
}

export default Navbar