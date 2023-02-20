import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchMovies } from 'services/api';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    if (!search) {
      return;
    }

    fetchMovies(search)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => setError(error));
  }, [search]);

  const onMovieSearch = search => {
    setSearch(search);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={onMovieSearch} />
      {error && <p>{error}</p>}
      {search && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
