import React from "react";
import Tilt from "react-parallax-tilt";
import Carousel from "../Carousel";
import Cards from "./CardList";

const GlassCard = () => {
  return (
    <div className="GlassCard-container">
      {Cards.map((card, index) => (
        <Tilt
          key={card._id}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={1000}
          scale={1.06}
          glareEnable={true}
          glareMaxOpacity={0.2}
          className="card-tilt-container"
        >
          <div className="card-content">
            <h2 className="card-title">{card.title}</h2>
            <span className="card-type">{card.service_id.name}</span>
            <p className="card-description">{card.description}</p>
          </div>
          <Carousel images={card.images} />
        </Tilt>
      ))}
      {/* <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.06}
        glareEnable={true}
        glareMaxOpacity={0.2}
        className="card-tilt-container"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${projects["deco.jpeg"]})`,
        }}
      >
        <div className="card-content">
          <h2 className="card-title">DECO</h2>
          <span className="card-type">Building</span>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Tilt>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.06}
        glareEnable={true}
        glareMaxOpacity={0.1}
        className="card-tilt-container"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${projects["automotive.jpeg"]})`,
        }}
      >
        <div className="card-content">
          <h2 className="card-title">SUV</h2>
          <span className="card-type">Automotive</span>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Tilt>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.06}
        glareEnable={true}
        glareMaxOpacity={0.1}
        className="card-tilt-container"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${projects["al-manar.jpg"]})`,
        }}
      >
        <div className="card-content">
          <h2 className="card-title">AL Manar</h2>
          <span className="card-type">Security & Safety</span>
          <p className="card-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </Tilt> */}
    </div>
  );
};

export default GlassCard;
