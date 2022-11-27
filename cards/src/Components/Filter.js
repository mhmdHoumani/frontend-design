import React, { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, movies }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
      );
      setFiltered(filtered);
    }
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "filter-button active" : "filter-button"}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={
          activeGenre === 35 ? "filter-button active" : "filter-button"
        }
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={
          activeGenre === 28 ? "filter-button active" : "filter-button"
        }
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={
          activeGenre === 12 ? "filter-button active" : "filter-button"
        }
        onClick={() => setActiveGenre(12)}
      >
        Adventure
      </button>
      <button
        className={
          activeGenre === 16 ? "filter-button active" : "filter-button"
        }
        onClick={() => setActiveGenre(16)}
      >
        Animation
      </button>
      <button
        className={
          activeGenre === 27 ? "filter-button active" : "filter-button"
        }
        onClick={() => setActiveGenre(27)}
      >
        Horror
      </button>
    </div>
  );
};

export default Filter;
