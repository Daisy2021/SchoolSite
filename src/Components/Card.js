import React from "react";
import "../styles/Card.css";

function Card() {
  return (
    <div className="card-container">
      <img
        src="../Images/veenadidi.png"
        alt="Card Image"
        className="card-image"
      />
      <h2 className="card-title">Principal's Message</h2>
      <p className="card-description">
        “Instruction ends in the schoolroom,
        <br />
        but education ends only with life.
        <br />
        A child is given to the universe to be educated.”
        <br /> —Frederick William Robertson
      </p>
    </div>
  );
}

export default Card;
