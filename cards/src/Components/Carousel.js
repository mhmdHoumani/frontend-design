import React, { useState } from "react";
import { useEffect } from "react";

const Carousel = ({ images }) => {
  const [mouseOver, setOnMouseOver] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = images.length;
  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    if (!mouseOver) {
      setTimeout(() => {
        nextSlide();
      }, 4000);
    }
  }, [mouseOver, length, current]);

  return (
    <div
      className="card-images-container"
      style={{
        backgroundImage:
          images.length > 1
            ? `url(${images[current === 0 ? length - 1 : current - 1]})`
            : "none",
      }}
      onMouseOver={() => setOnMouseOver(true)}
      onMouseOut={() => setOnMouseOver(false)}
    >
      {images.length > 1 ? (
        images.map((image, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && <img src={image} width="100%" alt={image} />}
          </div>
        ))
      ) : (
        <img src={images[0]} width="100%" alt={images[0]} />
      )}
    </div>
  );
};

export default Carousel;
