import React, { useEffect } from "react";

const FilterProject = ({
  setActiveCategory,
  activeCategory,
  setFiltered,
  cards,
}) => {
  useEffect(() => {
    if (activeCategory === "All") {
      setFiltered(cards);
    } else {
      const filtered = cards.filter(
        (card) => card.service_id.name === activeCategory
      );
      setFiltered(filtered);
    }
  }, [activeCategory]);

  return (
    <div className="filter-container">
      <button
        className={
          activeCategory === "All" ? "filter-button active" : "filter-button"
        }
        onClick={() => setActiveCategory("All")}
      >
        All
      </button>
      <button
        className={
          activeCategory === "Decorative"
            ? "filter-button active"
            : "filter-button"
        }
        onClick={() => setActiveCategory("Decorative")}
      >
        Decorative
      </button>
      <button
        className={
          activeCategory === "Building"
            ? "filter-button active"
            : "filter-button"
        }
        onClick={() => setActiveCategory("Building")}
      >
        Building
      </button>
      <button
        className={
          activeCategory === "Safety & Security"
            ? "filter-button active"
            : "filter-button"
        }
        onClick={() => setActiveCategory("Safety & Security")}
      >
        Safety & Security
      </button>
      <button
        className={
          activeCategory === "Automotive"
            ? "filter-button active"
            : "filter-button"
        }
        onClick={() => setActiveCategory("Automotive")}
      >
        Automotive
      </button>
    </div>
  );
};

export default FilterProject;
