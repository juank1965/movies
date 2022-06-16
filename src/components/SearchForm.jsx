import styles from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../assets/hooks/UseQuery";

// Crear formularo de busqueda

export function SearchForm() {
  const query = useQuery();
  const searchForm = query.get("search");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.SearchForm}>
      <input
        className={styles.SearchForm__input}
        type="text"
        placeholder="Search..."
        aria-label="Search Movies "
        value={searchForm}
        onChange={(e) => {
          const value = e.target.value;
          history.push(`/?search=${value}`);
        }}
      />
      <button className={styles.SearchForm_button} type="submit" value="Buscar">
        <FaSearch />
      </button>
    </form>
  );
}
