import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// ========== styles ==========

import css from './MoviesList.module.css';

const MoviesList = ({ movies, search }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
            }}
            state={{
              from: location,
              search: search,
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  search: PropTypes.string,
};
