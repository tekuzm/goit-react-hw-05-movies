import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
