import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// ========== API ==========

import { fetchTrendingMovies } from 'services/api';

// ========== styles ==========

import css from '../pages/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <div className={css.homePageWrap}>
      {error && <p>{error}</p>}
      <h1 className={css.pageTitle}>Trending today</h1>
      <ul className={css.homeMovieList}>
        {movies.map(({ id, title }) => (
          <li className={css.homeMovieItem} key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
