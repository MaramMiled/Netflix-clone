import React, { useEffect, useState } from 'react';
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        if (request.data && request.data.results) {
          setMovies(request.data.results);
        } else {
          console.error("Unexpected data structure:", request.data);
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMovies([]);
      }
    }

    fetchData();
  }, [fetchUrl]);

  console.log("Movies:", movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => 
          ((isLargeRow && movie.poster_path) || 
          (!isLargeRow && movie.backdrop_path)) && (
            <img
              className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
              key={movie.id}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          )
        )}
      </div>
    </div>
  );  
}

export default Row; // This is crucial for the default export

