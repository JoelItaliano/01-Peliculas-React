import "../components/MovieCard.css"
import { Link } from "react-router-dom";
export function MovieCard({movie}) {
    const imgeUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <li className="movieCard">
            <Link to={"/movies/" + movie.id}>                
                <img 
                    width={230}
                    height={345}
                    src={imgeUrl}
                    alt={movie.title}
                    className="movieImg"
                />               
            </Link>
            <div>{movie.title}</div>
        </li>
    )
}