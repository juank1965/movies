import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";
import { imgPlaceholder } from "../assets/hooks/imgPlaceholder";
export function MovieCard(props) {
  const imgUrl = imgPlaceholder(props.movie.poster_path, 300);
  return (
    <li key={props.movie.id} className={style.movieCard}>
      <Link to={`/movie/${props.movie.id}`}>
        <img src={imgUrl} alt={props.movie.title} className={style.movieImg} />
        <h3 className={style.movieName}>{props.movie.title}</h3>
      </Link>
    </li>
  );
}
