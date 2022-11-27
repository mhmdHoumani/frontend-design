import React from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      layout={true}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="movie-card-container"
    >
      <h5 className="movie-card-title">{movie.title}</h5>
      <img
        className="movie-card-image"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt=""
      />
    </motion.div>
  );
};

export default MovieCard;
