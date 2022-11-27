import React, { useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import FilterProject from "./FilterProject";
import Cards from "./GlassCard/CardList";
import MoreDetailsPopup from "./Popup/MoreDetailsPopup";

const Projects = () => {
  const moreDetailsRef = useRef(null);
  const [images, setImages] = useState(null);
  const [name, setName] = useState(null);
  const [filtered, setFiltered] = useState(Cards);
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="projects-container">
      <FilterProject
        cards={Cards}
        setFiltered={setFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <motion.div layout className="projects-list-container">
        <AnimatePresence>
          {filtered.map((card, index) => (
            <motion.div
              key={card._id}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <Tilt
                tiltMaxAngleX={1}
                tiltMaxAngleY={1}
                perspective={1000}
                scale={1.06}
                className="project-card-container"
              >
                <img src={card.images[0]} width="100%" alt="" />
                <div className="project-card-content">
                  <h2 className="project-card-title">{card.title}</h2>
                  <div className="project-card-details-container">
                    <button
                      className="project-card-button"
                      onClick={(e) => {
                        setImages(card.images);
                        setName(card.title);
                        moreDetailsRef.current.openTrigger();
                      }}
                    >
                      More Details
                    </button>
                    <span className="project-card-type">
                      {card.service_id.name}
                    </span>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <MoreDetailsPopup images={images} name={name} ref={moreDetailsRef} />
    </div>
  );
};

export default Projects;
