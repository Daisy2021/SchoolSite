import React from "react";
import Caraousel from "../Components/Caraousel.js";
import CaraouselData from "../Data/CaraouselData.json";
import '../styles/Home.css';
import Card from "../Components/Card.js";

function Home() {
  const { slides } = CaraouselData;
  return (
    <div className="home">
      <Caraousel data={slides} />
     <Card/>
    </div>
  );
}

export default Home;
