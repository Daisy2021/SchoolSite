import React from 'react'
import Caraousel from '../Components/Caraousel';
import CaraouselData from "../Data/CaraouselData.json";

function Gallery() {
  const { slides } = CaraouselData;
  return (
    <div>Gallery
      <Caraousel data={slides}/>
    </div>
  )
}

export default Gallery