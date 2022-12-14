import React from "react";
import "./Movie.css";

const Movie = (props) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const { title, poster_path, overview, vote_average } = props.data;

  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title}></img>
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};

export default Movie;
