import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import { motion, AnimatePresence } from "framer-motion";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [activeGenre, setActiveGenre] = useState(0);
  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=eb2332aed17c10b00ff45612199c618c&language=en-US&page=1"
    );
    const result = await data.json();
    setMovies(result.results);
    setFiltered(result.results);
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  return (
    <div className="movies-container">
      <Filter
        movies={movies}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout={true} className="popular-movies-container">
        <AnimatePresence>
          {filtered &&
            filtered.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Movies;
