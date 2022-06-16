import { MoviesGrid } from "../components/MoviesGrid";
//import { SearchForm } from "../components/SearchForm";
import { useQuery } from "../assets/hooks/UseQuery";
import { useDebounce } from "../assets/hooks/useDebounce";
import style from "./LandingPage.module.css";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 200);

  return (
    <div className={style.nav}>
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />;
    </div>
  );
}
