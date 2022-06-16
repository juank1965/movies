import { useEffect, useState } from "react";
import { getData } from "../assets/httpCli";
import { MovieCard } from "./MovieCard";
import style from "./MoviesGrid.module.css";
//import { useQuery } from "../assets/hooks/UseQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";
import Spinner from "./Spinner";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    const searchUrl = search
      ? `/search/movie?query=${search}&page=${page}`
      : `/discover/movie?page=${page}`;
    getData(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setLoading(false);
    });
  }, [search, page]);

  if (!loading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => {
        setPage((prevPage) => prevPage + 1);
      }}
      loader={<Spinner />}
    >
      <ul className={style.galery}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
