import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className="col movieImg"/>
      <div className="col movieDetails">
        <h1 className="movieTitle">
          <strong>Título: </strong>
          {movie.title}
        </h1>
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        <p>
            <strong>Descripcion: </strong>
            {movie.overview}
        </p>
      </div>
    </div>
  );
}
