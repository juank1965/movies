//import movie from "../assets/movie.json";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "../assets/httpCli";
import { imgPlaceholder } from "../assets/hooks/imgPlaceholder";
import Spinner from "../components/Spinner";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getData(`/movie/${movieId}`).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imgUrl = imgPlaceholder(movie.poster_path, 500);

  return (
    <div className={styles.container}>
      <img
        className={`${styles.col} ${styles.movieImg}`}
        src={imgUrl}
        alt="movie.title"
      />
      <div className={`${styles.col} ${styles.movieText}`}>
        <h3>
          <b> Title:</b> {movie.title}
        </h3>
        <article>
          <b>Genres:</b>
          {movie.genres.map((genre) => (
            <p key={genre.id} className={styles.movieP}>
              {genre.name}
            </p>
          ))}
        </article>

        <p>
          <b> Sinopsis:</b> {movie.overview}
        </p>
      </div>
    </div>
  );
}
