import "./App.css";
//import { MoviesGrid } from "./components/MoviesGrid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { SearchForm } from "./components/SearchForm";
//import styles from "./components/SearchForm.module.css";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className="appTitle">Movies</h1>
        </Link>
        <SearchForm />
        <hr />
      </header>
      <main>
        <Switch>
          <Route exact path="/movie/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
