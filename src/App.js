import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([]);

  const api_key = "ce88408886cda80f8a1c6dbac9ae3fd0";
  const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ce88408886cda80f8a1c6dbac9ae3fd0&page=1";
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=ce88408886cda80f8a1c6dbac9ae3fd0&query=";
  // images:

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data);
      });
  }, []);

  return (
    <div className="app">
      {movies.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </div>
  );
}

export default App;
