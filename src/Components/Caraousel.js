import React, { useEffect, useState } from "react";
import "../styles/Caraousel.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Caraousel({ data }) {
  const [slide, setSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 1500);
  });

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div
      className="caraousel "
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <ArrowCircleLeftIcon className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : " slide slide-hidden"}
          />
        );
      })}
      <ArrowCircleRightIcon className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setSlide(idx);
              }}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Caraousel;
